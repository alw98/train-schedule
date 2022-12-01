import { Duration } from 'moment';

export interface FormattedDuration extends Duration {
	format: (string, unknown) => string;
}
