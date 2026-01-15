import imagem1 from "../img/aneis-dourados.png";
import anel1 from "../img/anel1.jpeg";
import anel2 from "../img/anel2.jpeg";
import anel3 from "../img/anel3.jpeg";
import anel4 from "../img/anel4.jpeg";
import anel5 from "../img/anel5.jpeg";
import anel6 from "../img/anel6.jpeg";
import anel7 from "../img/anel7.jpeg";
import anel8 from "../img/anel8.jpeg";
import anel9 from "../img/anel9.jpeg";
import colar1 from "../img/colar1.jpeg";
import argolas1  from "../img/argolas1.jpeg";
import argolas2  from "../img/argolas2.jpeg";
import brincoslx1 from "../img/brincoslx1.jpeg";
import brincoslx2 from "../img/brincoslx2.jpeg";
import trio1 from "../img/trio1.jpeg";
import trio2 from "../img/trio2.jpeg";
import pulseiras1 from "../img/pulseiras1.jpeg";
import pulseiras2 from "../img/pulseiras2.jpeg";  
import pulseiras3 from "../img/pulseiras3.jpeg";
import colarlx1 from "../img/colarlx1.jpeg";
import colarlx2 from "../img/colarlx2.jpeg";
import colarlx3 from "../img/colarlx3.jpeg";
import colarfem1 from "../img/colarfem1.jpeg";
import colarfem2 from "../img/colarfem2.jpeg";
import colarfem3 from "../img/colarfem3.jpeg";
import colarfem4 from "../img/colarfem4.jpeg";
import colarfem5 from "../img/colarfem5.jpeg";
import colarfem6 from "../img/colarfem6.jpeg";
import colarfem7 from "../img/colarfem7.jpeg";
import colarfem8 from "../img/colarfem8.jpeg";
import pigente1 from "../img/pigente1.jpeg";
import pigente3 from "../img/pigente3.jpeg";
import kit1 from "../img/kit1.jpeg";
import kit2 from "../img/kit2.jpeg";
import kit3 from "../img/kit3.jpeg";
import kit4 from "../img/kit4.jpeg";
import kit5 from "../img/kit5.jpeg";
import kit6 from "../img/kit6.jpeg";
import kit7 from "../img/kit7.jpeg";
import kit8 from "../img/kit8.jpeg";  
import kit9 from "../img/kit9.jpeg";
import kit10 from "../img/kit10.jpeg";  
import kit11 from "../img/kit11.jpeg";
import p1 from "../img/p1.jpeg";
import p2 from "../img/p2.jpeg";
import p3 from "../img/p3.jpeg"; 
import p4 from "../img/p4.jpeg";
import p5 from "../img/p5.jpeg";
import p6 from "../img/p6.jpeg";
import p7 from "../img/p7.jpeg";
import p8 from "../img/p8.jpeg";
import p9 from "../img/p9.jpeg";
import p10 from "../img/p10.jpeg";
import p11 from "../img/p11.jpeg";
import p12 from "../img/p12.jpeg";
import p13 from "../img/p13.jpeg";
import p14 from "../img/p14.jpeg";
import p15 from "../img/p15.jpeg";
import p16 from "../img/p16.jpeg";
import p17 from "../img/p17.jpeg";
import p18 from "../img/p18.jpeg";
import p19 from "../img/p19.jpeg";
import p20 from "../img/p20.jpeg";
import p21 from "../img/p21.jpeg";
import p22 from "../img/p22.jpeg";
import p23 from "../img/p23.jpeg";
import gargantilha1 from "../img/gargantilha1.jpeg";
import berloque1 from "../img/berloque1.jpeg";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/loja.css";

