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
    const { email, password } = this.state;
    let logo_img = ''
    let mt = "0"
    let topbuttonClient = "2rem"
    
    if (isPlatform('android')) {
      topbuttonClient = "0rem"
    }

    return (
      <div className="mdh-login-view -main flex flex-wrap">
        <div className="mdh-login-view-form flex-1">
          <section
            className="flex flex-direction-column flex-content-center"
            style={{ maxWidth: "20rem", margin: "0 auto", marginTop: this.state.InputProps.mtInput }}>
            <div style={{ visibility: this.state.InputProps.visibility }}>
              <div className="flex flex-justify-center">
                <img alt="Mi Dulce Hogar" src={logo_img} style={{ width: 100, height: 100, marginTop: mt }} />
              </div>

              <div className="mdh-login-view-description">Agenda tus servicios rápido y fácil!</div>
            </div>

            <form autoComplete="off" style={{ marginTop: topbuttonClient }} >



              <input
                placeholder="Email"
              />
              <br />
              <input
                placeholder="Password"
              />
              <br />
              <button
                style={{ marginTop: topbuttonClient }}
                className="-full-width"
               // onClick={this.loginApple.bind(this)}
               >
                Entrar
              </button>
              {/* <Button
                style={{ marginTop: topbuttonClient }}
                className="-full-width" onClick={this.appleLogin.bind(this)}>
                Apple Login
              </Button>
              */}
              <br />
              {/*
              <Button
                className="-full-width -white"
                onClick={() => {
                  document.location = "/registro";
                }}>
                <img src="/assets/login-google.svg" className="svg-icon" />
                <div style={{ display: "inline-block", width: "13rem" }}>Login with Google</div>
              </Button>
              */}

              <br />
              <br />

              {/* <Button className="-full-width -white" onClick={this.onLoginFacebook.bind(this)} disabled={true}>
                <img src="/assets/login-facebook.svg" className="svg-icon" />
                <div style={{ display: "inline-block", width: "13rem" }}>Login Facebook Prox</div>
              </Button>*/}
            </form>

            <br />
            <div>
              <button
                className="-white"
                style={{ width: "40%", fontSize: "smaller" }}
                onClick={() => {
                  this.props.history.push(`/registro?${this.state.stringified}`);
                }} disabled={false}>
                ¡Registrarme!
                </button>

              <button
                className="-white"
                style={{ width: "55%", fontSize: "90%" , marginLeft:"1rem"}}
                onClick={this.isClient.bind(this)}
              //disabled={false}
              >
                Ingresar por SMS
              </button>

            </div>
           
          </section>
        </div>

        <div className="mdh-login-view-image flex-1" />
      </div>
    );
  }
}

export default Login;
