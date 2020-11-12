import React from "react";
import './Home.scss';
// import { isPlatform } from '@ionic/react'

class Home extends React.Component {

  render() {

    return (
      <section className="grid-cols grid-cols--home">
		  <section className="grid-cols--item-long">
			  <h1>Bienvenido a Mi Dulce Hogar</h1>
		  </section>
		  <section className="gallery grid-cols--item-long">
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
