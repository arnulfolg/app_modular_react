import React from "react";
import './Home.scss';
// import { isPlatform } from '@ionic/react'



class Home extends React.Component {


  render() {

    return (
      <section className="grid-cols">
		  <section className="grid-cols--item-4-4">
			  <h1>Bienvenido a Mi Dulce Hogar</h1>
		  </section>
		  <section className="gallery grid-cols--item-4-4">
				<section className="gallery_item">
					<img src="https://picsum.photos/500/300" alt=""/>
				</section>
				<section className="gallery_item">
					<img src="https://picsum.photos/500/300" alt=""/>
				</section>
				<section className="gallery_item">
					<img src="https://picsum.photos/500/300" alt=""/>
				</section>
				<section className="gallery_item">
					<img src="https://picsum.photos/500/300" alt=""/>
				</section>
				<section className="gallery_item">
					<img src="https://picsum.photos/500/300" alt=""/>
				</section>
				<section className="gallery_item">
					<img src="https://picsum.photos/500/300" alt=""/>
				</section>
				<section className="gallery_item">
					<img src="https://picsum.photos/500/300" alt=""/>
				</section>
		  </section>
      </section>

    );
  }
}

export default Home;
