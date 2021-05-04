import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { HomePage } from '../pages/home';
import { ReportPage } from '../pages/report';
import { Page404 } from '../pages/404';

export function Routes() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={HomePage} />
				<Route path="/report" component={ReportPage} />
				<Route path="*" component={Page404} />
			</Switch>
		</BrowserRouter>
	);
}
