/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

export function InputText({ id, label, ...props }) {
	return (
		<div className="form__group">
			<label className="form__label" htmlFor={id}>
				{label}
			</label>
			<input
				className="form__input--text"
				type="text"
				id={id}
				{...props}
			/>
		</div>
	);
}

InputText.propTypes = {
	id: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
};
