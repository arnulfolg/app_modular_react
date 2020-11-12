import React from "react";
import './Register.scss';
// import { isPlatform } from '@ionic/react'


class Register extends React.Component {

  componentDidMount() {
        
  }

  render() {


    return (
     <section className="grid-cols">
            <section className="banner grid-cols--item-2-4">
              {/* <div className="flex flex-justify-center">
                <img alt="Mi Dulce Hogar" src={logo_img} />
              </div> */}
			  <h2>Registrate</h2>

              <p className="mdh-login-view-description">Agenda tus servicios rápido y fácil!</p>
            </section>

            <form autoComplete="off" className="form grid-cols--item-2-4" >

                <section className="form_input">
                    <label htmlFor="nombre">Nombre</label>
                    <input 
                        placeholder="Ingresa tu mombre" 
                        id="nombre" 
                        type="text"
                    />
                </section>

                <section className="form_input">
                    <label htmlFor="apellidos">Apellidos</label>
                    <input 
                        placeholder="Ingresa tus apellidos" 
                        id="apellidos" 
                        type="text"
                    />
                </section>

                <section className="form_input">
                    <label htmlFor="email">Correo</label>
                    <input 
                        placeholder="Ingresa tu correo" 
                        id="email" 
                        type="email"
                    />
                </section>

              <section className="form_input">
                <label htmlFor="password">Contraseña</label>
           <input
                placeholder="Contraseña" id="password" type="password"
              />
              </section>

              <section className="form_input">
                <label htmlFor="password_valid">Repite tu Contraseña</label>
           <input
                placeholder="Contraseña" id="password_valid" type="password"
              />
              </section>

              <section className="form_input">
                  <button
                    className="btn_primary"
                    >
                    Registrarse
                  </button>
              </section>
            </form>

      </section>
    );
  }
}

export default Register;
