import { useState } from "react";
import { User } from "lucide-react";

interface ProfileImageProps {
  src: string;
  alt: string;
}

export default function ProfileImage({ src, alt }: ProfileImageProps) {
  const [hasError, setHasError] = useState(false);

  return (
    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-line bg-bg-alt">
      {!hasError ? (
        <img
          src={src}
          alt={alt}
          className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 ease-out hover:scale-[1.03]"
          onError={() => setHasError(true)}
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center bg-bg-alt">
          <User size={96} className="text-muted/50" />
        </div>
      )}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/10 to-transparent"
      />
    </div>
  );
}
