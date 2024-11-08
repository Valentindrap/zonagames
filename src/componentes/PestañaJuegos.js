import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";  // Importa useNavigate
import NavbarPage from "./NavbarPage";
import "../componentes/PestañaJuegos.css";
import logo from "../img/Icon-black.png";

const juegos = [
    {
        id: 1,
        nombre: "GTA 6",
        url: "https://www.onlinegames.io/games/2023/unity2/gta-simulator/index.html",
        calificacion: 4.5,
        desarrollador: "Rockstar Games",
        descripcion: `El GTA 6 está aquí, papu.`,
        portada: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2024/03/gta-6-3282307.jpg?tf=3840x"
    },
    {
        id: 2,
        nombre: "Get On Top",
        url: "https://www.onlinegames.io/games/2024/code/6/get-on-top/index.html",
        calificacion: 4.0,
        desarrollador: "MangoJam Studios",
        descripcion: "A ver quien es más locon.",
        portada: "https://img.poki-cdn.com/cdn-cgi/image/quality=78,width=1200,height=1200,fit=cover,f=png/3078616e30ecc5f326bd8e6cad728a03.png"
    },
    {
        id: 3,
        nombre: "Head Soccer 2022",
        url: "https://www.onlinegames.io/games/2023/construct/280/head-soccer-2022/index.html",
        calificacion: 5.0,
        desarrollador: "D&D Dream Studios",
        descripcion: "El 1 con la WASD Y LA N Y M. El otro con la flechita y el 1 y 2. A jugar.",
        portada: "https://static.playhop.com/images/cc987_2977039_227e0/84f3ca624/2a00000180d6ac39_3fe781f/1329a0cbcf3a908ddae0_4d36e2/orig"
    },
    {
        id: 4,
        nombre: "Draw Here",
        url: "https://www.onlinegames.io/games/2021/unity2/draw-here/index.html",
        calificacion: 5.0,
        desarrollador: "Hyperbolic Studios",
        descripcion: "NOSE PERO TENES QUE DIBUJAR.",
        portada: "https://www.onlinegames.io/media/posts/567/responsive/Draw-Here-lg.jpg"
    },
    {
        id: 5,
        nombre: "G-SWITCH 3",
        url: "https://html5-games.io/game/g-switch-3/",
        calificacion: 5.0,
        desarrollador: "Serius Games",
        descripcion: "El puto GOTY.",
        portada: "https://play-lh.googleusercontent.com/ylSOEyk2tG390Pm4-IRUlMVtjNuYnxgX1aTm6ZxC_I6hCHjanvHFgZkCCw73sGE3lg"
    },
    {
        id: 6,
        nombre: "Fuego y Agua",
        url: "https://pavel-skala.github.io/Fireboy-and-Watergirl/",
        calificacion: 5.0,
        desarrollador: "Pavel Skala",
        descripcion: "Dos jóvenes papuchos en escape de la bestia.",
        portada: "https://play-lh.googleusercontent.com/6N_ON50BZiEAe-ll2lM92NrVrgp5I5Ha6VI0a4Usw7uPmgEjL6tgJR6jWYUkkYgx2LM"
    },
    {
        id: 7,
        nombre: "Clicker Heroes",
        url: "https://clickerheroes.com/",
        calificacion: 4.7,
        desarrollador: "RPG Studios",
        descripcion: "Haz clic para derrotar a monstruos y desbloquear héroes en tu camino hacia la victoria.",
        portada: "https://play-lh.googleusercontent.com/XqysWlDWj5nBr0zZMtB08Bt4pe3MsE8XXOAgqZYiD1s65phAUWUcLIBLxdiAkfjfIsM"
    },
    {
        id: 8,
        nombre: "Mr. Mine",
        url: "https://mrmine.com/game/",
        calificacion: 4.5,
        desarrollador: "MineQuest Studio",
        descripcion: "Excava y descubre tesoros ocultos mientras gestionas tus recursos en esta divertida aventura minera.",
        portada: "https://f4.bcbits.com/img/a0036462721_10.jpg"
    },
    // ... Aquí incluirías todos los demás juegos del array `juegos` que ya tienes
];

