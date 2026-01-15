import '../css/catalogo.css';
import { Link } from 'react-router-dom';
export default function Catalogo() {
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
    <section>
        <div className="textop1">
            Seja bem-vindo ao nosso catálogo de produtos! Aqui você encontrará uma variedade de joias e acessórios para todos os gostos e ocasiões. Navegue pelas nossas categorias e descubra as peças que mais combinam com você. Se precisar de ajuda, não hesite em entrar em contato conosco. Aproveite sua visita!
        </div>
        <div className="container-principal">
        <Link to="alianca-prata">
            <div className="box-item-1" id="item-catalogo">
                <div className="img-1">

                </div>
                
                    <div className="text-1">
                        <p>Alianças de Prata</p>
                        
                        
                    </div>

            </div>
        </Link>
        <Link to="alianca-ouro">
            <div className="box-item-1" id="item-catalogo">
            
                
                    <div className="text-1">
                        <p>Alianças de Ouro</p>
                        
                        
                    </div>
                <div className="img-1-2">

                </div>
            </div>
        </Link>
        {/* <Link to="colaresfemininos">
            <div className="box-item-2" id="item-catalogo">
                <div className="img-2">

                </div>
                    <div className="text-2">
                        <p>Colares Femininos</p>
                    </div>
                <div className="img-2-2">
                
                </div>
            </div>
        </Link>
        <Link to="correntariamasculina">
            <div className="box-item-3" id="item-catalogo">
                <div className="img-3">

                </div>
                    <div className="text-3">
                        <p>Correntaria Masculina</p>
                    </div>
                <div className="img-3-2">

                </div>

            </div>
        </Link>
        <Link to="pulseirasfemininas">
            <div className="box-item-4" id="item-catalogo">
                <div className="img-4">

                </div>
                    <div className="text-4">
                        <p>Pulseiras Femininas</p>
                    </div>

            </div>
        </Link>
        <Link to="pulseirasmasculinas">,
            <div className="box-item-5" id="item-catalogo">
                <div className="img-5">

                </div>
                    <div className="text-5">
                        <p>Pulseiras Masculinas</p>
                    </div>
            </div>
        </Link> */}
        <Link to="aneisformatura-prata">,
            <div className="box-item-6" id="item-catalogo">
                <div className="img-6">

                </div>
                    <div className="text-6">
                        <p>Anéis de formatura - prata</p>
                    </div>
            </div>
        </Link>
        <Link to="aneisformatura-ouro">,
            <div className="box-item-6" id="item-catalogo">
                <div className="img-ouro-6">

                </div>
                    <div className="text-6">
                        <p>Anéis de formatura - ouro</p>
                    </div>
            </div>
        </Link>
        <Link to="personalizados">,
            <div className="box-item-7" id="item-catalogo">
                <div className="img-7">

                </div>
                    <div className="text-7">
                        <p>Personalizados</p>
                    </div>
            </div>
        </Link>
    </div>
    </section>
      </>
    );
  }
  