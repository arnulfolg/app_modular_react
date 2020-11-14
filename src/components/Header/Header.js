import React, { Fragment } from "react";
import './Header.scss';
import { logOut, isLoggedIn } from "./../Auth/Auth";

import { Link } from "react-router-dom";
// import { isPlatform } from '@ionic/react'


class Header extends React.Component {

  
  componentDidMount() {
        
  }

  cerrarSesion() {
	logOut()
	window.location.href = "/";
  }

  render() {

    return (
      <header>
		  <nav>
			  <ul>
				  <li>
					<Link to="/" data-testid="header_home">
						<img src="./assets/logo.png" data-testid="header_home_img" alt="Mi Dulce Hogar"/>
					</Link>
				  </li>
				  <span className="separator"/>
				  {!isLoggedIn() && 
				  	<Fragment>
						<li>
							<Link to="/login" data-testid="header_login">Iniciar Sesión</Link>
						</li>
						<li>
							<Link to="/register" data-testid="header_register">Registrarse</Link>
						</li>
					</Fragment>
				  }
				  {isLoggedIn() && 
				  	<Fragment>
						<li>
							<Link to="/profile" data-testid="header_profile">Perfil</Link>
						</li>
						<li>
							<button className="btn_transparent" onClick={this.cerrarSesion} data-testid="header_close_session">Cerrar sesión</button>
						</li>	
					</Fragment>
				  }

			  </ul>
		  </nav>

      </header>
    );
  }
}

export default Header;
