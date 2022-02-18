import React from "react";
import logo from '../assets/images/logo-SD.png'
import avatar from '../assets/images/avatar.png'
function NavBar() {
  return (
        <React.Fragment>
            {/*<!-- Topbar -->*/}
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid">
                    <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                        <div className="sidebar-brand-icon">
                            <img  src={logo} alt="Sweet Drinks" width="90" height="72"/>
                        </div>
                    </a>
                </div>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="/">Nosotros</a>
                        </li>

                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown">
                                Categorias
                            </a>
                            <ul class="dropdown-menu" >
                                <li><a class="dropdown-item" href="#">Vinos</a></li>
                                <li><a class="dropdown-item" href="#">Cervezas</a></li>
                                <li><a class="dropdown-item" href="#">Aperitivos</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            {/* <i className="far fa-shopping-cart"></i> */}
                            <a class="nav-link" href="/">Carrito</a>
                        </li>


                    </ul>

                </div>
                <div className="">
                    <a className="nav-link dropdown-toggle" href="/" >
                        <img className="img-profile rounded-circle" src={avatar} alt="Juana Perez" width="40"/>
                        {/* <p className="mr-2 d-none d-lg-inline text-gray-600 small">Juana Perez</p> */}
                    </a>
                </div>


               
            </nav>
            {/*<!-- End of Topbar -->*/}

        </React.Fragment>

  );
}

export default NavBar;
