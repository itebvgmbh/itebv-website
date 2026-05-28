import { useState } from "react";
import { User } from "lucide-react";

interface ProfileImageProps {
  src: string;
  alt: string;
}

export default function ProfileImage({ src, alt }: ProfileImageProps) {
  const [hasError, setHasError] = useState(false);

  return (
    <div className="relative aspect-square max-w-sm mx-auto lg:mx-0 overflow-hidden rounded-xl bg-bg-alt border border-border">
      {!hasError ? (
        <img
          src={src}
          alt={alt}
          className="absolute inset-0 w-full h-full object-cover"
          onError={() => setHasError(true)}
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center bg-bg-alt">
          <User size={96} className="text-text-light/40" />
        </div>
      )}
    </div>
  );
}
