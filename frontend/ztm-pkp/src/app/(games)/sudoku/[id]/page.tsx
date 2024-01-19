"use client";
import React from "react";
import { Game } from "./Game";
import "./App.css";
import { SudokuProvider } from "./context/SudokuContext";

export default function Page({ params }: { params: { id: string } }) {
  return (
    <div>
      <SudokuProvider>
        <Game />
      </SudokuProvider>
      <div>Siema {params.id}</div>
    </div>
  );
}
