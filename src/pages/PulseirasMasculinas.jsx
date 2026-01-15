import pulseiramasc1 from '../img/Pulmasc1.webp'; 
import '../css/pulseirasMasculinas.css';
import { Link } from 'react-router-dom';

export default function PulseirasMasculinas() {
  // 1. Dados das alianças (simulando um "catálogo")
  const masc = [
    {
      nome: "Aliança Prata Lisa",
      preco: "R$ 199,90",
      imagem: pulseiramasc1
    },
    {
      nome: "Aliança com Pedra",
      preco: "R$ 249,90",
      imagem: 'puls'
    },
    {
      nome: "Aliança Ouro Rosé",
      preco: "R$ 399,90",
      imagem: 'puls'
    },
    {
      nome: "Aliança com Detalhes",
      preco: "R$ 349,90",
      imagem: 'puls'
    },
    {
      nome: "Aliança Ouro Amarelo",
      preco: "R$ 349,90",
      imagem: 'puls'
    },
    {
      nome: "Aliança com Detalhes",
      preco: "R$ 349,90",
      imagem: "https://via.placeholder.com/250x200?text=Aliança+Detalhada"
    },
    {
      nome: "Aliança com Detalhes",
      preco: "R$ 349,90",
      imagem: 'puls'
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
        <div className='container-pulseira-masculina'> 
          <div className="titulo-masc">
              <p>Pulseiras Masculinas</p>
          </div>
          <div className="container-masc">
              <div className="img-masc">
                  {/* Pode inserir uma imagem grande aqui, tipo banner */}
              </div>
              <div className="text-masc">
                  <p>Pulseiras que transmitem atitude e personalidade. Design robusto e moderno para acompanhar seu estilo em qualquer ocasião.</p>
              </div>
          </div>
        </div>
        {/* 2. Catálogo de alianças */}
        <section className='container-card-masc'>
          {masc.map((masc, index) => (
            <div className="card-masc" key={index}>
              <img src={masc.imagem} alt={masc.nome} />
              <h3>{masc.nome}</h3>
              <p>{masc.preco}</p>
              {/* Você pode adicionar um botão "Comprar" ou "Ver detalhes" */}
            </div>
          ))}
        </section>
      </section>
      
    </>
  );
}
