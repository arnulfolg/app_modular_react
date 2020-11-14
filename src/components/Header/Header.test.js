import React from 'react';
import { fireEvent, render, screen} from '@testing-library/react';
import { MemoryRouter as MR } from "react-router-dom";

import Header from "./Header";

const KEY_USER = 'user'
const VALUE_USER_LOGGEDIN = '{"status":true,"email":"correo@example.com"}'

describe("Header Test Suite", () => {
	
	describe('Check if elements are present', () => {
		
		
		test('Check if Home link is present', async () => {
			render(<MR>	<Header /> </MR>)
			const header_home_img = screen.getByTestId('header_home_img')
			const header_home = screen.getByTestId('header_home')
			fireEvent.click(header_home)
			expect(header_home).toContainElement(header_home_img)
			expect(header_home_img).toHaveAttribute("alt", "Mi Dulce Hogar")
		})

		describe('Links when user is Logged IN', () => {

			test('Check if Login link is present', async () => {
				render(<MR>	<Header /> </MR>)
				const header_login = screen.getByTestId('header_login')
				fireEvent.click(header_login)
				expect(header_login).toHaveTextContent("Iniciar Sesión")
			})

			test('Check if Register link is present', async () => {
				render(<MR>	<Header /> </MR>)
				const header_register = screen.getByTestId('header_register')
				fireEvent.click(header_register)
				expect(header_register).toHaveTextContent("Registrarse")
			})

		})

		describe('Links when user is not Logged IN', () => {
			
			test('Check if Profile link is present', () => {
				localStorage.setItem(KEY_USER, VALUE_USER_LOGGEDIN)
				expect(localStorage.getItem(KEY_USER)).toBe(VALUE_USER_LOGGEDIN)
				
				render(<MR>	<Header /> </MR>)
				const header_profile = screen.getByTestId('header_profile')
				fireEvent.click(header_profile)
				expect(header_profile).toHaveTextContent("Perfil")
			})

			test('Check if Close session button is present', () => {
				localStorage.setItem(KEY_USER, VALUE_USER_LOGGEDIN)
				expect(localStorage.getItem(KEY_USER)).toBe(VALUE_USER_LOGGEDIN)
				
				render(<MR>	<Header /> </MR>)
				const header_close_session = screen.getByTestId('header_close_session')
				fireEvent.click(header_close_session)
				expect(header_close_session).toHaveTextContent("Cerrar sesión")
			} )

		})

	})

})