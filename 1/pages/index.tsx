"use client";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import VideoBackground from "@/components/Backvid";

export default function Home() {
  const words = [
    { text: "Build" },
    { text: "awesome" },
    { text: "Websites" },
    { text: "with" },
    { text: "Eos Noctus", className: "text-pink-700 dark:text-blue-500" }, /*here is the color of EOSNOCTUS*/
  ];

  return (
    <div className="relative min-h-screen">
      <VideoBackground />
      <div className="absolute inset-0 whit bg-opacity-50">
        {" "}
        {/* This adds a semi-transparent overlay */}
        <div className="flex flex-col items-center justify-center min-h-screen relative z-10">
          <TypewriterEffect
            words={words}
            className="text-base sm:text-lg md:text-xl text-white"
          />
          <h1 className="mt-8 text-3xl sm:text-4xl md:text-5xl font-bold text-center text-white">
            Welcome to My Portfolio
          </h1>
          <p className="mt-4 text-center text-gray-300 max-w-md text-lg">
            Here you can add a brief introduction about yourself or your work.
          </p>
        </div>
      </div>
    </div>
  );
}
