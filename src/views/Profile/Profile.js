import React from "react";
import './Profile.scss';
// import { isPlatform } from '@ionic/react'


class Profile extends React.Component {

	state = {
		userData: {}
	}

  componentDidMount() {
		let loggedStatus = JSON.parse(localStorage.getItem('user'))
		let userData = JSON.parse(localStorage.getItem(loggedStatus.email))
		this.setState({userData})
  }

  render() {
    return (
      <section className="profile grid-cols">
		  <section className="banner grid-cols--item-long">
			  <div className="banner_bg_image"></div>
			  <div className="banner_profile_image"></div>
		  </section>
		  <section className="info grid-cols--item-short">
				<p className="info_name">{`${this.state.userData.name} ${this.state.userData?.last_name}`}</p>
				<p className="info_email">{this.state.userData.email}</p>
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
