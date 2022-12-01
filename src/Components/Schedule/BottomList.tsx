import { Schedule } from 'Models/Schedule';
import React from 'react';
import { createUseStyles, Styles } from 'react-jss';
import { Theme } from 'Themes/BaseTheme';
import { List } from './List';

interface BottomListProps {
	items: Schedule
}

export const BottomList: React.FC<BottomListProps> = ({ items }: BottomListProps) => {
	const styles = useStyles();

	return (
		<div className={styles.bottomListContainer}>
			<div className={styles.overlay}>
				&nbsp;
			</div>
			<List items={items} />
		</div>
	);
};

const useStyles = createUseStyles(
	(theme: Theme): Styles => ({
		bottomListContainer: {
			position: 'relative',
			marginTop: '1rem',
			width: '100%',
		},
		overlay: {
			position: 'absolute',
			display: 'inline-block',
			width: '100%',
			height: '100%',
			background: `linear-gradient(180deg, rgba(0,0,0,0) 20%, ${theme.backgroundColor.primary} 90%)`,
		},
	}),
);
