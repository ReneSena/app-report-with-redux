import React from 'react';
import PropTypes from 'prop-types';
import { Footer } from '../commons/Footer';
import { Header } from '../commons/Header';

import './styles.css';

export function Layout({ children }) {
	return (
		<>
			<Header />
			<main>{children}</main>
			<Footer />
		</>
	);
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
};
