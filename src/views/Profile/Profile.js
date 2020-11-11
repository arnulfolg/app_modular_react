import React from "react";
import './Profile.scss';
// import { isPlatform } from '@ionic/react'


class Profile extends React.Component {

  componentDidMount() {
        
  }

  render() {
    return (
      <section className="profile grid-cols">
		  <section className="banner grid-cols--item-4-4">
			  <div className="banner_bg_image"></div>
			  <div className="banner_profile_image"></div>
		  </section>
		  <section className="info grid-cols--item-2-4">
				<p className="info_name">Nombre Apellido</p>
				<p className="info_email">correo@example.com</p>
		  </section>
		<section className="register grid-cols--item-2-4">
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
