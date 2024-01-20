"use client";

import React, { useEffect, useRef, useState } from "react";
import Menu from "./components/Menu";
import "./App.css";
import Image from "next/image";
import profilepic from "./1234.png";

function Page({ params }) {
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [lineWidth, setLineWidth] = useState(5);
  const [lineColor, setLineColor] = useState("black");
  const [lineOpacity, setLineOpacity] = useState(0.1);
  const [textInput, setTextInput] = useState("");

  if (params.id == 123) {
    return (
      <div className="flex flex-col justify-center">
        <div
          className="text-white mx-auto"
          style={{ fontSize: "larger", fontWeight: "bold" }}
        >
          Describe the picture.
        </div>
        <Image
          src={profilepic}
          width={700}
          height={0}
          alt="Picture of the author"
          className="w-64 h-64 mx-auto"
        />
        <input
          type="text"
          value={textInput}
          onChange={(e) => setTextInput(e.target.value)}
          className="border border-gray-300 rounded-md px-2 py-1 mt-2 w-64 mx-auto"
        />
        <button
          className="text-white"
          onClick={() => alert("Than you for your submitio!")}
        >
          Submit
        </button>
      </div>
    );
  }
  // Initialization when the component
  // mounts for the first time
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.globalAlpha = lineOpacity;
    ctx.strokeStyle = lineColor;
    ctx.lineWidth = lineWidth;
    ctxRef.current = ctx;
  }, [lineColor, lineOpacity, lineWidth]);

  // Function for starting the drawing
  const startDrawing = (e) => {
    ctxRef.current.beginPath();
    ctxRef.current.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    setIsDrawing(true);
  };

  // Function for ending the drawing
  const endDrawing = () => {
    ctxRef.current.closePath();
    setIsDrawing(false);
  };

  const draw = (e) => {
    if (!isDrawing) {
      return;
    }
    ctxRef.current.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    ctxRef.current.stroke();
  };

  function dataURItoBlob(dataURI) {
    console.log(dataURI);
    const byteString = atob(dataURI.split(",")[1]);
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);

    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }

    return new Blob([ab], { type: "png" }); // Adjust the type as needed
  }

  const saveCanvas = () => {
    const canvas = canvasRef.current;
    const dataURL = canvas.toDataURL();
    const blob = dataURItoBlob(dataURL);
    console.log(blob);

    // const link = document.createElement("a");
    // link.href = URL.createObjectURL(blob);
    // link.download = "canvas.png";

    const formData = new FormData();
    formData.append("png_id", "cokolwiek");
    formData.append("user_id", 6);
    formData.append("png", blob, "canvas.png");

    fetch("http://0.0.0.0:8000/app/pngs/", {
      method: "POST",
      body: formData, // Use formData instead of FormData
      // headers: {
      //   "Content-Type": "application/json"  // Remove this line
      // }
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle response from the backend
        console.log(data);
      })
      .catch((error) => {
        // Handle error
        console.error(error);
      });
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  return (
    <div className="App">
      <div className="draw-area" style={{ marginTop: "20px" }}>
        <Menu
          setLineColor={setLineColor}
          setLineWidth={setLineWidth}
          setLineOpacity={setLineOpacity}
        />
        <canvas
          onMouseDown={startDrawing}
          onMouseUp={endDrawing}
          onMouseMove={draw}
          ref={canvasRef}
          width={`1280px`}
          height={`720px`}
        />
        <button onClick={saveCanvas}>Submit</button>
        <br></br>
        <button onClick={clearCanvas}>Clear</button>
      </div>
      <div>Draw a picture: </div>
      <p>
      <h1 type="text">I HAVE NOT SLEPT FOR 24 HOURS</h1>
    </p>
    </div>
  );
}

export default Page;
