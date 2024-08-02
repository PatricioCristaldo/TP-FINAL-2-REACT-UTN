import React, { useEffect, useState } from "react";
import "./Main.css";

export default function Main() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const testimonials = [
        {
            image: "images/Cliente1.jpg",
            alt: "Kenny Bell",
            name: "KENNY BELL",
            text: "Excelente predisposición y fiabilidad. Manejo adecuado de las herramientas y soluciones prácticas e inteligentes. Altamente recomendable."
        },
        {
            image: "images/Cliente3.jpg",
            alt: "Elmer Curio",
            name: "ELMER CURIO",
            text: "Actitud proactiva y de alto nivel. Gran performance y despliegue inteligente frente a cualquier incidencia. Volvería a contratar sus servicios."
        },
        {
            image: "images/Cliente2.jpg",
            alt: "Jhonny Ce",
            name: "JHONNY CE",
            text: "Destacado desempeño en las tareas establecidas. Rapidez, eficacia y responsabilidad algunas de las habilidades que lo destacan. Muy conforme con el resultado."
        }
    ];

    const showPrevCard = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
    };

    const showNextCard = () => {
        setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
    };

    useEffect(() => {
        const interval = setInterval(showNextCard, 5000); // Cambia el testimonio cada 5 segundos
        return () => clearInterval(interval);
    }, [currentIndex]);

    return (
        <main>
            <section className="hero" id="hero">
                <div className="container">
                    <div className="hero-text">
                        <h2>Hola! Yo soy </h2>
                        <span>PATRICIO </span>
                        <span>CRISTALDO</span>
                        <p>
                            Me dedico a hacer trabajos de desarrollo web, si te interesa lo
                            que hago, no dudes en hacer click en el botón de abajo.
                        </p>
                        <a
                            href="mailto:patricio_cristaldo@outlook.com?subject=Consulta&body=Hola, me gustaría contarte acerca de mi proyecto..."
                            className="cta-button"
                        >
                            CUENTAME SOBRE TU PROYECTO
                        </a>
                    </div>
                    <div className="hero-image">
                        <img src="images/Ejemplo1.png" alt="Patricio Cristaldo"></img>
                    </div>
                </div>
            </section>
            <section className="clients" id="projects">
                <ul>
                    <li>UTN</li>
                    <li>RUNDO</li>
                    <li>SOFTWARE FACTORY</li>
                    <li>DIGITAL HOUSE</li>
                </ul>
            </section>

            <section className="services-section" id="services">
                <h2>Mis grandes </h2>
                <span>servicios</span>
                <div className="container">
                    <div className="services-cards">
                        <div className="service-card">
                            <h3>Diseño web</h3>
                            <p>
                                Diseño de páginas web de distinto tipo; ecommerce, portfolio,
                                landing, etc. Consultas en el botón debajo.
                            </p>
                            <a href="#" className="learn-more-button">
                                Saber más
                            </a>
                        </div>
                        <div className="service-card">
                            <h3>UX/UI</h3>
                            <p>
                                Enfoque en una buena experiencia e interfaz de usuario, diseño
                                amigable, intuitivo y fácil de usar.
                            </p>
                            <a href="#" className="learn-more-button">
                                Saber más
                            </a>
                        </div>
                        <div className="service-card">
                            <h3>Automatización</h3>
                            <p>
                                Desarrollo de funciones que automatizan procesos en tu web, en
                                base a ciertos disparadores personalizables.
                            </p>
                            <a href="#" className="learn-more-button">
                                Saber más
                            </a>
                        </div>
                    </div>
                    <a href="#" className="portfolio-button">
                        VER MI PORTFOLIO
                    </a>
                </div>
            </section>

            <section className="about" id="about">
                <div className="container">
                    <div className="about-image">
                        <img src="images/Ejemplo2.png" alt="Patricio Cristaldo"></img>
                    </div>
                    <div className="about-text">
                        <h2>Un poco sobre mi</h2>
                        <p>
                            Soy desarrollador web full stack, actualmente me encuentro
                            realizando una diplomatura en desarrollo web con la Universidad
                            Tecnológica Nacional para potenciar mí conocimiento y habilidades.
                        </p>
                        <a href="about" className="cta-button">
                            MÁS INFORMACIÓN
                        </a>
                    </div>
                </div>
            </section>

            <section className="testimonials-section">
                <h2>Testimonials</h2>
                <div className="container">
                    <button className="nav-button prev-button" onClick={showPrevCard}>&#9664;</button>
                    {testimonials.map((testimonial, index) => (
                        <div
                            className={`testimonial-card ${index === currentIndex ? "active" : ""}`}
                            key={index}
                        >
                            <div className="testimonial-image">
                                <img src={testimonial.image} alt={testimonial.alt} />
                            </div>
                            <h3>{testimonial.name}</h3>
                            <p>{testimonial.text}</p>
                        </div>
                    ))}
                    <button className="nav-button next-button" onClick={showNextCard}>&#9654;</button>
                </div>
            </section>
        </main>
    );
}
