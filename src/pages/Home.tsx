import "../styles/utility.css";
import "../styles/header.css";
import "../styles/button.css";
import "../styles/index.css";
import HeroRectangleOne from "../assets/images/retangleOne.png";
import HeroRectangleTwo from "../assets/images/retangleTwo.png";
import "../styles/hero.css";
import Close from '../assets/images/close.svg';
import Menu from '../assets/images/Menu.svg';
import Logo from "../assets/images/logo.svg";
import { useEffect, useState } from "react";
import Button from "../components/Button";
import Card from "../components/card/Card";
import ContactForm from "../components/contactForm/ContactForm";
import "../styles/footer.css"
import "../styles/content1.css"
import Chat from "../assets/images/chat.png"
import People from "../assets/images/people.png"
import Money from "../assets/images/money.png"
import "../styles/testimonials.css"
import Testimonials from "../components/testimonials/testimonial";

export default function Home() {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    useEffect(() => {
        if (showMobileMenu) {
            document.documentElement.style.overflowY = "hidden"
        } else {
            document.documentElement.style.overflowY = "auto"
        }
    })

    return (
        <>
            <header className="container py-sm">
                <nav className="flex items-center justify-between">
                    <img className="logo-icon" src={Logo} alt="Logo PetStatus" width={200} height={100} />
                    <div className="desktop-only">
                        <ul className="flex gap-1">
                            <li><a href="#">Home</a></li>
                            <li><a href="">Soluções</a></li>
                            <li><a href="">Depoimentos</a></li>
                            <li><a href="">Preços</a></li>
                            <li><a href="">Contato</a></li>
                        </ul>
                    </div>
                    <div className="desktop-only">
                        <div className="flexx align-items">
                            <a className="link-login ml-lg link" href="#">Login</a>
                            <Button text="Cadastre-se" />
                        </div>
                    </div>
                    <div className="mobile-menu">
                        {showMobileMenu ?
                            <div className="mobile-menu-content">
                                <div className="container flex">
                                    <ul>
                                        <li><a href="#">Home</a></li>
                                        <li><a href="#solution">Soluções</a></li>
                                        <li><a href="#testimonials">Depoimentos</a></li>
                                        <li><a href="#pricing">Preços</a></li>
                                        <li><a href="#contact">Contato</a></li>
                                        <li><a className="reverse-color" href="#">Login</a></li>
                                    </ul>
                                    <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper">
                                        <img src={Close} alt="ícone fechar menu" width={24} height={24} />
                                    </span>
                                </div>
                            </div>
                            :
                            <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper" >
                                <img src={Menu} alt="ícone menu" width={24} height={24} />
                            </span>
                        }
                    </div>
                </nav>
            </header>

            <section id="hero">
                <span className="desktop-only">
                    <img src={HeroRectangleTwo} alt="Retangulo um tela inicial" />
                </span>
                <img src={HeroRectangleOne} alt="Retangulo dois tela inicial" />
                <div className="container content">
                    <h1>Cuidamos do seu pet com carinho e atenção. Confie em quem entende de animais!</h1>
                    <p>Oferecemos serviços especializados para garantir a saúde e o bem-estar do seu animalzinho. Seu pet merece o melhor cuidado!</p>
                    <div className="flex gap-1">
                        <span><Button text="Cadastre-se" /></span>
                        <span className="desktop-only">
                            <Button text="Veja mais" secondary />
                        </span>
                    </div>
                </div>
            </section>

            <section id="cards" className="container">
                <h2 className="section-title">Nossos Serviços</h2>
                <div className="flex gap-1">
                    <Card
                        title="Banho"
                        description="Oferecemos atendimento personalizado."
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdZigWlH-qqvoM_nyKpGnfrGfaB3IcUnU9zg&s"
                        actions={<Button text={"Saiba Mais"} />}
                    />
                    <Card
                        title="Produtos"
                        description="Cuidados especiais para seu amado pet."
                        image="data:image/jpeg;base64,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"
                        actions={<Button text={"Saiba Mais"} />}
                    />
                    <Card
                        title="Consultas"
                        description="   Consultas e exames especializados."
                        image="https://static.vecteezy.com/ti/fotos-gratis/t2/22701454-fofa-cachorro-olhando-fora-a-partir-de-presente-caixa-animal-como-presente-generativo-ai-foto.jpg"
                        actions={<Button text={"Saiba Mais"} />}
                    />
                </div>
            </section>
            <div>
                <Testimonials />
            </div>


            <div className="project-content">
                <h1>Sobre nosso Produto!</h1>
                <div className="cards">
                    <div className="card">
                        <img src={Chat} alt="chat" className="icon-card" />
                        <p>
                            Temos um atendimento de suporte ao tutor totalmente online e rapido.
                        </p>
                    </div>
                    <div className="card">
                        <img src={People} alt="people" className="icon-card" />
                        <p>
                            Sempre visando a segurança do seus pequenos.
                        </p>
                    </div>
                    <div className="card">
                        <img src={Money} alt="money" className="icon-card" />
                        <p>
                            Utilizamos produtos de alta qualidade.
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <ContactForm />
            </div>


            <footer>
                <div className="footer-div">
                    <div className="logos">
                        <a href="">
                            <img src={Logo} alt="" />
                        </a>
                    </div>
                    <div className="recurso">
                        <div className="empresas">
                            <h2>Empresa</h2>
                            <a href="">Sobre nós</a>
                            <a href="">Faça parte do time</a>
                            <a href="">Blog</a>
                        </div>
                        <div className="funcionalidades">
                            <h2>Funcionalidade</h2>
                            <a href="">Marketing</a>
                            <a href="">Análise de Dados</a>
                        </div>
                        <div className="recursos">
                            <h2>Recursos</h2>
                            <a href="">IOS & Android</a>
                            <a href="">Teste a Demo</a>
                            <a href="">Clientes</a>
                            <a href="">API</a>
                        </div>
                    </div>
                </div>
                <p className="final-span">Feito com muito amor nas aulas de Programação Web S2 @2024 PetStatus - Todos os direitos reservados!</p>
            </footer>
        </>
    );
}