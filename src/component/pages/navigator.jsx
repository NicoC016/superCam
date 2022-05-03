import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../assets/img/logo.png"
import foto1 from "../../assets/img/foto1.png"
import foto2 from "../../assets/img/foto2.png"
import foto3 from "../../assets/img/foto3.png"



export class Navigator extends React.Component {
    render() {
        return (
            <div className="navigator1 container-fluid fixed-top ">
                <nav className=" navbar navbar-expand-lg  ">
                    <div className=" container-fluid  ">
                        <Link rel="apple-touch-icon" to="/">
                            <img src={logo} alt="/" className="navigator-logo" to="/" >
                            </img>
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className=" justify-content collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className='p-4 link-dark' to="/" id="nav">
                                        Inicio
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className='p-4 link-dark' to="/nosotros" id="nav">
                                        Empresa
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className=" p-4 link-dark" to="/clientes" id="nav">
                                        Clientes
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className=" p-4 link-dark" to="/productos" id="nav">
                                        Productos
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className=" p-4 link-dark" to="/contacto" id="nav">
                                        Contacto
                                    </Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link className="lista p-6 link-dark dropdown-toggle" id="nav" role="button" data-bs-toggle="dropdown" aria-expanded="false" to="/producto" >
                                        Informacion adicional
                                    </Link>

                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <li><Link className="dropdown-item" to="/alarmaComunitaria">Alarmas comunitarias</Link></li>
                                        <li><Link className="dropdown-item" to="/controlAcceso">Control de accesos</Link></li>
                                        <li><Link className="dropdown-item" to="/barrioPrivado">Barrios privados</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export class Cuerpo extends React.Component {
    render() {
        return (
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={foto1} className="carrousel" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={foto2} className="carrousel" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={foto3} className="carrousel" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

        )
    }
}