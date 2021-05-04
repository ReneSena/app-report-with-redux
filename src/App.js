import React from 'react';
import { Provider } from 'react-redux';

import { Routes } from './routes';
import { store } from './store';

import './global/variables.css';
import './global/global.css';

function App() {
	return (
		<Provider store={store}>
			<Routes />
		</Provider>
	);
}

export default App;
