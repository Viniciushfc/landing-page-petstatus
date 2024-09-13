import "../styles/utility.css"
import "../styles/header.css"
import "../styles/button.css"
import "../styles/index.css"

import HeroRectangleOne from "../assets/images/retangleOne.png";
import HeroRectangleTwo from "../assets/images/retangleTwo.png";
import "../styles/hero.css";


import Close from '../assets/images/close.svg'
import Menu from '../assets/images/Menu.svg'
import Logo from "../assets/images/logo.svg"
import { useState } from "react";
import Button from "../components/Button";

export default function Home() {

    const [showMobileMenu, setShowMobileMenu] = useState(false);

    return (
        <>

            <header className="container py-sm">

                <nav className="flex items-center justify-between">

                    <img src={Logo} alt="Logo PetStatus" width={220} height={80} />

                    <div className="desktop-only">
                        <ul className="flex gap-1">
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="">Soluções</a>
                            </li>
                            <li>
                                <a href="">Depoimentos</a>
                            </li>
                            <li>
                                <a href="">Preços</a>
                            </li>
                            <li>
                                <a href="">Contato</a>
                            </li>
                        </ul>
                    </div>

                    <div className="desktop-only">
                        <div className="flex items-center">
                            <a className="reverse-color ml-lg link" href="">Login</a>
                            <Button text="Cadastre-se" />
                        </div>
                    </div>

                    <div className="mobile-menu">
                        {showMobileMenu ?
                            <div className="mobile-menu-content">
                                <div className="container flex">
                                    <ul>
                                        <li>
                                            <a href="#">Home</a>
                                        </li>
                                        <li>
                                            <a href="#solution">Soluções</a>
                                        </li>
                                        <li>
                                            <a href="#testimonials">Depoimentos</a>
                                        </li>
                                        <li>
                                            <a href="#pricing">Preços</a>
                                        </li>
                                        <li>
                                            <a href="#contact">Contato</a>
                                        </li>
                                        <li>
                                            <a className="reverse-color" href="#">Login</a>
                                        </li>
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
                    <p className="desktop-only">
                        Seja Bem-vindo!
                    </p>
                    <h1>Cuidamos do seu pet com carinho e atenção. Confie em quem entende
                        de animais!</h1>
                    <p>Oferecemos serviços especializados para garantir a saúde e o
                        bem-estar do seu animalzinho. Seu pet merece o melhor cuidado!</p>
                    <div className="flex gap-1">
                        <span><Button text="Cadastre-se" /></span>
                        <span className="desktop-only">
                            <Button text="Veja mais" secondary />
                        </span>
                    </div>
                </div>

            </section>


        </>
    );
}