import "../../styles/testimonials.css";
import Star from "../../assets/images/star.png";
import Cachorro from "../../assets/images/cachorro1.jpg";
import Cachorro2 from "../../assets/images/cachorro2.jpg";
import Cachorro3 from "../../assets/images/cachorro3.jpg";
import Cachorro4 from "../../assets/images/cachorro4.jpg";

export const Testimonials = () => {
    return (
        <section id="testimonials">
            <header>
                <span>
                    <p className="desktop-only">Aconselhamento de quem entende de pets</p>
                    <h2>Cada animal merece carinho e cuidado!</h2>
                </span>
                <p>
                    Quem já conhece a PetStatus sabe que nossos serviços são sinônimo de atenção, amor e bem-estar
                    para o seu pet. Confira abaixo os depoimentos de clientes satisfeitos e veja como estamos
                    transformando a vida dos seus animais.
                </p>
            </header>
            <div className="carousel">
                <div className="carousel-content">
                    <div className="carousel-card">
                        <img src={Cachorro2} alt="Imagem perfil cliente" />
                        <p className="testimony">
                            A PetStatus transformou a saúde do meu cãozinho com um atendimento dedicado e profissional.
                        </p>
                        <div className="rating">
                            {Array(4)
                                .fill(null)
                                .map((_, i) => (
                                    <img key={i} src={Star} alt="ícone estrela" width={22} height={20} />
                                ))}
                            <img src={Star} alt="ícone estrela sem fundo" width={20} height={22} />
                        </div>
                        <p className="names">Carlos Almeida</p>
                    </div>

                    <div className="carousel-card">
                        <img src={Cachorro} alt="Imagem perfil cliente" />
                        <p className="testimony">
                            Atendimento rápido e carinho genuíno com os animais. Meu gato nunca foi tão bem cuidado!
                        </p>
                        <div className="rating">
                            {Array(4)
                                .fill(null)
                                .map((_, i) => (
                                    <img key={i} src={Star} alt="ícone estrela" width={22} height={20} />
                                ))}
                            <img src={Star} alt="ícone estrela sem fundo" width={20} height={22} />
                        </div>
                        <p className="names">Fernando Costa</p>
                    </div>

                    <div className="carousel-card">
                        <img src={Cachorro3} alt="Imagem perfil cliente" />
                        <p className="testimony">
                            A PetStatus garantiu a saúde e bem-estar do meu pet durante todo o ano. Profissionais
                            incríveis!
                        </p>
                        <div className="rating">
                            {Array(4)
                                .fill(null)
                                .map((_, i) => (
                                    <img key={i} src={Star} alt="ícone estrela" width={22} height={20} />
                                ))}
                            <img src={Star} alt="ícone estrela sem fundo" width={20} height={22} />
                        </div>
                        <p className="names">João Martins</p>
                    </div>

                    <div className="carousel-card">
                        <img src={Cachorro4} alt="Imagem perfil cliente" />
                        <p className="testimony">
                            O cuidado que a PetStatus deu ao meu cão foi fenomenal! Ele está mais feliz e saudável,
                            e eu sou eternamente grato.
                        </p>
                        <div className="rating">
                            {Array(5)
                                .fill(null)
                                .map((_, i) => (
                                    <img key={i} src={Star} alt="ícone estrela" width={22} height={20} />
                                ))}
                        </div>
                        <p className="names">Lucas Ferreira</p>
                    </div>
                </div>
            </div>
        </section>
    );
};
