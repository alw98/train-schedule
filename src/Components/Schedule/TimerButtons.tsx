import React from 'react';
import { createUseStyles, Styles } from 'react-jss';

interface TimerButtonsProps {
	onUpClick: () => void;
	onDownClick: () => void;
}

export const TimerButtons: React.FC<TimerButtonsProps> = (props: TimerButtonsProps) => {
	const styles = useStyles();

	return (
		<>
			<div className={styles.arrowButton} onClick={props.onUpClick}>▲</div>
			<div className={styles.arrowButton} onClick={props.onDownClick}>▼</div>
		</>
	);
};

const useStyles = createUseStyles(
	(): Styles => ({
		listContainer: {
			display: 'flex',
			flexDirection: 'column',
		},
		arrowButton: {
			cursor: 'pointer'
		}
	}),
);
