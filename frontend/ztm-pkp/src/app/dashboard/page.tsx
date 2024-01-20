"use client";
import React, { useState } from "react";
import { useEffect } from "react";

export default function Dashboard() {
  const [countdown, setCountdown] = useState(1199);

  const handleBreak = () => {
    window.location.href = "/paint/123";
  };

  // ...

  useEffect(() => {
    const timer = setTimeout(() => {
      setCountdown(countdown - 1);
    }, 1000);
    return () => clearTimeout(timer);
  });

  // ...

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-bold">Hello Olek</h1>
      <p className="text-lg">
        Countdown to break: {Math.floor(countdown / 60)}:{countdown % 60}
      </p>
      <button
        className="px-4 py-2 mt-4 text-white bg-blue-500 rounded hover:bg-blue-600"
        onClick={handleBreak}
      >
        Take a break now
      </button>
    </div>
  );
}
