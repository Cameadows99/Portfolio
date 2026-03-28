"use client";

import { useState } from "react";
import Image from "next/image";

type Screenshot = {
  src: string;
  caption: string;
};

type ScreenshotSliderProps = {
  screenshots: Screenshot[];
  title: string;
};

export default function ScreenshotSlider({
  screenshots,
  title,
}: ScreenshotSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!screenshots.length) {
    return <p>[Placeholder] Add screenshots of the project here.</p>;
  }

  const currentShot = screenshots[currentIndex];

  const goPrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? screenshots.length - 1 : prev - 1
    );
  };

  const goNext = () => {
    setCurrentIndex((prev) =>
      prev === screenshots.length - 1 ? 0 : prev + 1
    );
  };

  return (
  <div className="space-y-4">
    <div className="relative rounded-xl border border-white/10 bg-white/5 p-6">
      
      {/* ARROWS OUTSIDE */}
      {screenshots.length > 1 && (
        <>
          <button
            onClick={goPrev}
            className="absolute left-4 top-1/2 z-20 -translate-y-1/2
            flex h-11 w-11 items-center justify-center rounded-full
            bg-[#f6b15f] text-xl font-bold text-[#1b2233]
            shadow-[0_0_18px_rgba(246,177,95,0.35)]
            transition hover:scale-110"
          >
            ←
          </button>

          <button
            onClick={goNext}
            className="absolute right-4 top-1/2 z-20 -translate-y-1/2
            flex h-11 w-11 items-center justify-center rounded-full
            bg-[#f6b15f] text-xl font-bold text-[#1b2233]
            shadow-[0_0_18px_rgba(246,177,95,0.35)]
            transition hover:scale-110"
          >
            →
          </button>
        </>
      )}

      {/* IMAGE (CENTERED + SMALLER) */}
      <div className="mx-auto w-full max-w-2xl overflow-hidden rounded-lg bg-[#0b1830]">
        <div className="relative h-[240px] sm:h-[300px] md:h-[360px]">
          <Image
            src={currentShot.src}
            alt={currentShot.caption || `${title} screenshot`}
            fill
            className="object-contain"
          />
        </div>
      </div>
    </div>

    {/* CAPTION */}
    <div className="mx-auto flex w-full max-w-2xl items-start justify-between gap-4">
      <p className="text-sm text-gray-300">{currentShot.caption}</p>

      {screenshots.length > 1 && (
        <p className="shrink-0 text-sm text-gray-400">
          {currentIndex + 1} / {screenshots.length}
        </p>
      )}
    </div>
  </div>
);
}