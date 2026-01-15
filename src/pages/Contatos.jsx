import '../css/contato.css';
import { Link } from 'react-router-dom';
export default function Contato() {
    return (
      <>
        <div className="header">
        <div className="logo">
            <p>TF Joias</p>
        </div>
            <nav>
                <Link to="/">Início</Link>
                <a href="/loja">Loja</a>
                <Link to="/catalogo">Catálogo</Link>
                <Link to="/contato">Contato</Link>
            </nav>
    </div>
    <section className='sec-contato'>
        <div className="textop1">
            Seja bem-vindo à nossa página de contato! Estamos aqui para ajudar você com qualquer dúvida ou informação que precisar sobre nossas joias e serviços. Sinta-se à vontade para nos enviar uma mensagem ou visitar nossas redes sociais. Nossa equipe está pronta para oferecer o melhor suporte e garantir que sua experiência conosco seja excepcional. Aguardamos seu contato!
        </div>
        <div className="container-principal">
            <a href="https://www.instagram.com/tf__joias?igsh=MWJ2MDJndTI4YTdxbA==">
                <div id='box-contato' className='instagram'>
                <div img className='img-instagram'>

                </div>
                <div id='text-contato'>
                    <p>Instagram</p>
                </div>

            </div>
            </a>
            <a href="https://web.whatsapp.com/send?phone=558893265330&text=Olá, gostaria de mais informações sobre as joias.">
                <div id='box-contato' className='whatsapp-iana'>
                <div img className='img-whatsapp'>

                </div>
                <div id='text-contato'>
                    <p>Atendente Iana</p>

                </div>

            </div>
            </a>
            <a href="https://web.whatsapp.com/send?phone=558893265330&text=Olá, gostaria de mais informações sobre as joias.">
                <div id='box-contato' className='whatsapp-eduarda'>
                <div img className='img-whatsapp'>

                </div>
                <div id='text-contato'>
                    <p>Atendente Eduarda</p>

                </div>

            </div>
            </a>
            

            
        
        </div>
    </section>
      </>
    );
  }
  