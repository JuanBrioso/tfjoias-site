import colar1 from '../img/colar2.webp';

import '../css/ColaresFemininos.css';
import { Link } from 'react-router-dom';

export default function ColaresFemininos() {
  // 1. Dados das alianças (simulando um "catálogo")
  const colar = [
    {
      nome: "Aliança Prata Lisa",
      preco: "R$ 199,90",
      imagem: colar1
    },
    {
      nome: "Aliança com Pedra",
      preco: "R$ 249,90",
      imagem: 'col'
    },
    {
      nome: "Aliança Ouro Rosé",
      preco: "R$ 399,90",
      imagem: 'col'
    },
    {
      nome: "Aliança com Detalhes",
      preco: "R$ 349,90",
      imagem: 'col'
    },
    {
      nome: "Aliança Ouro Amarelo",
      preco: "R$ 349,90",
      imagem: ' col'
    },
    {
      nome: "Aliança com Detalhes",
      preco: "R$ 349,90",
      imagem: "https://via.placeholder.com/250x200?text=Aliança+Detalhada"
    },
    {
      nome: "Aliança com Detalhes",
      preco: "R$ 349,90",
      imagem: 'col'
    },
  ];

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

      <section>
        <div className='container-colares-femininos'> 
          <div className="titulo-colares">
              <p>Colares Femininos</p>
          </div>
          <div className="container-colar">  
              <div className="img-colar">  
                  {/* Pode inserir uma imagem grande aqui, tipo banner */}
              </div>
              <div className="text-colar">  
                  <p>Realce sua beleza com colares que unem delicadeza e sofisticação. Cada peça é feita para completar seu estilo com elegância.</p>
              </div>
          </div>
        </div>
 {/* 2. Catálogo de colares */}  
        <section className='container-card-colar'>  
          {colar.map((colar, index) => (  
            <div className="card-colar" key={index}>  
              <img src={colar.imagem} alt={colar.nome} />
              <h3>{colar.nome}</h3>
              <p>{colar.preco}</p>
              {/* Você pode adicionar um botão "Comprar" ou "Ver detalhes" */}
            </div>
          ))}
        </section>
      </section>
      
    </>
  );
}
