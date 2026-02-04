import { useState } from "react";

interface LightboxImageProps {
  src: string;
  alt: string;
  className?: string;
}

export default function LightboxImage({ src, alt, className }: LightboxImageProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Миниатюра картинки */}
      <img
        src={src}
        alt={alt}
        className={`${className ?? ""} cursor-pointer`}
        onClick={() => setIsOpen(true)}
      />

      {/* Модальное окно */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setIsOpen(false)}
        >
          <img
            src={src}
            alt={alt}
            className="max-w-full max-h-full rounded-lg shadow-lg"
            onClick={(e) => e.stopPropagation()}
          />
          {/* Крестик для закрытия */}
          <button
            className="absolute top-5 right-5 text-white text-3xl font-bold"
            onClick={() => setIsOpen(false)}
          >
            &times;
          </button>
        </div>
      )}
    </>
  );
}

