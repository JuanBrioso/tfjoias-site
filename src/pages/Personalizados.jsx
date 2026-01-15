import alianca1 from '../img/alianças.png'; 
import alianca2 from '../img/aliancaspg.png';
import alianca3 from '../img/aliancarose.webp';
import alianca4 from '../img/aliancadetalhes.png';
import alianca5 from '../img/aliancasouro.jpg';
import '../css/Personalizados.css';
import { Link } from 'react-router-dom';

export default function Personalizados() {

// 🔗 Substitua o ID abaixo pelo ID real do seu arquivo do Google Drive
  const driveFileId = "1nRZRSYu8iX7ijcYu80_35lSz9wDT3yCK";

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
        <div className='container-personalizados'> 
          <div className="titulo-personalizados">
              <p>Personalizados</p>
          </div>
          <div className="container-perso">
              <div className="img-personalizado">
                  {/* Pode inserir uma imagem grande aqui, tipo banner */}
              </div>
              <div className="text-personalizado">
                  <p>Cada joia pode contar uma história única. Nossas joias personalizadas são criadas para transformar sentimentos, momentos e significados em peças exclusivas, feitas especialmente para você. Do detalhe ao acabamento, tudo é pensado para refletir sua essência com sofisticação, cuidado e autenticidade.</p>
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
