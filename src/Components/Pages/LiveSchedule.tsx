import { BottomList } from 'Components/Schedule/BottomList';
import { Timer } from 'Components/Schedule/Timer';
import { TopList } from 'Components/Schedule/TopList';
import { testSchedule } from 'Models/Schedule';
import React, { useCallback, useState } from 'react';
import { createUseStyles, Styles } from 'react-jss';
import { Theme } from 'Themes/BaseTheme';

export const LiveSchedule: React.FC = () => {
	const [schedule, setSchedule] = useState(testSchedule);
	const [currentItem, setCurrentItem] = useState(0);
	const styles = useStyles();

	const onUpClick = useCallback(() => {
		setCurrentItem(currentItem - 1);
	}, [currentItem]);

	const onDownClick = useCallback(() => {
		setCurrentItem(currentItem + 1);
	}, [currentItem]);

	return (
		<div className={styles.container}>
			<TopList items={schedule.slice(0, currentItem)} />
			<Timer item={schedule[currentItem]} onUpClick={onUpClick} onDownClick={onDownClick} />
			<BottomList items={schedule.slice(currentItem + 1, schedule.length + 1)} />
		</div>
	);
};

const useStyles = createUseStyles(
	(_: Theme): Styles => ({
		container: {
			display: 'inline-flex',
			flexDirection: 'column',
			alignItems: 'center',
			justifyContent: 'center',
			height: '100%',
		},
	}),
);
