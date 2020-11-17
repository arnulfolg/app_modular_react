import React from 'react';
import { fireEvent, render, screen, wait } from '@testing-library/react';
import Register from './Register';

describe("Register Form Test Suite", () => {
	
	describe('Form is rendered', () => {
		test('Check if form is rendered', () => {
			render(<Register />)
			expect(screen.getByTestId('register_titles')).toHaveTextContent('Regístrate')
		})
	})

	describe('Check if elements are present', () => {
		test('Check if name input is present', async () => {
			const {getByTestId, queryByTestId} = render(<Register />)
			expect(getByTestId('input_name')).toBeInTheDocument()
			expect(queryByTestId('input_name_error')).not.toBeInTheDocument()
		})

		test('Check if last name input is present', async () => {
			const {getByTestId, queryByTestId} = render(<Register />)
			expect(getByTestId('input_last_name')).toBeInTheDocument()
			expect(queryByTestId('input_last_name_error')).not.toBeInTheDocument()
		})

		test('Check if email input is present', async () => {
			const {getByTestId, queryByTestId} = render(<Register />)
			expect(getByTestId('input_email')).toBeInTheDocument()
			expect(queryByTestId('input_email_error')).not.toBeInTheDocument()
		})
		
		test('Check if first password input is present', async () => {
			const {getByTestId, queryByTestId} = render(<Register />)
			expect(getByTestId('input_password')).toBeInTheDocument()
			expect(queryByTestId('input_password_error')).not.toBeInTheDocument()
		})
		
		test('Check if second password input is present', async () => {
			const {getByTestId, queryByTestId} = render(<Register />)
			expect(getByTestId('input_password_2')).toBeInTheDocument()
			expect(queryByTestId('input_password_2_error')).not.toBeInTheDocument()
		})
		
		test('Check if register button is present', async () => {
			const {getByTestId} = render(<Register />)
			expect(getByTestId('input_submit')).toBeInTheDocument()
		})
		
	})

	describe('Check if error messages show', () => {

		describe('Name errors', () => {
			test('Name should be less than 20 characters', async () => {
				const {getByTestId, queryByTestId} = render(<Register />)
				
				await wait(() => {
					const input = getByTestId('input_name')
					fireEvent.change(input, {
						target: { value: 'Nombre Es Muuuuy Largo'}
					})
					fireEvent.blur(input)
				})
				
				expect(queryByTestId('input_name_error')).toBeInTheDocument()
				expect(getByTestId('input_name_error')).toHaveTextContent('Tu nombre debe ser menor a 20 caracteres')

			})

			test('Name is required', async () => {
				const {getByTestId, queryByTestId} = render(<Register />)

				await wait(() => {
					const input = getByTestId('input_name')
					fireEvent.change(input, {
						target: { value: ''}
					})
					fireEvent.blur(input)
				})
				
				expect(queryByTestId('input_name_error')).toBeInTheDocument()
				expect(getByTestId('input_name_error')).toHaveTextContent('Escribe tu nombre')

			})

			test('Name is correct', async () => {
				const {getByTestId, queryByTestId} = render(<Register />)

				await wait(() => {
					const input = getByTestId('input_name')
					fireEvent.change(input, {
						target: { value: 'Nombre'}
					})
					fireEvent.blur(input)
				})
				
				expect(queryByTestId('input_name_error')).not.toBeInTheDocument()

			})
		})

		describe('Last Name errors', () => {

			test('Last Name should not be greater than 100 characters', async () => {
				const {getByTestId, queryByTestId} = render(<Register />)

				await wait(() => {
					const input = getByTestId('input_last_name')
					fireEvent.change(input, {
						target: { value: 'Este apellido es demasiado largo y no deberia de estar permitido ya que su largo es demasiado exagerado'}
					})
					fireEvent.blur(input)
				})
				
				expect(queryByTestId('input_last_name_error')).toBeInTheDocument()
				expect(getByTestId('input_last_name_error')).toHaveTextContent('Tu apellido debe ser menor a 100 caracteres')

			})

			test('Last Name can be less than 100 characters', async () => {
				const {getByTestId, queryByTestId} = render(<Register />)

				await wait(() => {
					const input = getByTestId('input_last_name')
					fireEvent.change(input, {
						target: { value: 'Apellido'}
					})
					fireEvent.blur(input)
				})
				
				expect(queryByTestId('input_last_name_error')).not.toBeInTheDocument()

			})

			test('Last Name is not required', async () => {
				const {getByTestId, queryByTestId} = render(<Register />)

				await wait(() => {
					const input = getByTestId('input_last_name')
					fireEvent.change(input, {
						target: { value: ''}
					})
					fireEvent.blur(input)
				})
				
				expect(queryByTestId('input_last_name_error')).not.toBeInTheDocument()

			})
		})

		describe('Email errors', () => {
			test('Email should have email format', async () => {
				const {getByTestId, queryByTestId} = render(<Register />)

				await wait(() => {
					const input = getByTestId('input_email')
					fireEvent.change(input, {
						target: { value: 'correoejemplo.com'}
					})
					fireEvent.blur(input)
				})
				
				expect(queryByTestId('input_email_error')).toBeInTheDocument()
				expect(getByTestId('input_email_error')).toHaveTextContent('Escribe un correo electrónico váldo')
			})

			test('Email should be at least 10 characters long', async () => {
				const {getByTestId, queryByTestId} = render(<Register />)

				await wait(() => {
					const input = getByTestId('input_email')
					fireEvent.change(input, {
						target: { value: 'co@ej.com'}
					})
					fireEvent.blur(input)
				})
				
				expect(queryByTestId('input_email_error')).toBeInTheDocument()
				expect(getByTestId('input_email_error')).toHaveTextContent('Tu correo debe ser de al menos 10 caracteres')

			})

			test('Email is required', async () => {
				const {getByTestId, queryByTestId} = render(<Register />)

				await wait(() => {
					const input = getByTestId('input_email')
					fireEvent.change(input, {
						target: { value: ''}
					})
					fireEvent.blur(input)
				})
				
				expect(queryByTestId('input_email_error')).toBeInTheDocument()
				expect(getByTestId('input_email_error')).toHaveTextContent('Escribe tu correo electrónico')

			})

			test('Email is correct', async () => {
				const {getByTestId, queryByTestId} = render(<Register />)

				await wait(() => {
					const input = getByTestId('input_email')
					fireEvent.change(input, {
						target: { value: 'correo@ejemplo.com'}
					})
					fireEvent.blur(input)
				})

				expect(queryByTestId('input_email_error')).not.toBeInTheDocument()
			})

		})

		describe('First Password errors', () => {
			test('First Password should be at least 4 characters', async () => {
				const {getByTestId, queryByTestId} = render(<Register />)

				await wait(() => {
					const input = getByTestId('input_password')
					fireEvent.change(input, {
						target: { value: 'pas'}
					})
					fireEvent.blur(input)
				})
				
				expect(queryByTestId('input_password_error')).toBeInTheDocument()
				expect(getByTestId('input_password_error')).toHaveTextContent('Tu contraseña debe ser mayor a 4 caracteres y menor a 20')

			})
			test('First Password should be less than 20 characters', async () => {
				const {getByTestId, queryByTestId} = render(<Register />)

				await wait(() => {
					const input = getByTestId('input_password')
					fireEvent.change(input, {
						target: { value: 'passwordjusttoooolong'}
					})
					fireEvent.blur(input)
				})
				
				expect(queryByTestId('input_password_error')).toBeInTheDocument()
				expect(getByTestId('input_password_error')).toHaveTextContent('Tu contraseña debe ser mayor a 4 caracteres y menor a 20')

			})

			test('First Password should have at least 1 uppercase and 1 number', async () => {
				const {getByTestId, queryByTestId} = render(<Register />)

				await wait(() => {
					const input = getByTestId('input_password')
					fireEvent.change(input, {
						target: { value: 'password'}
					})
					fireEvent.blur(input)
				})
				
				expect(queryByTestId('input_password_error')).toBeInTheDocument()
				expect(getByTestId('input_password_error')).toHaveTextContent('Tu contraseña debe contener al menos un número y una mayúscula')

			})

			test('First Password is required', async () => {
				const {getByTestId, queryByTestId} = render(<Register />)

				await wait(() => {
					const input = getByTestId('input_password')
					fireEvent.change(input, {
						target: { value: ''}
					})
					fireEvent.blur(input)
				})
				
				expect(queryByTestId('input_password_error')).toBeInTheDocument()
				expect(getByTestId('input_password_error')).toHaveTextContent('Debes escribir una contraseña')

			})

			test('First Password is correct', async () => {
				const {getByTestId, queryByTestId} = render(<Register />)

				await wait(() => {
					const input = getByTestId('input_password')
					fireEvent.change(input, {
						target: { value: 'P4ss'}
					})
					fireEvent.blur(input)
				})
				
				expect(queryByTestId('input_password_error')).not.toBeInTheDocument()

			})

		})

		describe('Second Password errors', () => {

			test('Second Password should be equal to First Password', async () => {
				const {getByTestId, queryByTestId} = render(<Register />)

				await wait(() => {
					const input_1 = getByTestId('input_password')
					const input_2 = getByTestId('input_password_2')
					fireEvent.change(input_1, {
						target: { value: 'P4ss'}
					})
					fireEvent.blur(input_1)
					fireEvent.change(input_2, {
						target: { value: 'P4ss2'} 
					})
					fireEvent.blur(input_2)
				})
				
				expect(queryByTestId('input_password_2_error')).toBeInTheDocument()
				expect(getByTestId('input_password_2_error')).toHaveTextContent('Tu contraseña debe de coincidir con la anterior')

			})

			test('Second Password is required', async () => {
				const {getByTestId, queryByTestId} = render(<Register />)

				await wait(() => {
					const input_1 = getByTestId('input_password')
					const input_2 = getByTestId('input_password_2')
					fireEvent.change(input_1, {
						target: { value: 'P4ss'}
					})
					fireEvent.blur(input_1)
					fireEvent.change(input_2, {
						target: { value: ''} 
					})
					fireEvent.blur(input_2)
				})
				
				expect(queryByTestId('input_password_2_error')).toBeInTheDocument()
				expect(getByTestId('input_password_2_error')).toHaveTextContent('Debes escribir una contraseña')

			})

			test('Second Password is correct', async () => {
				const {getByTestId, queryByTestId} = render(<Register />)

				await wait(() => {
					const input_1 = getByTestId('input_password')
					const input_2 = getByTestId('input_password_2')
					fireEvent.change(input_1, {
						target: { value: 'P4ss'}
					})
					fireEvent.blur(input_1)
					fireEvent.change(input_2, {
						target: { value: 'P4ss'}
					})
					fireEvent.blur(input_2)
				})
				
				expect(queryByTestId('input_password_2_error')).not.toBeInTheDocument()

			})
		})

		describe('Form errors after submit', () => {
			
			test('User already exists', async () => {
				const {getByTestId, queryByTestId} = render(<Register />)

				await wait(() => {
					const input_name = getByTestId('input_name')
					fireEvent.change(input_name, {
						target: { value: ''}
					})
					fireEvent.blur(input_name)
				})
				await wait(() => {
					const input_last_name = getByTestId('input_last_name')
					fireEvent.change(input_last_name, {
						target: { value: ''}
					})
					fireEvent.blur(input_last_name)
				})
				await wait(() => {
					const input_email = getByTestId('input_email')
					fireEvent.change(input_email, {
						target: { value: ''}
					})
					fireEvent.blur(input_email)
				})
				await wait(() => {
					const input_password = getByTestId('input_password')
					fireEvent.change(input_password, {
						target: { value: ''}
					})
					fireEvent.blur(input_password)
				})
				await wait(() => {
					const input_password_2 = getByTestId('input_password_2')
					fireEvent.change(input_password_2, {
						target: { value: ''}
					})
					fireEvent.blur(input_password_2)
				})

				// await wait(() => {
				// 	const input_submit = getByTestId('input_submit')
				// 	fireEvent.click()
				// })
				
				// expect(queryByTestId('input_password_2_error')).not.toBeInTheDocument()

			})
		})

	})

	describe('Create user and redirect to profile', () => {

		test.todo('User should be created')
		test.todo('User should be logged in upon user creation')
		test.todo('User should be redirected to /profile')
	})

})