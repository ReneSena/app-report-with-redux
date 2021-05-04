import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

export function Feedback({ children }) {
	return <p className="feedback">{children}</p>;
}

Feedback.propTypes = {
	children: PropTypes.node.isRequired,
};
