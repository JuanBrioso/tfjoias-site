
import '../css/aneisFormatura.css';
import { Link } from 'react-router-dom';

export default function AneisFormaturaPrata() {
  // 1. Dados das alianças (simulando um "catálogo")

  // 🔗 Substitua o ID abaixo pelo ID real do seu arquivo do Google Drive
  const driveFileId = "1lzeJ7ZEpq0SnQIU7UbezHQ6jvPwZNfeZ";

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

      <section className="aneis-formatura-section">
        <div className='container-aneis-formatura'> 
          <div className="titulo-formatura">
              <p>Anéis de Formatura</p>
          </div>
          <div className="container-formatura">
              <div className="img-formatura">
                  {/* Pode inserir uma imagem grande aqui, tipo banner */}
              </div>
              <div className="text-formatura">
                  <p>Mais do que uma joia, o anel de formatura é um símbolo de conquista, esforço e realização. Ele representa cada noite de estudo, cada desafio superado e o orgulho de alcançar um sonho que foi construído com dedicação.

Nossos anéis de formatura são produzidos com materiais de alta qualidade, acabamento refinado e design atemporal, valorizando cada detalhe que torna esse momento único. Cada peça é pensada para eternizar sua história, unindo tradição, elegância e significado em uma joia que acompanhará você por toda a vida.

Seja para celebrar sua própria vitória ou presentear alguém especial, o anel de formatura é a forma perfeita de marcar um novo começo com sofisticação e personalidade.</p>
              </div>
          </div>
        </div>


        {/* 3. Exibição do arquivo do Google Drive */}
        <div className="drive-viewer-container">
          <h2>Catálogo em PDF</h2>
          <iframe
            src={`https://drive.google.com/file/d/${driveFileId}/preview`}
            width="100%"
            height="500"
            allow="autoplay"
            style={{
              border: "none",
              borderRadius: "10px",
              marginTop: "20px"
            }}
            title="Visualizador Google Drive"
          ></iframe>
        </div>
      </section>
    </>
  );
}
