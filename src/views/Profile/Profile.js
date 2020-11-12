import React from "react";
import './Profile.scss';
// import { isPlatform } from '@ionic/react'


class Profile extends React.Component {

  componentDidMount() {
        
  }

  render() {
    return (
      <section className="profile grid-cols">
		  <section className="banner grid-cols--item-long">
			  <div className="banner_bg_image"></div>
			  <div className="banner_profile_image"></div>
		  </section>
		  <section className="info grid-cols--item-short">
				<p className="info_name">Nombre Apellido</p>
				<p className="info_email">correo@example.com</p>
		  </section>
		<section className="register grid-cols--item-short">
			<section className="form_input">
				<button>
				Editar Perfil
				</button>
			</section>
		</section>
      </section>
    );
  }
}

export default Profile;
