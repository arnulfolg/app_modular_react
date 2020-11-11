import React from "react";
import './Login.scss';
import { isPlatform } from '@ionic/react'
import _ from "lodash";



class Login extends React.Component {
  state = {
    email: "",
    password: "",

    showIsClientModal: false,
    phone_number: null,
    isLoading: false,

    step: "1",
    fullkeyboard: false,
    verification_code: null,
    client_name: null,
    client_mail: null,

    showPasswordModal: false,
    pass1: "",
    pass2: "",

    InputProps: {
      visibility: "visible",
      mtInput: 0,
      loginFirst: true
    },

    stringified: null,
    showLoadModal: false,

    //promotions
    existPromotions : false,
  };

  componentDidMount() {
    

    
  }

  /*loginApple(){
    SignInWithApple.Authorize().then(response => {
      console.log("apple",response)
    }).catch(response => {
      console.log("apple",response)
    })
  }*/ 

  onChangeEmail(val) {
    this.setState({
      email: val
    });
  }

  onChangePassword(val) {
    this.setState({
      password: val
    });
  }

  loginFocus(e) {
    if (isPlatform('ios')) {
      if (e === "focus") {
        console.log("Esta en focus");
        let cloneinputprops = _.cloneDeep(this.state.InputProps);
        cloneinputprops.visibility = "hidden";
        cloneinputprops.mtInput = "-13rem";
        this.setState({ InputProps: cloneinputprops })
      }
      if (e === "nofocus") {
        console.log("Salio de focus");
        let cloneinputprops = _.cloneDeep(this.state.InputProps);
        cloneinputprops.visibility = "visible";
        cloneinputprops.mtInput = "0rem";
        this.setState({ InputProps: cloneinputprops })

      }
    }
  }

  isClient() {
    this.setState({ showIsClientModal: !this.state.showIsClientModal });
  }

  backToOptions() {
    this.setState({ showPasswordModal: !this.state.showPasswordModal, showIsClientModal: true })
  }

  render() {
    let logo_img = ''
    let topbuttonClient = "2rem"
    
    if (isPlatform('android')) {
      topbuttonClient = "0rem"
    }

    return (
      <section className="grid-cols">
            <section className="banner grid-cols--item-2-4">
              {/* <div className="flex flex-justify-center">
                <img alt="Mi Dulce Hogar" src={logo_img} />
              </div> */}
                <h2>Inicia sesion</h2>
                <div className="mdh-login-view-description">Agenda tus servicios rápido y fácil!</div>
            </section>

            <form autoComplete="off" className="form grid-cols--item-2-4" >

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

            <section className="register grid-cols--item-2-4">
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
