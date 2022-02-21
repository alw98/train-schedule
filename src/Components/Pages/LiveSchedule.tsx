import { BottomList } from 'Components/Schedule/BottomList';
import { Timer } from 'Components/Schedule/Timer';
import { TopList } from 'Components/Schedule/TopList';
import { testSchedule } from 'Models/Schedule';
import React, { useState } from 'react';
import { createUseStyles, Styles } from 'react-jss';
import { Theme } from 'Themes/BaseTheme';

export const LiveSchedule: React.FC = () => {
	const [schedule, setSchedule] = useState(testSchedule);
	const [currentItem, setCurrentItem] = useState(0);
	const styles = useStyles();

	console.log(schedule[0]);
	return (
		<div className={styles.container}>
			<TopList items={schedule.slice(0, currentItem)} />
			<Timer item={schedule[currentItem]} />
			<BottomList items={schedule.slice(currentItem + 1, schedule.length + 1)} />
		</div>
	);
};

const useStyles = createUseStyles(
	(_: Theme): Styles => ({
		container: {
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			justifyContent: 'center',
			height: '100%',
		},
	}),
);
