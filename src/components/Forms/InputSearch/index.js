/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

export function InputSearch({
	handlerChange,
	handleSubmit,
	placeholder,
	id,
	name,
	...props
}) {
	return (
		<form className="form" autoComplete="off" onSubmit={handleSubmit}>
			<label htmlFor={id} className="form__label">
				<input
					className="form__input--search"
					type="search"
					id={id}
					name={name}
					placeholder={placeholder}
					onChange={handlerChange}
					{...props}
				/>
				<button type="submit" className="form__button">
					Buscar
				</button>
			</label>
		</form>
	);
}

InputSearch.propTypes = {
	handleSubmit: PropTypes.func.isRequired,
	handlerChange: PropTypes.func.isRequired,
	id: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	placeholder: PropTypes.string.isRequired,
};