function PestañaJuegos() {
    const location = useLocation();
    const juegoSeleccionado = location.state?.juego;
    const gameContainerRef = useRef(null);
    const [isFavorito, setIsFavorito] = useState(false);
    const [isFullScreen, setIsFullScreen] = useState(false); // Estado para controlar el modo pantalla completa
    const navigate = useNavigate();  // Crea la función para navegar

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
            // Si ya es favorito, eliminarlo
            favoritos = favoritos.filter(favorito => favorito.id !== juegoSeleccionado.id);
            setIsFavorito(false);
        } else {
            // Agregar a favoritos
            favoritos.push(juegoSeleccionado);
            setIsFavorito(true);
        }
        
        localStorage.setItem('favoritos', JSON.stringify(favoritos));
    };

    useEffect(() => {
        const favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
        const isFav = favoritos.some(favorito => favorito.id === juegoSeleccionado.id);
        setIsFavorito(isFav);
    }, [juegoSeleccionado]);

    useEffect(() => {
        // Función para manejar el cambio de estado de pantalla completa
        const handleFullScreenChange = () => {
            if (document.fullscreenElement) {
                setIsFullScreen(true); // Se entra en pantalla completa
            } else {
                setIsFullScreen(false); // Se sale de pantalla completa
            }
        };

        // Escuchar el evento de cambio de pantalla completa
        document.addEventListener('fullscreenchange', handleFullScreenChange);

        // Limpiar el evento cuando el componente se desmonta
        return () => {
            document.removeEventListener('fullscreenchange', handleFullScreenChange);
        };
    }, []);

    if (!juegoSeleccionado) {
        return <div>No se seleccionó ningún juego.</div>;
    }

    return (
        <div>
            <NavbarPage />
            <div className="contenedor-anuncios">
                <div className="anuncio"></div>
                  {/* Botón para retroceder a la página principal */}
                  <div className="back-btn-container">
                            <button className="btn btn-secondary" onClick={() => navigate('/')}>
                                <i className="bi bi-arrow-left-circle"></i>
                            </button>
                        </div>
                <div className="PestañaJuegos-container">
                    <div className="MedPestañaJuegos-container" ref={gameContainerRef}>

                        {/* Solo mostrar el botón de pantalla completa si no estamos en pantalla completa */}
                        {!isFullScreen && (
                            <div className="fullscreen-btn-container">
                                <button className="btn btn-primary fullscreen-btn" onClick={toggleFullScreen}>
                                    <i className="bi bi-fullscreen "></i>
                                    {document.fullscreenElement ? " Salir de Pantalla Completa" : ""}
                                </button>
                            </div>
                        )}
                        
                        <iframe
                            src={juegoSeleccionado.url}
                            title={juegoSeleccionado.nombre}
                        ></iframe>
                        <div className="Nombre-PestañaJuegos">
                            <div className="IzqNombre-PestañaJuegos">
                                <p>{juegoSeleccionado.nombre}</p>
                                <button onClick={handleFavoritoClick} className="btn btn-favoritos">
                                    {isFavorito ? "Eliminar de Favoritos" : "Agregar a Favoritos"}
                                </button>
                            </div>
                            <div className="DerNombre-PestañaJuegos">
                                <p>{juegoSeleccionado.desarrollador}</p>
                                <p className="calificacion"><i className="bi bi-star"></i> Calificación: {juegoSeleccionado.calificacion}</p>
                            </div>
                            <h3 className="descripcion">Descripción</h3>
                            <p className="descripcion-abajo">{juegoSeleccionado.descripcion}</p>
                        </div>
                    </div>
                </div>

                {/* Agregamos el catálogo de juegos justo antes del footer */}
                <div className="catalogo-juegos">
                    <h2 className="juegos-titulo">Juegos Recomendados</h2>
                    <ul className="lista-juegos">
                        {juegos.map((juego) => (
                            <li key={juego.id} onClick={() => navigate(`/juego/${juego.id}`, { state: { juego } })} className="catalogo-juegos-item">
                                <img src={juego.portada} alt={`Portada de ${juego.nombre}`} />
                                <h3>{juego.nombre}</h3>
                                <p>Calificación: {juego.calificacion}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            {/* Footer */}
            <footer className="footer">
                <img src={logo} className="logo" alt="Logo" />
                <p className="derechos">&copy; 2024 Todos los derechos reservados.</p>
                <div className="footer-content">
                    <p className="info">¿Quiénes somos?</p>
                    <h3 className="info-abajo">Somos Valentin Drapanti y Francisco Pansa, dos estudiantes de la E.P.E.T N°3 con una gran pasión por los videojuegos y la tecnología. Juntos creamos Zona Games, una plataforma en línea que reúne una selección de juegos para todos los gustos.

Nuestro objetivo es ofrecer una experiencia divertida, fácil de usar y accesible para todos los jugadores. En Zona Games trabajamos constantemente para mejorar la página y seguir aprendiendo, para que todos puedan disfrutar del mejor contenido y conectarse con la comunidad gamer.</h3>
                    <div className="footer-links">
                        <a href="/privacidad">Política de Privacidad</a>
                        <a href="/terminos">Términos y Condiciones</a>
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default PestañaJuegos;
