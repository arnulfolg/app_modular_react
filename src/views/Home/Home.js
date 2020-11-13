import React from "react";
import './Home.scss';
import { getHomeImages } from "./../../components/API/Unsplash";
// import { isPlatform } from '@ionic/react'

class Home extends React.Component {

	constructor(props) {
		super(props);
		this.state = {photos: []};
  	}

	async componentDidMount() {
		this.setState({
			photos: await getHomeImages()
		})
		console.log(this.state.photos)
	}


  render() {

    return (
      <section className="grid-cols grid-cols--home">
		  <section className="grid-cols--item-long">
			  <h1>Bienvenido a Mi Dulce Hogar</h1>
		  </section>
	{/* <pre>{this.state.photos}</pre> */}
		  <section className="gallery grid-cols--item-long">
			  {this.state.photos.map((photo, index) => 
					<section key={index} className="gallery_item">
						<img src={photo.urls.small} alt=""/>
					</section>
			  )}
			
		  </section>
      </section>

    );
  }
}

export default Home;
