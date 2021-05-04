/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Button } from '../../components/commons/Button';
import { InputText } from '../../components/Forms/InputText';
import { Layout } from '../../components/Layout';

import './styles.css';

import { getUser } from '../../store/modules/user/actions';

export function HomePage() {
	const dispatch = useDispatch();
	const history = useHistory();
	const [name, setName] = React.useState('');

	function handleSubmitUser(event) {
		event.preventDefault();

		if (name.length !== 0) {
			dispatch(getUser(name));
			history.push('/report');
		}
	}

	return (
		<Layout header={false} footer={false}>
			<div className="container__page">
				<form
					className="form__user"
					onSubmit={event => handleSubmitUser(event)}>
					<legend className="form__legend">
						Welcome the Bank Report!
					</legend>
					<fieldset className="form__field">
						<InputText
							label="Name"
							id="name"
							value={name}
							placeholder="Enter your name"
							onChange={event => setName(event.target.value)}
						/>
					</fieldset>
					<Button disabled={name.length === 0}>Entrar</Button>
				</form>
			</div>
		</Layout>
	);
}
