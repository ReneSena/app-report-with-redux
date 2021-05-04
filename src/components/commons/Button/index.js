/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

export function Button({ children, ...props }) {
	return (
		<button type="submit" {...props} className="button__base">
			{children}
		</button>
	);
}

Button.propTypes = {
	children: PropTypes.node.isRequired,
};
