import React, { useState } from "react";
import {} from "react-bootstrap";
import api from "../../services/api";

export default function Login({ history }) {
  const [email, setEmail] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    console.log(email);

    const response = await api.post("/sessions", { email });

    if (response.data == null) {
      alert("Usuario não encontrado");
    } else {
      const { _id } = response.data;
      localStorage.setItem("User", _id);

      history.push("/dashboard");
    }
  }

  return (
    <>
      <p>
        Controle do seu <strong>Cartão de Ponto</strong>
      </p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="email">E-mail *</label>
        <input
          type="email"
          id="email"
          placeholder="Seu melhor e-email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <button className="btn" type="submit">
          Entrar
        </button>
      </form>
    </>
  );
}
