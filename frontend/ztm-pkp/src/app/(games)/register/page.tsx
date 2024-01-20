// pages/register.tsx
"use client";
import React, { useState } from "react";

const RegisterPage: React.FC = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    passwordRepeat: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log("Registration successful");
      } else {
        console.log("Registration failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "auto",
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h1 style={{ textAlign: "center", color: "#333" }}>Rejestracja</h1>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <label
          style={{ marginBottom: "15px", fontSize: "16px", color: "#555" }}
        >
          Username:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            style={{
              color: "#333",
              marginTop: "5px",
              padding: "10px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
        </label>
        <label
          style={{ marginBottom: "15px", fontSize: "16px", color: "#555" }}
        >
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            style={{
              color: "#333",
              marginTop: "5px",
              padding: "10px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
        </label>
        <label
          style={{ marginBottom: "15px", fontSize: "16px", color: "#555" }}
        >
          Repeat Password:
          <input
            type="password"
            name="passwordRepeat"
            value={formData.passwordRepeat}
            onChange={handleChange}
            style={{
              color: "#333",
              marginTop: "5px",
              padding: "10px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
        </label>
        <button
          type="submit"
          style={{
            backgroundColor: "#4CAF50",
            color: "white",
            padding: "15px",
            borderRadius: "4px",
            cursor: "pointer",
            fontSize: "18px",
          }}
        >
          Zarejestruj się
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
