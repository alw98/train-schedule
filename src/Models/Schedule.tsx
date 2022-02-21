import moment from 'moment';
import { ScheduleItem } from './ScheduleItem';

export type Schedule = ScheduleItem[];


export const testSchedule: Schedule = [
	{
		name: 'Freeplay',
		duration: moment.duration(5, 'seconds'),
	},
	{
		name: 'Dribbling',
		duration: moment.duration(15, 'minutes'),
	},
	{
		name: 'Aerials',
		duration: moment.duration(10, 'minutes'),
	},
	{
		name: 'Freestyling',
		duration: moment.duration(30, 'minutes'),
	},
];
