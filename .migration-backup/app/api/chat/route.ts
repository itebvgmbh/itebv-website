import Anthropic from "@anthropic-ai/sdk";
import { SYSTEM_PROMPT } from "@/lib/chatbot-context";

export const runtime = "nodejs";

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY || "",
});

export async function POST(request: Request) {
  try {
    const { messages } = await request.json();

    if (!process.env.ANTHROPIC_API_KEY) {
      return Response.json(
        { error: "Chatbot ist momentan nicht konfiguriert." },
        { status: 503 }
      );
    }

    // Format messages for Anthropic API
    const formattedMessages = messages.map(
      (msg: { role: string; content: string }) => ({
        role: msg.role as "user" | "assistant",
        content: msg.content,
      })
    );

    // Create streaming response
    const stream = anthropic.messages.stream({
      model: "claude-sonnet-4-5-20250929",
      max_tokens: 1024,
      system: SYSTEM_PROMPT,
      messages: formattedMessages,
    });

    // Convert to ReadableStream for the response
    const readableStream = new ReadableStream({
      async start(controller) {
        const encoder = new TextEncoder();
        let closed = false;

        const safeClose = (errorData?: { error: string }) => {
          if (closed) return;
          closed = true;
          try {
            if (errorData) {
              controller.enqueue(
                encoder.encode(`data: ${JSON.stringify(errorData)}\n\n`)
              );
            }
            controller.enqueue(encoder.encode("data: [DONE]\n\n"));
          } catch {
            // Controller may already be closed
          }
          controller.close();
        };

        stream.on("text", (text: string) => {
          if (!closed) {
            controller.enqueue(
              encoder.encode(`data: ${JSON.stringify({ text })}\n\n`)
            );
          }
        });

        stream.on("end", () => safeClose());

        stream.on("error", (error: unknown) => {
          console.error("Stream error:", error);
          const err = error as { error?: { message?: string }; message?: string };
          const msg =
            err?.error?.message ||
            err?.message ||
            "Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.";
          safeClose({ error: msg });
        });
      },
    });

    return new Response(readableStream, {
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        Connection: "keep-alive",
      },
    });
  } catch (error) {
    console.error("Chat API error:", error);
    return Response.json(
      { error: "Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut." },
      { status: 500 }
    );
  }
}
