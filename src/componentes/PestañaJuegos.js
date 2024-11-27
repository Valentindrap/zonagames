import React, { useEffect, useRef, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"; // useParams para capturar el ID de la URL
import NavbarPage from "./NavbarPage";
import "../componentes/PestañaJuegos.css";
import logo from "../img/Icon-black.png";

function PestañaJuegos() {
    const { id } = useParams(); // Obtener el ID del juego desde la URL
    const [juegoSeleccionado, setJuegoSeleccionado] = useState(null);
    const gameContainerRef = useRef(null);
    const [isFavorito, setIsFavorito] = useState(false);
    const [isFullScreen, setIsFullScreen] = useState(false);
    const navigate = useNavigate();

    const toggleFullScreen = () => {
        if (!document.fullscreenElement) {
            gameContainerRef.current.requestFullscreen();
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
        }
    };

    const handleFavoritoClick = () => {
        let favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
        if (isFavorito) {
            favoritos = favoritos.filter(favorito => favorito.id !== juegoSeleccionado.id);
            setIsFavorito(false);
        } else {
            favoritos.push(juegoSeleccionado);
            setIsFavorito(true);
        }
        localStorage.setItem('favoritos', JSON.stringify(favoritos));
    };

    useEffect(() => {
        const fetchJuego = async () => {
            try {
                const response = await fetch(`http://localhost/juegos.php?id=${id}`); // URL con ID
                const data = await response.json();
                setJuegoSeleccionado(data);
            } catch (error) {
                console.error("Error al cargar el juego:", error);
            }
        };
        fetchJuego();
    }, [id]);

    useEffect(() => {
        const favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
        const isFav = favoritos.some(favorito => favorito.id === juegoSeleccionado?.id);
        setIsFavorito(isFav);
    }, [juegoSeleccionado]);

    if (!juegoSeleccionado) {
        return <div>Cargando juego...</div>;
    }

    return (
        <div>
            <NavbarPage />
            <div className="PJ-contenedor-anuncios">
                <div className="PJ-anuncio"></div>
                <div className="PJ-back-btn-container">
                    <button className="btn btn-secondary" onClick={() => navigate('/')}>
                        <i className="bi bi-arrow-left-circle"></i>
                    </button>
                </div>
                <div className="PJ-PestañaJuegos-container">
                    <div className="PJ-MedPestañaJuegos-container" ref={gameContainerRef}>
                        {!isFullScreen && (
                            <div className="PJ-fullscreen-btn-container">
                                <button className="btn btn-primary PJ-fullscreen-btn" onClick={toggleFullScreen}>
                                    <i className="bi bi-fullscreen"></i>
                                </button>
                            </div>
                        )}
                        <iframe
                            src={juegoSeleccionado.url}
                            title={juegoSeleccionado.nombre}
                            width="100%"
                            height="600"
                            frameBorder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                        <div className="PJ-Nombre-PestañaJuegos">
                            <div className="PJ-IzqNombre-PestañaJuegos">
                                <p>{juegoSeleccionado.nombre}</p>
                                <button onClick={handleFavoritoClick} className="btn btn-favoritos">
                                    {isFavorito ? "Eliminar de Favoritos" : "Agregar a Favoritos"}
                                </button>
                            </div>
                            <div className="PJ-DerNombre-PestañaJuegos">
                                <p>{juegoSeleccionado.desarrollador}</p>
                                <p className="PJ-calificacion">
                                    <i className="bi bi-star"></i> Calificación: {juegoSeleccionado.calificacion}
                                </p>
                            </div>
                            <h3 className="PJ-descripcion">Descripción</h3>
                            <p className="PJ-descripcion-abajo">{juegoSeleccionado.descripcion}</p>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="PJ-footer">
                <div className="PJ-footer-content">
                    <img src={logo} className="PJ-logo" alt="Logo" />
                    <div className="PJ-footer-text">
                        <p className="PJ-derechos">&copy; 2024 Todos los derechos reservados.</p>
                    </div>
                </div>
                <div className="PJ-footer-links">
                    <a href="#">Instagram</a>
                    <a href="#">Facebook 2</a>
                    <a href="#">Twitter 3</a>
                </div>
            </footer>
        </div>
    );
    
}

export default PestañaJuegos;
