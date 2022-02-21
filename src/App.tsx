import React, { useEffect } from 'react';
import { useTheme } from 'Hooks/useTheme';
import { ThemeProvider } from 'react-jss';
import { Routes } from 'Components/Pages/Routes';
import { RouteList } from 'Components/Pages/RouteList';
import { HashRouter as Router } from 'react-router-dom';
import moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format';

export const App: React.FC = (): JSX.Element => {
	const [theme, toggleTheme] = useTheme();


	useEffect(() => {
		momentDurationFormatSetup(moment);
	}, []);

	return (
		<ThemeProvider theme={theme}>
			<Router>
				<RouteList routes={Routes} toggleTheme={toggleTheme} />
			</Router>
		</ThemeProvider>
	);
};
