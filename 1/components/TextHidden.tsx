"use client";
import React from "react";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "@/components/ui/text-reveal-card";

interface TextbProps {
  theme: any;
  text: string;
  revealText: string;
}

export default function Textb({ theme, text, revealText }: TextbProps) {
  return (
    <div className={`flex items-center justify-center h-64 rounded-2xl w-full`}>
      <TextRevealCard
        theme={theme}
        text={text}
        revealText={revealText}
      ></TextRevealCard>
    </div>
  );
}