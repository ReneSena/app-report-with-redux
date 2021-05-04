import React from 'react';
import Logo from '../../assets/images/404.svg';

import './styles.css';

export function Page404() {
	return (
		<figure className="container__page404">
			<img src={Logo} alt="Page not found" />;
		</figure>
	);
}
