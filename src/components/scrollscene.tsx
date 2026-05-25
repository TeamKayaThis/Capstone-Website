"use client";

import { useEffect, useState } from "react";

const scenes = [
  "/contents/scene1.jpg",
  "/contents/scene2.jpg",
  "/contents/scene3.jpg",
];

export default function ScrollScene() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      const newIndex = Math.min(
        scenes.length - 1,
        Math.floor(scrollY / 400)
      );

      setIndex(newIndex);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative h-[500px] overflow-hidden rounded-3xl border border-white/10">
      <img
        src={scenes[index]}
        className="w-full h-full object-cover transition duration-700"
      />
    </div>
  );
}