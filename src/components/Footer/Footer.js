import React from "react";
import './Footer.scss';

// import { isPlatform } from '@ionic/react'


class Footer extends React.Component {


  render() {

    return (
      <footer>
		    <p data-testid="footer_copyright">&copy; 2020 Arnulfo Loredo</p>
      </footer>
    );
  }
}

export default Footer;
