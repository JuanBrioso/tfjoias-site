// src/pages/Home.jsx
import { Link } from 'react-router-dom';
import '../css/inicio.css';

export default function Home() {
  // Número de WhatsApp (coloque o seu aqui no formato internacional, ex: 55 + DDD + número)
  const whatsappNumber = "5511999999999";

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

      <section className="comeco">

         {/* vídeo de fundo */}
        <video autoPlay muted loop playsInline className="video-bg">
          <source src="/video/teste.mp4" type="video/mp4" />
          Seu navegador não suporta vídeos em HTML5.
        </video>
        <div className="container-img-button">
          <div>
            <h1>Bem-vindo à TF Joias</h1>
            <p>Descubra a beleza e elegância das nossas joias artesanais.</p>
            
              <button><Link to="/loja">Começar</Link></button>
            
          </div>
        </div>
      </section>

      <section className="sobre-nos">
        <div className="divisa"></div>
        <div className="container-texto-sobre">
          <h2>Sobre nós</h2>
          <p>Na TF Joias, cada peça é feita com amor e dedicação.</p>
          <p>Explore nossa coleção e encontre a joia perfeita para você.</p>
        </div>

        <div className="container-valores">
          <div className="linha-1">
            <div className="box-qualidade" id="box-valores">
              <h2>Qualidade e Excelência</h2>
              <p>
                A TF Joias busca oferecer produtos de altíssima qualidade, garantindo que cada peça seja meticulosamente projetada e fabricada com os melhores materiais.
              </p>
            </div>
            <div className="box-elegancia" id="box-valores">
              <h2>Elegância e Sofisticação</h2>
              <p>
                As joias da TF Joias são sinônimo de elegância e sofisticação. Cada peça é projetada para realçar a beleza única de quem a usa.
              </p>
            </div>
          </div>

          <div className="linha-2">
            <div className="box-transparencia-etica" id="box-valores">
              <h2>Transparência e Ética</h2>
              <p>
                A TF Joias valoriza a transparência e a ética em todas as suas práticas comerciais, oferecendo informações claras sobre os materiais utilizados e processos de fabricação.
              </p>
            </div>
            <div className="inovacao-criatividade" id="box-valores">
              <h2>Inovação e Criatividade</h2>
              <p>
                A TF Joias está sempre em busca de novas tendências e técnicas para criar peças únicas e exclusivas.
              </p>
            </div>
            <div className="box-atendimento-relacionamento" id="box-valores">
              <h2>Atendimento e Relacionamento</h2>
              <p>
                A TF Joias valoriza o relacionamento com seus clientes e se dedica a oferecer um atendimento excepcional.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="portfolio">
        <div className="divisa"></div>
        <div className="portfolio-texto">
          <h2>Joias Personalizadas</h2>
          <p>
            Na TF Joias, cada peça personalizada é uma expressão única de elegância e exclusividade.
          </p>
        </div>

        <div className="container-quadro-itens">
          <div className="linha-quadro">
        <Link to="/catalogo/personalizados">
            <div
              className="quadro-item-1"
              id="quadro-geral"
            >
              <p>Pingentes</p>
            </div>
        </Link>
        <Link to="/catalogo/personalizados">
            <div
              className="quadro-item-2"
              id="quadro-geral"
            >
              <p>Anéis</p>
            </div>
        </Link>
          </div>
        
          <div className="linha-quadro">
          <Link to="/catalogo/personalizados">
            <div
              className="quadro-item-3"
              id="quadro-geral"
            >
              <p>Berloques</p>
            </div>
          </Link>
          <Link to="/catalogo/personalizados">
            <div
              className="quadro-item-4"
              id="quadro-geral"
            >
              <p>Anéis Solitários</p>
            </div>
          </Link>
          </div>
        </div>

        <div className="rodape">
          <p>© TF Joias. Todos os direitos reservados.</p>
          <p>Desenvolvido por Tulyo Farias</p>
        </div>
      </section>
    </>
  );
}
