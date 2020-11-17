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
			test.todo('First Password should be at least 4 characters')
			test.todo('First Password should be less than 20 characters')
			test.todo('First Password should have at least 1 uppercase and 1 number')
			test.todo('First Password is required')
		})

		describe('Second Password errors', () => {
			test.todo('Second Password should be at least 4 characters')
			test.todo('Second Password should be less than 20 characters')
			test.todo('Second Password should have at least 1 uppercase and 1 number')
			test.todo('Second Password should be equal to First Password')
			test.todo('Second Password is required')
		})

		describe('Form errors after submit', () => {
			test.todo('User already exists')
		})

	})

	describe('Create user and redirect to profile', () => {

		test.todo('User should be created')
		test.todo('User should be logged in upon user creation')
		test.todo('User should be redirected to /profile')
	})

})