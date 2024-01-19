"use client";
import React from "react";
import { Game } from "./Game";
import "./App.css";
import { SudokuProvider } from "./context/SudokuContext";

export default function Page() {
  return (
    <SudokuProvider>
      <Game />
    </SudokuProvider>
  );
}
