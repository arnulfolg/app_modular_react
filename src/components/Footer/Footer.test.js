import React from 'react';
import { screen, render } from '@testing-library/react';

import Footer from "./Footer";

describe("Footer Test Suite", () => {
	
	describe('Check if elements are present', () => {
		test('Check if copyright data is present', () => {
			render(<Footer />)
			const footer_copyright = screen.getByTestId('footer_copyright')
			expect(footer_copyright).toBeInTheDocument()
			expect(footer_copyright).toHaveTextContent("© 2020 Arnulfo Loredo")
		})
	})

})