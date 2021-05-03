import React from 'react';

import './styles.css';

export function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="footer">
			<p className="footer__description">
				Bank Report {currentYear} - Todos os direitos reservados
			</p>
		</footer>
	);
}
