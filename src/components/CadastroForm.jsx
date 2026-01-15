// src/components/CadastroForm.jsx
import { Link } from 'react-router-dom';
import { useState } from "react";
import '../css/cadastro.css'; // Importa o CSS do CadastroForm
import { db } from "../firebase/firebaseConfig"; // Importa a configuração do Firebase
import { collection, addDoc } from "firebase/firestore";

export default function CadastroForm() {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    telefone: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Formulário enviado!"); // 👈 Adiciona essa linha
    try {
      await addDoc(collection(db, "cadastros"), { ...form, data: new Date() });
      alert("Cadastro enviado com sucesso!");
      setForm({ nome: "", email: "", telefone: "" });
    } catch (error) {
      console.error("Erro ao cadastrar:", error);
      alert("Erro ao cadastrar. Veja o console.");
    }
  };

  const handleWhatsApp = () => {
    // Substitua pelo número do WhatsApp da sua empresa
    const numeroWhatsApp = "+5585992639142";
    const mensagem = "Olá, gostaria de saber mais sobre os produtos!";
    window.open(`https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`, "_blank");
  };

  return (
    <><div className="header">
      <div className="logo">
        <p>TF Joias</p>
      </div>
      <nav>
        <Link to="/">Início</Link>
        <a href="sobre.html">Loja</a>
        <Link to="/catalogo">Catálogo</Link>
        <a href="contato.html">Contato</a>
      </nav>
    </div>
    <section className='tela-de-cadastro'>
      <div className="formulario">
        <form onSubmit={handleSubmit} className="form-cadastro">
          <h2 className="">Cadastro</h2>
          <input
            type="text"
            name="nome"
            placeholder="Qual seu nome?"
            value={form.nome}
            onChange={handleChange}
            required
            className="" />
          <input
            type="email"
            name="email"
            placeholder="Por favor, insira seu e-mail"
            value={form.email}
            onChange={handleChange}
            required
            className="" />
          <input
            type="text"
            name="telefone"
            placeholder="Telefone com DDD"
            value={form.telefone}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-yellow-500" />
          <div className='botoes'>
            <button
              type="submit"
              className="w-full p-3 bg-yellow-500 text-black font-bold rounded-lg hover:bg-yellow-400 transition duration-300"
            >
              Cadastrar
            </button>

            <div className="text-center mt-4">
              <button
                onClick={handleWhatsApp}
                className="text-yellow-500 font-bold hover:underline"
              >
                Fale conosco pelo WhatsApp
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
    </>
  );
}
