import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavbarPage from "./NavbarPage";
import "../componentes/PaginaPrincipal.css";
import logo from "../img/Icon-black.png";

function PaginaPrincipal() {
    const navigate = useNavigate();
    const [juegos, setJuegos] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredJuegos, setFilteredJuegos] = useState([]);

    // Cargar juegos desde la base de datos
    useEffect(() => {
        fetch("http://localhost/juegos.php") // Cambia la ruta si es necesario
            .then((response) => response.json())
            .then((data) => {
                setJuegos(data);
                setFilteredJuegos(data);
            })
            .catch((error) => console.error("Error al cargar juegos:", error));
    }, []);

    // Filtrar juegos según búsqueda
    const handleSearch = (event) => {
        const query = event.target.value;
        setSearchTerm(query);

        const filtered = juegos.filter((juego) =>
            juego.nombre.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredJuegos(filtered);
    };

    const handleJuegoClick = (juego) => {
        navigate(`/juego/${juego.id}`, { state: { juego } });
    };

    return (
        <div className="PP-pagina-principal">
            <NavbarPage />
            <div className="PP-contenedor-anuncios">
                <div className="PP-catalogo-juegos">
                    <h1 className="PP-juegos-titulo">Catálogo de Juegos</h1>
                    <div className="PP-search-container">
                        <input
                            type="text"
                            name="search"
                            placeholder="Buscar juegos..."
                            className="PP-search-input"
                            value={searchTerm}
                            onChange={handleSearch}
                        />
                        <a href="#" className="PP-search-btn">
                            <i className="bi bi-search"></i>
                        </a>
                    </div>
                    <ul>
                        {filteredJuegos.length > 0 ? (
                            filteredJuegos.map((juego) => (
                                <li key={juego.id} onClick={() => handleJuegoClick(juego)} className="PP-catalogo-juegos-item">
                                    <img src={juego.portada} alt={`Portada de ${juego.nombre}`} />
                                    <h2>{juego.nombre}</h2>
                                    <p>Calificación: {juego.calificacion}</p>
                                </li>
                            ))
                        ) : (
                            <li>No se encontraron juegos.</li>
                        )}
                    </ul>
                </div>
            </div>
            <footer className="PP-footer">
                <img src={logo} className="PP-logo" alt="Logo" />
                <p className="PP-derechos">&copy; 2024 Todos los derechos reservados.</p>
                <div className="PP-footer-content">
                    <p className="PP-info">¿Quiénes somos?</p>
                    <h3 className="PP-info-abajo">
                        Somos Valentin Drapanti y Francisco Pansa, dos estudiantes de la E.P.E.T N°3 con una gran pasión por los videojuegos y la tecnología.
                    </h3>
                    <div className="PP-footer-links">
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

export default PaginaPrincipal;
