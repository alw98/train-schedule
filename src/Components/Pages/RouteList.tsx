import React, { useEffect } from 'react';

import { Route, Switch, useHistory } from 'react-router-dom';
import { NotFound } from './404';
import { BasePage } from './BasePage';
import { RoutePair } from './Routes';

interface RouteListProps {
	routes: RoutePair[];
	toggleTheme: () => void;
}

export const RouteList: React.FC<RouteListProps> = ({ routes, toggleTheme }: RouteListProps) => {
	const history = useHistory();

	useEffect(() => {
		history.push('/');
	}, []);

	const routeComponents: JSX.Element[] = routes.map((v, i) => (
		<Route exact path={v.route} key={i}>
			<BasePage toggleTheme={toggleTheme}>{React.createElement(v.component)}</BasePage>
		</Route>
	));

	return (
		<Switch>
			{routeComponents}
			<Route>
				<NotFound toggleTheme={toggleTheme} />
			</Route>
		</Switch>
	);
};