export default function Loja() {
  const [active, setActive] = useState(null);
  const [animating, setAnimating] = useState(false);
  const [filtered, setFiltered] = useState([]);

  const numeroWhatsApp = "5585994282122"; // formato internacional

  const categorias = [
    { id: 1, nome: "Anéis", className: "item-p1" },
    { id: 2, nome: "Alianças", className: "item-p2" },
    { id: 3, nome: "Pulseira Feminina", className: "item-p3" },
    { id: 4, nome: "Pulseira Masculina", className: "item-p4" },
    { id: 5, nome: "Correntes", className: "item-p5" },
    { id: 6, nome: "Colares", className: "item-p6" },
    { id: 7, nome: "Anéis Masculinos", className: "item-p7" },
    { id: 8, nome: "Brincos", className: "item-p8" },
    { id: 9, nome: "Personalizados", className: "item-p9" },
    
  ];

  const produtos = [
    // { id: 101, nome: "Anel Ouro 18k", preco: "R$ 2.500", categoria: "Anéis", img: imagem1 },
    // { id: 102, nome: "Aliança Casal", preco: "R$ 3.800", categoria: "Alianças", img: "/img/alianca1.jpg" },
    // { id: 103, nome: "Pulseira Feminina Prata", preco: "R$ 950", categoria: "Pulseira Feminina", img: "/img/pulseiraF1.jpg" },
    // { id: 104, nome: "Colar Coração", preco: "R$ 1.200", categoria: "Colares", img: "/img/colar1.jpg" },
    // { id: 105, nome: "Corrente Masculina", preco: "R$ 2.100", categoria: "Correntes", img: "/img/corrente1.jpg" },
    // { id: 106, nome: "Pulseira Masculina Couro", preco: "R$ 700", categoria: "Pulseira Masculina", img: "/img/pulseiraM1.jpg" },
    { id: 107, nome: "Anel Solitário", preco: "R$ 80", categoria: "Anéis", img: anel1 },
    { id: 108, nome: "Anel Solitário", preco: "R$ 140", categoria: "Anéis", img: anel2 },
    { id: 109, nome: "Anel Solitário", preco: "R$ 80", categoria: "Anéis", img: anel3 },
    { id: 110, nome: "Anel Solitário", preco: "R$ 115", categoria: "Anéis", img: anel4 },
    { id: 111, nome: "Anel duplo", preco: "R$ 270", categoria: "Anéis", img: anel5 },
    { id: 112, nome: "Aparador linha luxo", preco: "R$ 75", categoria: "Anéis", img: anel6 },
    { id: 113, nome: "Solitário Cravejado", preco: "R$ 120", categoria: "Anéis", img: anel7 },
    { id: 114, nome: "Aparador Cravejado", preco: "R$ 85", categoria: "Anéis", img: anel8 },
    { id: 115, nome: "Argolas Cravejadas", preco: "R$ 128", categoria: "Brincos", img: anel9 },
    { id: 116, nome: "Colar de Prata", preco: "R$ 120", categoria: "Colares", img: colar1 },
    { id: 117, nome: "Argolas", preco: "R$ 90", categoria: "Brincos", img: argolas1 },
    { id: 118, nome: "Argolas de Trevo", preco: "R$ 68", categoria: "Brincos", img: argolas2 },
    { id: 119, nome: "Brincos linha Luxo", preco: "R$ 80", categoria: "Brincos", img: brincoslx1 },
    { id: 120, nome: "Brincos linha Luxo", preco: "R$ 120", categoria: "Brincos", img: brincoslx2 },
    { id: 121, nome: "Trio em Prata", preco: "R$ 25", categoria: "Brincos", img: trio1 },
    { id: 122, nome: "Trio em Prata", preco: "R$ 55", categoria: "Brincos", img: trio2 },
    { id: 123, nome: "Bracelete em Prata", preco: "R$ 150", categoria: "Pulseira Feminina", img: pulseiras1 },
    { id: 124, nome: "Pulseira Consagração", preco: "R$ 95", categoria: "Pulseira Feminina", img: pulseiras2 },
    { id: 125, nome: "Pulseira Nossa Senhora Aparecida", preco: "R$ 180", categoria: "Pulseira Feminina", img: pulseiras3 },
    { id: 126, nome: "Colar de Coração", preco: "R$ 120", categoria: "Colares", img: colarlx1 },
    { id: 127, nome: "Colar Linha Luxo", preco: "R$ 180", categoria: "Colares", img: colarlx2 },
    { id: 127, nome: "Colar em Prata Linha Luxo", preco: "R$ 180", categoria: "Colares", img: colarlx3 },
    { id: 128, nome: "Colar de Coração Feminino", preco: "R$ 148", categoria: "Colares", img: colarfem1 },
    { id: 129, nome: "Colar de Trevo Feminino", preco: "R$ 147", categoria: "Colares", img: colarfem2 },
    { id: 130, nome: "Colar Feminino com extensor", preco: "R$ 140", categoria: "Colares", img: colarfem3 },
    { id: 131, nome: "Colar Feminino", preco: "R$ 155", categoria: "Colares", img: colarfem4 },
    { id: 132, nome: "Colar Feminino", preco: "R$ 74", categoria: "Colares", img: colarfem5 },
    { id: 133, nome: "Colar Feminino de Coração", preco: "R$ 130", categoria: "Colares", img: colarfem6 },
    { id: 134, nome: "Nossa Senhora Aparecida", preco: "R$ 116", categoria: "Colares", img: colarfem7 },
    { id: 135, nome: "Colar Feminino", preco: "R$ 125", categoria: "Colares", img: colarfem8 },
    { id: 136, nome: "Gargantilha em Prata", preco: "R$ 200", categoria: "Colares", img: gargantilha1 },
    { id: 137, nome: "Pingente Cravejado Linha Luxo", preco: "R$ 98", categoria: "Colares", img: pigente1 },
    { id: 138, nome: "Pingente Personalizado", preco: "R$ 140", categoria: "Personalizados", img: pigente3 },
    { id: 139, nome: "Kit Colar e Brinco", preco: "R$ 240", categoria: "Colares", img: kit1 },
    { id: 140, nome: "Kit Colar e Brinco", preco: "R$ 158", categoria: "Colares", img: kit2 },
    { id: 141, nome: "Kit Colar e Brinco", preco: "R$ 250", categoria: "Colares", img: kit3 },
    { id: 142, nome: "Kit Colar e Brinco", preco: "R$ 240", categoria: "Colares", img: kit4 },
    { id: 143, nome: "Kit Colar e Brinco", preco: "R$ 220", categoria: "Colares", img: kit5 },
    { id: 144, nome: "Kit Colar e Brinco", preco: "R$ 220", categoria: "Colares", img: kit6 },
    { id: 145, nome: "Kit Colar e Brinco", preco: "R$ 240", categoria: "Colares", img: kit7 },
    { id: 146, nome: "Kit Colar e Brinco", preco: "R$ 168", categoria: "Colares", img: kit8 },
    { id: 147, nome: "Kit Colar e Brinco", preco: "R$ 220", categoria: "Colares", img: kit9 },
    { id: 148, nome: "Kit Colar e Brinco", preco: "R$ 250", categoria: "Colares", img: kit10 },
    { id: 149, nome: "Kit Colar e Brinco", preco: "R$ 220", categoria: "Colares", img: kit11 },
    { id: 150, nome: "Berloque em Prata Letras", preco: "R$ 55", categoria: "Pulseira Feminina", img: berloque1},
    { id: 151, nome: "Pingente Família", preco: "", categoria: "Personalizados", img: p1},
    { id: 152, nome: "Pingente Retangular com Letra", preco: "", categoria: "Personalizados", img: p2},
    { id: 153, nome: "Bracelete de Ouro", preco: "", categoria: "Personalizados", img: p3},
    { id: 154, nome: "Pingente de Letra", preco: "", categoria: "Personalizados", img: p4},
    { id: 155, nome: "Par de Pulseiras Personalizadas", preco: "", categoria: "Personalizados", img: p5},
    { id: 156, nome: "Pingente com Nome Personalizado", preco: "", categoria: "Personalizados", img: p6},
    { id: 157, nome: "Foto Gravação Desenhada", preco: "", categoria: "Personalizados", img: p7},
    { id: 158, nome: "Pingente Foto Gravação Circular", preco: "", categoria: "Personalizados", img: p8},
    { id: 159, nome: "Pingente Circular com Letra", preco: "", categoria: "Personalizados", img: p9},
    { id: 160, nome: "Pingente Foto Gravação Oval", preco: "", categoria: "Personalizados", img: p10},
    { id: 161, nome: "Anel de Cristo", preco: "", categoria: "Personalizados", img: p11},
    { id: 162, nome: "Anel ABC Banhada a Ouro", preco: "", categoria: "Personalizados", img: p12},
    { id: 163, nome: "Pingente de Ouro Personalizado", preco: "", categoria: "Personalizados", img: p13},
    { id: 164, nome: "Pingente Retangular Banhado a Ouro", preco: "", categoria: "Personalizados", img: p14},
    { id: 165, nome: "Anel Personalizado", preco: "", categoria: "Personalizados", img: p15},
    { id: 166, nome: "Pingente Circular com Nome", preco: "", categoria: "Personalizados", img: p16},
    { id: 167, nome: "Foto Gravação Desenhada Circular", preco: "", categoria: "Personalizados", img: p17},
    { id: 168, nome: "Pingente Retangular", preco: "", categoria: "Personalizados", img: p18},
    { id: 169, nome: "Anel Quadrado Personalizado", preco: "", categoria: "Personalizados", img: p19},
    { id: 170, nome: "Anel Fio com Letra", preco: "", categoria: "Personalizados", img: p20},
    { id: 171, nome: "Colar com Letras", preco: "", categoria: "Personalizados", img: p21},
    { id: 172, nome: "Pulseira Foto Gravação", preco: "", categoria: "Personalizados", img: p22},
    { id: 173, nome: "Par de Pulseiras Personalizadas", preco: "", categoria: "Personalizados", img: p23},



    
    
  ];

  const gerarLinkWhatsApp = (produto) => {
    const mensagem = `Olá! Tenho interesse no produto: ${produto.nome} - ${produto.preco}`;
    return `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;
  };

  useEffect(() => {
    setAnimating(true);
    const timeout = setTimeout(() => {
      const filtrados =
        active === null
          ? produtos
          : produtos.filter((p) => p.categoria === categorias.find((c) => c.id === active).nome);
      setFiltered(filtrados);
      setAnimating(false);
    }, 200);
    return () => clearTimeout(timeout);
  }, [active]);

  return (
    <>
      <div className="header">
        <div className="logo">
          <p>TF Joias</p>
        </div>
        <nav>
          <Link to="/">Início</Link>
          <Link to="/loja">Loja</Link>
          <Link to="/catalogo">Catálogo</Link>
          <Link to="/contato">Contato</Link>
        </nav>
      </div>

      <section className="comeco-loja">
        <div className="titulo-loja">
          <p>Seja Bem-vindo a nossa Loja Virtual</p>
        </div>

        {/* Catálogo de categorias com carrossel responsivo e setas */}
        
        <div className="carrossel-container">
          <button className="seta esquerda" onClick={() => {
            document.querySelector(".catalogo-produtos-loja").scrollBy({ left: -150, behavior: "smooth" });
          }}>
            &#10094;
          </button>

          <div className="catalogo-produtos-loja">
            <div
              className={`box ${active === null ? "ativo" : ""}`}
              onClick={() => setActive(null)}
            >
              <div className="item-p todos"></div>
              <p>Todos</p>
            </div>

            {categorias.map((cat) => (
              <div
                key={cat.id}
                className={`box ${active === cat.id ? "ativo" : ""}`}
                onClick={() => setActive(cat.id)}
              >
                <div className={`item-p ${cat.className}`}></div>
                <p>{cat.nome}</p>
              </div>
            ))}
          </div>

          <button className="seta direita" onClick={() => {
            document.querySelector(".catalogo-produtos-loja").scrollBy({ left: 150, behavior: "smooth" });
          }}>
            &#10095;
          </button>
        </div>


        <div className="divisao"></div>
      </section>

      {/* Produtos */}
      <section className="produtos-precificaveis">
        {filtered.map((produto, index) => (
          <div
            className={`caixa-produto ${animating ? "fade-out" : "fade-in"}`}
            key={produto.id}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div
              className="container-img-caixa"
              style={{
                backgroundImage: `url(${produto.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <div className="descricao-produto">
              <p>{produto.nome}</p>
            </div>
            <div className="preco-produto">
              <p>{produto.preco}</p>
            </div>
            <a
              href={gerarLinkWhatsApp(produto)}
              target="_blank"
              rel="noopener noreferrer"
              className="botao-comprar"
            >
              Comprar
            </a>
          </div>
        ))}
      </section>
    </>
  );
}
