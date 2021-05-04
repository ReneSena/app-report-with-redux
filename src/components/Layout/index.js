import React from 'react';
import PropTypes from 'prop-types';
import { Footer } from '../commons/Footer';
import { Header } from '../commons/Header';

import './styles.css';

export function Layout({ children, header, footer }) {
	return (
		<>
			{header && <Header />}
			<main>{children}</main>
			{footer && <Footer />}
		</>
	);
}

Layout.defaultProps = {
	header: true,
	footer: true,
};

Layout.propTypes = {
	children: PropTypes.node.isRequired,
	header: PropTypes.bool,
	footer: PropTypes.bool,
};
