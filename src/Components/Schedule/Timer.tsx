import { ScheduleItem } from 'Models/ScheduleItem';
import moment, { Duration } from 'moment';
import React, { useEffect, useState } from 'react';
import { createUseStyles, Styles } from 'react-jss';
import { Theme } from 'Themes/BaseTheme';

interface TimerProps {
	item: ScheduleItem;
}

interface FormattedDuration extends Duration {
	format: (string, unknown) => string;
}
export const Timer: React.FC<TimerProps> = ({ item }: TimerProps) => {
	const [curDur, setCurDur] = useState(moment.duration());
	const [timeElapsed, setTimeElapsed] = useState(0);
	const [intervalId, setIntervalId] = useState<NodeJS.Timer | null>(null);
	const styles = useStyles();

	useEffect(() => {
		setCurDur(item.duration);
		setIntervalId(setInterval(() => {
			setTimeElapsed((t) => t + 1);
		}, 1000));
	}, [item]);

	const displayTime = timeElapsed <= item.duration.asSeconds() ?
		(item.duration.clone().subtract(timeElapsed, 's') as FormattedDuration).format('mm:ss', { trim: false }) :
		'00:00';

	return (
		<div className={styles.timerContainer}>
			<div className={styles.name}>
				{item.name}
			</div>
			<div className={styles.timer}>
				<div className={styles.time}>
					{displayTime}
				</div>
			</div>
		</div>
	);
};

const useStyles = createUseStyles(
	(_: Theme): Styles => ({
		timerContainer: {
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			justifyContent: 'center',
		},
		name: {
			fontSize: '2rem',
		},
		timer: {

		},
		time: {
			fontSize: '9rem',
			lineHeight: '7rem',
		},
	}),
);
