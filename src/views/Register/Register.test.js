import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

describe("Register Form Test Suite", () => {
	
	describe('Check if elements are present', () => {
		test.todo('Check if name input is present')
		test.todo('Check if last name input is present')
		test.todo('Check if email input is present')
		test.todo('Check if first password input is present')
		test.todo('Check if second password input is present')
		test.todo('Check if register button is present')
	})

	describe('Check if error messages show', () => {

		describe('Name errors', () => {
			test.todo('Name should be less than 20 characters')
			test.todo('Name is required')
		})

		describe('Last Name errors', () => {
			test.todo('Last Name should be less than 100 characters')
			test.todo('Last Name is not required')
		})

		describe('Email errors', () => {
			test.todo('Email should be an email')
			test.todo('Email is required')
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