
import { LiveSchedule } from './LiveSchedule';
export interface RoutePair {
	route: string;
	component: React.ComponentClass | React.FunctionComponent;
}

export const Routes: RoutePair[] = [
	{ route: '/', component: LiveSchedule },
];
