import React from "react";
import './Login.scss';
import { useFormik } from "formik";
import * as Yup from "yup";
// import { isPlatform } from '@ionic/react'
// import _ from "lodash";


function Login () {

  const errorMessages = {
    email: {
      required: "Escribe tu correo electrónico"
    },
    password: {
      required: "Debes escribir una contraseña"
    }
  }

  const validationSchema = Yup.object({
    email: Yup.string()
              .email()
              .required(errorMessages.email.required),
    password: Yup.string()
                  .required(errorMessages.password.required)
  })

  const initialValues = {
        email: "",
        password: ""
  }

  const onSubmit = values => {
    loginUser(values)
  }

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  const loginUser = (user) => {
      let local_user = JSON.parse(localStorage.getItem(user.email))
      if(local_user === null) {
        console.log("user does not exist")
      }else if(local_user.password === user.password) {
         console.log("user logged in", local_user)
         let loggedUser = {
              status: true,
              email: local_user.email
         }
         localStorage.setItem('user', JSON.stringify(loggedUser))
      } else {
        console.log("wrong password")
      }
     
  }


    return (
      <section className="grid-cols">
            <section className="banner grid-cols--item-short">
              {/* <div className="flex flex-justify-center">
                <img alt="Mi Dulce Hogar" src={logo_img} />
              </div> */}
                <h2>Inicia sesion</h2>
                <p className="mdh-login-view-description">Agenda tus servicios rápido y fácil!</p>
            </section>

            <form onSubmit={formik.handleSubmit} className="form grid-cols--item-short" >

                <section className="form_input">
                    <label htmlFor="email">Correo</label>
                    <input 
                        placeholder="Ingresa tu correo" 
                        id="email" 
                        type="email"
                        required
                        {...formik.getFieldProps('email')}
                    />
                    { formik.touched.email && formik.errors.email ? 
                    <span> {formik.errors.email} </span> : null}
                </section>

              <section className="form_input">
                  <label htmlFor="password">Contraseña</label>
                    <input 
                        placeholder="Contraseña" 
                        id="password" 
                        type="password"
                        required
                        {...formik.getFieldProps('password')}
                    />
                    { formik.touched.password && formik.errors.password ? 
                    <span> {formik.errors.password} </span> : null}
              </section>

              <section className="form_input">
                  <button
                    type="submit"
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

export default Login;
