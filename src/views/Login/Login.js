import React, { useState } from "react";
import './Login.scss';
import { useFormik } from "formik";
import * as Yup from "yup";
import { logIn } from  "./../../components/Auth/Auth";
// import { isPlatform } from '@ionic/react'
// import _ from "lodash";


function Login (props) {

  const [formError, setFormError] = useState({
        message: "This is an error",
        status: false,
        error: 0
      })

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
    let response = logIn(values)
    if(response.status) {
	    window.location.href = "/profile";
    } else if(response.error === 20) {
      let newFormState = {
        message: "El usuario no existe",
        status: true,
        error: response.error
      }
      setFormError(newFormState)
    } else if(response.error === 30) {
       let newFormState = {
          message: "La contraseña es incorrecta",
          status: true,
          error: response.error
        }
      setFormError(newFormState)
    }
  }

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

    return (
      <section className="grid-cols">
            <section className="banner grid-cols--item-short">
                <h2 data-testid="login_title">Inicia sesion</h2>
                <p className="mdh-login-view-description">Agenda tus servicios rápido y fácil!</p>
            </section>

            <form onSubmit={formik.handleSubmit} className="form grid-cols--item-short" >

              {formError.status === true &&
                 <section className="form_input form_error">
                    <p>Hubo un error :c</p>
                    <label>{formError.message}</label>
                </section>
              }
               

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
                    <span className="form_input__error" data-testid="login_email_err"> {formik.errors.email} </span> : null}
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
                    <span className="form_input__error" data-testid="login_pass_err"> {formik.errors.password} </span> : null}
              </section>

              <section className="form_input form_submit">
                  <button
                    data-testid="login_submit"
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
