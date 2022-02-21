
import { Home } from './Home';
export interface RoutePair {
	route: string;
	component: React.ComponentClass | React.FunctionComponent;
}

export const Routes: RoutePair[] = [
	{ route: '/', component: Home },
];
