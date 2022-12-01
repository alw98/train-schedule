import moment from 'moment';
import { FormattedDuration } from './FormattedDuration';
import { ScheduleItem } from './ScheduleItem';

export type Schedule = ScheduleItem[];


export const testSchedule: Schedule = [
	{
		name: 'Freeplay',
		duration: moment.duration(5, 'minutes') as FormattedDuration,
	},
	{
		name: 'Dribbling',
		duration: moment.duration(10, 'minutes') as FormattedDuration,
	},
	{
		name: 'Freestyling',
		duration: moment.duration(10, 'minutes') as FormattedDuration,
	},
	{
		name: 'Game',
		duration: moment.duration(6, 'minutes') as FormattedDuration,
	},
	{
		name: 'Review',
		duration: moment.duration(5, 'minutes') as FormattedDuration,
	},
	{
		name: 'Game',
		duration: moment.duration(6, 'minutes') as FormattedDuration,
	},
	{
		name: 'Review',
		duration: moment.duration(5, 'minutes') as FormattedDuration,
	},
];
