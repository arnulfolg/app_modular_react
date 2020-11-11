import React from "react";
import './Header.scss';

import { Link } from "react-router-dom";
// import { isPlatform } from '@ionic/react'


class Header extends React.Component {

  componentDidMount() {
        
  }

  render() {

    return (
      <div>
		  <nav>
			  <ul>
				  <li>
					  <Link to="/">Home</Link>
				  </li>
				  <li>
					  <Link to="/login">Login</Link>
				  </li>
				  <li>
					  <Link to="/register">Register</Link>
				  </li>
				  <li>
					  <Link to="/profile">Profile</Link>
				  </li>
			  </ul>
		  </nav>
      </div>
    );
  }
}

export default Header;
