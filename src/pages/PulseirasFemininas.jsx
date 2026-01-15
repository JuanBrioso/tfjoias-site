import pulseirafem1 from '../img/pulseira fem2.png'; 
import '../css/pulseirasFemininas.css';
import { Link } from 'react-router-dom';

export default function PulseirasFemininas() {
  // 1. Dados das alianças (simulando um "catálogo")
  const fem = [
    {
      nome: "Aliança Prata Lisa",
      preco: "R$ 199,90",
      imagem: pulseirafem1
    },
    {
      nome: "Aliança com Pedra",
      preco: "R$ 249,90",
      imagem: 'pul'
    },
    {
      nome: "Aliança Ouro Rosé",
      preco: "R$ 399,90",
      imagem: 'pul'
    },
    {
      nome: "Aliança com Detalhes",
      preco: "R$ 349,90",
      imagem: 'pul'
    },
    {
      nome: "Aliança Ouro Amarelo",
      preco: "R$ 349,90",
      imagem: 'pul'
    },
    {
      nome: "Aliança com Detalhes",
      preco: "R$ 349,90",
      imagem: "https://via.placeholder.com/250x200?text=Aliança+Detalhada"
    },
    {
      nome: "Aliança com Detalhes",
      preco: "R$ 349,90",
      imagem: 'pul'
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
        <div className='container-pulseira-feminina'> 
          <div className="titulo-fem">
              <p>Pulseiras Femininas</p>
          </div>
          <div className="container-fem">
              <div className="img-fem">
                  {/* Pode inserir uma imagem grande aqui, tipo banner */}
              </div>
              <div className="text-fem">
                  <p>Delicadeza e charme em cada detalhe. Nossas pulseiras femininas são o toque final perfeito para qualquer look.</p>
              </div>
          </div>
        </div>
        {/* 2. Catálogo de alianças */}
        <section className='container-card-fem'>
          {fem.map((fem, index) => (
            <div className="card-fem" key={index}>
              <img src={fem.imagem} alt={fem.nome} />
              <h3>{fem.nome}</h3>
              <p>{fem.preco}</p>
              {/* Você pode adicionar um botão "Comprar" ou "Ver detalhes" */}
            </div>
          ))}
        </section>
      </section>
      
    </>
  );
}
