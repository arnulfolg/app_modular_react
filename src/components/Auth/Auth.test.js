import React from 'react';
import * as Auth from "./Auth";

beforeEach(() => {
  localStorage.clear();
});

const loginInfo_Correct = {
	email:"correo@example.com",
	password:"QWE4"
}
const loginInfo_WrongUser = {
	email:"example@example.com",
	password:"QWE4"
}
const loginInfo_WrongPassword = {
	email:"example@example.com",
	password:"QWE"
}
const userToCreate = {
	name:"New User",
	last_name:"",
	email:"nuevo_correo@example.com",
	password:"QWE4",
	password_2:"QWE4"
}
const userCreated = {
	name:"User",
	last_name:"",
	email:"correo@example.com",
	password:"QWE4",
	password_2:"QWE4"
}
const KEY_USER = 'user'
const VALUE_USER = '{"status":false}'
const VALUE_USER_LOGGEDIN = '{"status":true,"email":"correo@example.com"}'
const VALUE_USER_CREATED = '{"status":true,"email":"nuevo_correo@example.com"}'
const KEY_DB = 'correo@example.com'
const VALUE_DB = '{"name":"User","last_name":"","email":"correo@example.com","password":"QWE4","password_2":"QWE4"}';

describe('Auth Test Suite', () => {
	
	describe('isLoggedIn User Tests', () => {
		test('User should be logged in when status is true in localStorage', () => {
			localStorage.setItem(KEY_USER, VALUE_USER_LOGGEDIN)
			expect(localStorage.getItem(KEY_USER)).toBe(VALUE_USER_LOGGEDIN)
			expect(Auth.isLoggedIn()).toBeTruthy()
			
		})

		test('User should not be logged in when localStorage is empty', () => {
			expect(localStorage.getItem(KEY_USER)).toBe(null)
			expect(Auth.isLoggedIn()).toBeFalsy()
		})

		test('User should not be logged in when status is false in localStorage', () => {
			localStorage.setItem(KEY_USER, VALUE_USER)
			expect(localStorage.getItem(KEY_USER)).toBe(VALUE_USER)
			expect(Auth.isLoggedIn()).toBeFalsy()
		})
	})

	describe('Create User Tests', () => {



		test('User must be created and logged in', ()=> {
			localStorage.setItem(KEY_USER, VALUE_USER)
			expect(localStorage.getItem(KEY_USER)).toBe(VALUE_USER)
			localStorage.setItem(KEY_DB, VALUE_DB)
			expect(localStorage.getItem(KEY_DB)).toBe(VALUE_DB)

			const response = Auth.createUser(userToCreate)

			expect(response.status).toBeTruthy()
			expect(localStorage.getItem(KEY_USER)).toBe(VALUE_USER_CREATED)

		})
		test('User must not be created, and logged in status should remain false', () => {
			localStorage.setItem(KEY_USER, VALUE_USER)
			expect(localStorage.getItem(KEY_USER)).toBe(VALUE_USER)
			localStorage.setItem(KEY_DB, VALUE_DB)
			expect(localStorage.getItem(KEY_DB)).toBe(VALUE_DB)

			const response = Auth.createUser(userCreated)

			expect(response.status).toBeFalsy()
			expect(localStorage.getItem(KEY_USER)).toBe(VALUE_USER)

		})
	})

	describe('Login User Tests', () => {
		test('User must successfuly login', () => {
			localStorage.setItem(KEY_USER, VALUE_USER)
			localStorage.setItem(KEY_DB, VALUE_DB)
			expect(localStorage.getItem(KEY_USER)).toBe(VALUE_USER)
			expect(localStorage.getItem(KEY_DB)).toBe(VALUE_DB)

			const response = Auth.logIn(loginInfo_Correct)

			expect(response.status).toBeTruthy()
			expect(localStorage.getItem(KEY_USER)).toBe(VALUE_USER_LOGGEDIN)

		})

		test('User must not be able to login since its user does not exist', () => {
			localStorage.setItem(KEY_USER, VALUE_USER)
			localStorage.setItem(KEY_DB, VALUE_DB)
			expect(localStorage.getItem(KEY_USER)).toBe(VALUE_USER)
			expect(localStorage.getItem(KEY_DB)).toBe(VALUE_DB)

			const response = Auth.logIn(loginInfo_WrongUser)

			expect(response.status).toBeFalsy()
			expect(localStorage.getItem(KEY_USER)).toBe(VALUE_USER)

		})

		test('User must not be able to login since its password is wrong', () => {
			localStorage.setItem(KEY_USER, VALUE_USER)
			localStorage.setItem(KEY_DB, VALUE_DB)
			expect(localStorage.getItem(KEY_USER)).toBe(VALUE_USER)
			expect(localStorage.getItem(KEY_DB)).toBe(VALUE_DB)

			const response = Auth.logIn(loginInfo_WrongPassword)

			expect(response.status).toBeFalsy()
			expect(localStorage.getItem(KEY_USER)).toBe(VALUE_USER)

		})
	})
	
	describe('Logout User Tests', () => {
		test('logout user', () => {
			localStorage.setItem(KEY_USER, VALUE_USER_LOGGEDIN)
			expect(localStorage.getItem(KEY_USER)).toBe(VALUE_USER_LOGGEDIN)
			expect(Auth.isLoggedIn()).toBeTruthy() 

			Auth.logOut()
			expect(localStorage.getItem(KEY_USER)).toBe(VALUE_USER)

		})
	})

})