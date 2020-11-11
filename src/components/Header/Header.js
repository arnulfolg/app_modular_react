import React from "react";
import './Header.scss';

import { Link } from "react-router-dom";
// import { isPlatform } from '@ionic/react'


class Header extends React.Component {

  componentDidMount() {
        
  }

  render() {

    return (
      <header>
		  <nav>
			  <ul>
				  <li>
					<Link to="/">
						<img src="./assets/logo.png" alt="Mi Dulce Hogar"/>
					</Link>
				  </li>
				  <span className="separator"/>
				  <li>
					  <Link to="/login">Login</Link>
				  </li>
				  <li>
					  <Link to="/register">Register</Link>
				  </li>
				  <li>
					  <Link to="/profile">Profile</Link>
				  </li>
				  <li>
					  <button className="btn_transparent">Cerrar sesión</button>
				  </li>
			  </ul>
		  </nav>
      </header>
    );
  }
}

export default Header;
