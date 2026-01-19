
import '../css/aliancaCompromisso.css';
import { Link } from 'react-router-dom';

export default function AliancaOuro() {

// 🔗 Substitua o ID abaixo pelo ID real do seu arquivo do Google Drive
  const driveFileId = "1d3z1BpiKWBrWZCj-TSzIOdkt-sEG_M2G";

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
        <div className='container-alianca-compromisso'> 
          <div className="titulo-alianca">
              <p>Alianças de Ouro</p>
          </div>
          <div className="container-alianca">
              <div className="img-alianca">
                  {/* Pode inserir uma imagem grande aqui, tipo banner */}
              </div>
              <div className="text-alianca">
                  <p>As alianças de compromisso são símbolos poderosos de amor e dedicação entre duas pessoas. Elas representam a promessa de um futuro juntos, cheio de respeito, confiança e companheirismo. Escolher a aliança certa é uma decisão importante, pois ela será usada diariamente como um lembrete do compromisso assumido. Nossas alianças são cuidadosamente selecionadas para oferecer qualidade, conforto e beleza, garantindo que cada par encontre a peça perfeita que reflita seu estilo e personalidade. Explore nossa coleção e encontre a aliança que marcará o início de uma nova jornada a dois.</p>
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
