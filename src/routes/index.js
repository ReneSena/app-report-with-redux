import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { HomePage } from '../pages/home';
import { ReportPage } from '../pages/report';

export function Routes() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={HomePage} />
				<Route path="/report" exact component={ReportPage} />
			</Switch>
		</BrowserRouter>
	);
}
