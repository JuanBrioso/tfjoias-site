import corrente1 from '../img/corrente2.png';
import '../css/CorrentariaMasculina.css';
import { Link } from 'react-router-dom';

export default function CorrentariaMasculina() {
  // 1. Dados das alianças (simulando um "catálogo")
  const corrente = [
    {
      nome: "Aliança Prata Lisa",
      preco: "R$ 199,90",
      imagem: corrente1
    },
    {
      nome: "Aliança com Pedra",
      preco: "R$ 249,90",
      imagem: 'cor'
    },
    {
      nome: "Aliança Ouro Rosé",
      preco: "R$ 399,90",
      imagem: 'cor'
    },
    {
      nome: "Aliança com Detalhes",
      preco: "R$ 349,90",
      imagem: 'cor'
    },
    {
      nome: "Aliança Ouro Amarelo",
      preco: "R$ 349,90",
      imagem: 'cor'
    },
    {
      nome: "Aliança com Detalhes",
      preco: "R$ 349,90",
      imagem: "https://via.placeholder.com/250x200?text=Aliança+Detalhada"
    },
    {
      nome: "Aliança com Detalhes",
      preco: "R$ 349,90",
      imagem: 'cor'
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
        <div className='container-correntaria-masculina'> 
          <div className="titulo-corrente">
              <p>Correntaria Masculina</p>
          </div>
          <div className="container-corrente">
              <div className="img-corrente">
                  {/* Pode inserir uma imagem grande aqui, tipo banner */}
              </div>
              <div className="text-corrente">
                  <p>Descubra a combinação perfeita entre estilo e atitude. Nossas correntes masculinas são feitas para destacar sua personalidade com elegância e autenticidade.</p>
              </div>
          </div>
        </div>
        {/* 2. Catálogo de Correntes */}
        <section className='container-card-corrente'>
          {corrente.map((corrente, index) => (
            <div className="card-corrente" key={index}>
              <img src={corrente.imagem} alt={corrente.nome} />
              <h3>{corrente.nome}</h3>
              <p>{corrente.preco}</p>
              {/* Você pode adicionar um botão "Comprar" ou "Ver detalhes" */}
            </div>
          ))}
        </section>
      </section>
      
    </>
  );
}
