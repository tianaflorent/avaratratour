"use client";
import { useEffect, useState } from "react";

interface ImageSliderProps {
  images: string[];
  delay?: number; // temps entre les images en ms
}

export default function ImageSlider({ images, delay = 3000 }: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, delay);
    return () => clearInterval(interval);
  }, [images.length, delay]);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`slide-${index}`}
          className={`
            absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000
            ${index === currentIndex ? "opacity-100" : "opacity-0"}
          `}
        />
      ))}
    </div>
  );
}
