import React from 'react'
import './Main.css'

export default function Main() {
  return (
    <main>
        <section class="hero"  id='hero'>
            <div class="container">
                <div class="hero-text">
                    <h2>Hola! Yo soy </h2><span>PATRICIO </span><span>CRISTALDO</span>
                    <p>Me dedico a hacer trabajos de desarrollo web, si te interesa lo que hago, no dudes en hacer click
                        en el botón de abajo.</p>
                    <a href="mailto:patricio_cristaldo@outlook.com?subject=Consulta&body=Hola, me gustaría contarte acerca de mi proyecto..." class="cta-button">CUENTAME SOBRE TU PROYECTO</a>
                </div>
                <div class="hero-image"> 
                    <img src="public/images/Ejemplo1.png" alt="Patricio Cristaldo"></img>
                </div>
            </div>
        </section >
        <section class="clients" id='projects'>
            <ul>
                <li>UTN</li>
                <li>RUNDO</li>
                <li>SOFTWARE FACTORY</li>
                <li>DIGITAL HOUSE</li>
            </ul>
        </section>

        <section class="services-section" id='services'>
            <h2>Mis grandes </h2><span>servicios</span>
            <div class="container">
                <div class="services-cards">
                    <div class="service-card">
                        <h3>Diseño web</h3>
                        <p>Diseño de páginas web de distinto tipo; ecommerce, portfolio, landing, etc. Consultas en el
                            botón debajo.</p>
                        <a href="#" class="learn-more-button">Saber más</a>
                    </div>
                    <div class="service-card">
                        <h3>UX/UI</h3>
                        <p>Enfoque en una buena experiencia e interfaz de usuario, diseño amigable, intuitivo y fácil de
                            usar.</p>
                        <a href="#" class="learn-more-button">Saber más</a>
                    </div>
                    <div class="service-card">
                        <h3>Automatización</h3>
                        <p>Desarrollo de funciones que automatizan procesos en tu web, en base a ciertos disparadores
                            personalizables.</p>
                        <a href="#" class="learn-more-button">Saber más</a>
                    </div>
                </div>
                <a href="#" class="portfolio-button">VER MI PORTFOLIO</a>
            </div>
        </section>

        <section class="about"  id='about'>
            <div class="container">
                <div class="about-image">
                    <img src="public/images/Ejemplo2.png" alt="Patricio Cristaldo"></img>
                </div>
                <div class="about-text">
                    <h2>Un poco sobre mi</h2>
                    <p>Soy desarrollador web full stack, actualmente me encuentro realizando una diplomatura en
                        desarrollo web con la Universidad Tecnológica Nacional para potenciar mí conocimiento y
                        habilidades.</p>
                    <a href="/about" class="cta-button">MÁS INFORMACIÓN</a>
                </div>
            </div>
        </section>

        <section class="testimonials-section">
            <h2>Testimonials</h2>
            <div class="container">
                <button class="nav-button prev-button">&#9664;</button>
                <div class="testimonial-card">
                    <div class="testimonial-image">
                        <img src="public/images/Lestercrest.jpg" alt="Basit Baso"></img>
                    </div>
                    <h3>KENNY BELL</h3>
                    <p>Excelente predisposición y habilidad, confiable performance y un gran manejo de las herramientas
                        establecidas. Altamente recomendable.</p>
                </div>
                <button class="nav-button next-button">&#9654;</button>
            </div>
        </section>
    </main>
  )
}
