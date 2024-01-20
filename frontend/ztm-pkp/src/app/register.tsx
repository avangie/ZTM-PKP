// pages/register.tsx

import React, { useState } from "react";

const RegisterPage: React.FC = () => {
  // Stan dla przechowywania danych formularza
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    passwordRepeat: "",
  });

  // Obsługa zmiany wartości w polach formularza
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Obsługa przesyłania formularza
  const handleSubmit = (e: React.FormEvent) => {
    console.log("AAAAAAAAAA");
  };

  return (
    <div>
      <h1>Rejestracja</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Repeat Password:
          <input
            type="password"
            name="passwordRepeat"
            value={formData.passwordRepeat}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Zarejestruj</button>
      </form>
    </div>
  );
};

export default RegisterPage;
