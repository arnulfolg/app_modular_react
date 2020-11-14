import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import './Register.scss';
import { createUser } from "./../../components/Auth/Auth";


function Register (props) {
  const [formError, setFormError] = useState({
      message: "This is an error",
      status: false,
      error: 0
    })

  const errorMessages = {
    name : {
      lenght: "Tu nombre debe ser menor a 20 caracteres",
      required: "Escribe tu nombre"
    },
    last_name: {
      lenght: "Tu apellido debe ser menor a 100 caracteres"
    },
    email: {
      required: "Escribe tu correo electrónico"
    },
    password: {
      lenght: "Tu contraseña debe ser mayor a 4 caracteres y menor a 20",
      required: "Debes escribir una contraseña",
      confirmation: "Tu contraseña debe de coincidir con la anterior",
      regex: "Tu contraseña debe contener al menos un número y una mayúscula"
    }
  }

  const passwordRegex = /^(?=.*?[A-Z])(?=.*?[0-9])[a-zA-Z0-9]{4,20}$/

  const validationSchema = Yup.object({
    name: Yup.string()
              .max(20, errorMessages.name.lenght)
              .required(errorMessages.name.required),
    last_name: Yup.string()
                  .max(100, errorMessages.last_name.lenght),
    email: Yup.string()
              .email()
              .required(errorMessages.email.required),
    password: Yup.string()
                  .min(4, errorMessages.password.lenght)
                  .max(20, errorMessages.password.lenght)
                  .matches(passwordRegex, errorMessages.password.regex)
                  .required(errorMessages.password.required),
    password_2: Yup.string()
                  .min(4, errorMessages.password.lenght)
                  .max(20, errorMessages.password.lenght)
                  .matches(passwordRegex, errorMessages.password.regex)
                  .oneOf([Yup.ref('password'), null], errorMessages.password.confirmation)
                  .required(errorMessages.password.regex)
  })

  const initialValues = {
        name: "",
        last_name: "",
        email: "",
        password: "",
        password_2: ""
  }

  const onSubmit = values => {
    crearUsuario(values)
  }

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  const crearUsuario = user => {
    let response = createUser(user)
    if(response.status) {
	    window.location.href = "/profile";
    } else if(response.error === 40) {
      let newFormState = {
        message: "El usuario ya existe, por favor ingresa otro correo",
        status: true,
        error: response.error
      }
      setFormError(newFormState)
    }
  }
 

    return (
     <section className="grid-cols">
            <section className="banner grid-cols--item-short">
              {/* <div className="flex flex-justify-center">
                <img alt="Mi Dulce Hogar" src={logo_img} />
              </div> */}
			  <h2>Registrate</h2>

              <p className="mdh-login-view-description">Agenda tus servicios rápido y fácil!</p>
            </section>

            <form onSubmit={formik.handleSubmit} autoComplete="off" className="form grid-cols--item-short" >

              {formError.status === true &&
                 <section className="form_input form_input__error">
                    <label>{formError.message}</label>
                </section>
              }

                <section className="form_input">
                    <label htmlFor="name">Nombre</label>
                    <input 
                        placeholder="Ingresa tu mombre" 
                        id="name" 
                        name="name" 
                        type="text"
                        max="20"
                        required
                        {...formik.getFieldProps('name')}
                    />
                    { formik.touched.name && formik.errors.name ? 
                    <span> {formik.errors.name} </span> : null}
                </section>

                <section className="form_input">
                    <label htmlFor="last_name">Apellidos</label>
                    <input 
                        placeholder="Ingresa tus apellidos" 
                        id="last_name" 
                        name="last_name" 
                        type="text"
                        {...formik.getFieldProps('last_name')}
                    />
                    { formik.touched.last_name && formik.errors.last_name ? 
                    <span> {formik.errors.last_name} </span> : null}
                </section>

                <section className="form_input">
                    <label htmlFor="email">Correo</label>
                    <input 
                        placeholder="Ingresa tu correo" 
                        id="email" 
                        name="email" 
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
                        name="password" 
                        type="password"
                        required
                        {...formik.getFieldProps('password')}
                    />
                    { formik.touched.password && formik.errors.password ? 
                    <span> {formik.errors.password} </span> : null}
              </section>

              <section className="form_input">
                    <label htmlFor="password_2">Repite tu Contraseña</label>
                    <input
                        placeholder="Contraseña" 
                        id="password_2" 
                        name="password_2" 
                        type="password"
                        required
                        {...formik.getFieldProps('password_2')}
                    />
                    { formik.touched.password_2 && formik.errors.password_2 ? 
                    <span> {formik.errors.password_2} </span> : null}
              </section>

              <section className="form_input">
                  <button
                      type="submit"
                      className="btn_primary"
                      // onClick={this.registerUser}
                    >
                    Registrarse
                  </button>
              </section>
            </form>

      </section>
    );
 
}

export default Register;
