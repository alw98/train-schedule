import { FormattedDuration } from 'Models/FormattedDuration';
import { ScheduleItem } from 'Models/ScheduleItem';
import moment, { Duration } from 'moment';
import React, { useEffect, useState } from 'react';
import { createUseStyles, Styles } from 'react-jss';
import { Theme } from 'Themes/BaseTheme';
import { TimerButtons } from './TimerButtons';

interface TimerProps {
	item: ScheduleItem;
	onUpClick: () => void;
	onDownClick: () => void;
}

export const Timer: React.FC<TimerProps> = ({ item, onUpClick, onDownClick }: TimerProps) => {
	const [curDur, setCurDur] = useState(moment.duration());
	const [timeElapsed, setTimeElapsed] = useState(0);
	const [intervalId, setIntervalId] = useState<NodeJS.Timer | null>(null);
	const styles = useStyles();

	useEffect(() => {
		setTimeElapsed(0);
		setCurDur(item.duration);
		const intervalId = setInterval(() => {
			setTimeElapsed((t) => t + 1);
		}, 1000);

		return () => clearInterval(intervalId);
	}, [item]);

	const displayTime = timeElapsed <= item.duration.asSeconds() ?
		(item.duration.clone().subtract(timeElapsed, 's') as FormattedDuration).format('mm:ss', { trim: false }) :
		'00:00';

	const timeStyle = displayTime === '00:00' ? styles.timeUp : styles.time;

	return (
		<div className={styles.timerContainer}>
			<div className={styles.name}>
				{item.name}
			</div>
			<div className={timeStyle}>
				{displayTime}
				<div className={styles.buttonContainer}>
					<TimerButtons onUpClick={onUpClick} onDownClick={onDownClick} />
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
		buttonContainer: {
			display: 'flex',
			flexDirection: 'column',
			height: '100%',
			position: 'absolute',
			right: '-2rem',
			top: '0',
			fontSize: '1rem',
			lineHeight: '1rem',
			justifyContent: 'space-around'
		},
		name: {
			fontSize: '2rem',
		},
		time: {
			fontSize: '9rem',
			lineHeight: '7rem',
			position: 'relative',
		},
		timeUp: {
			composes: '$time',
			color: 'red',
		}
	}),
);
