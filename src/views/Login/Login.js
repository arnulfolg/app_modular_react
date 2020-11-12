import React from "react";
import './Login.scss';
// import { isPlatform } from '@ionic/react'
// import _ from "lodash";


class Login extends React.Component {

  render() {

    return (
      <section className="grid-cols">
            <section className="banner grid-cols--item-short">
              {/* <div className="flex flex-justify-center">
                <img alt="Mi Dulce Hogar" src={logo_img} />
              </div> */}
                <h2>Inicia sesion</h2>
                <p className="mdh-login-view-description">Agenda tus servicios rápido y fácil!</p>
            </section>

            <form autoComplete="off" className="form grid-cols--item-short" >

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
                  <button
                    className="btn_primary"
                    >
                    Entrar
                  </button>
              </section>
            </form>

            <section className="register grid-cols--item-short">
                <section className="form_input">
                    <button>
                        ¡Registrarme!
                    </button>
                </section>
            </section>
           
      </section>

    );
  }
}

export default Login;
