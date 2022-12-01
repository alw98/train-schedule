import { Schedule } from 'Models/Schedule';
import React from 'react';
import { createUseStyles, Styles } from 'react-jss';
import { Theme } from 'Themes/BaseTheme';
import { List } from './List';

interface TopListProps {
	items: Schedule
}

export const TopList: React.FC<TopListProps> = ({ items }: TopListProps) => {
	const styles = useStyles();

	return (
		<div className={styles.topListContainer}>
			<div className={styles.overlay} />
			<List items={items} />
		</div>
	);
};

const useStyles = createUseStyles(
	(theme: Theme): Styles => ({
		topListContainer: {
			position: 'relative',
			marginTop: '1rem',
			width: '100%',
		},
		overlay: {
			position: 'absolute',
			display: 'inline-block',
			width: '100%',
			height: '100%',
			background: `linear-gradient(0deg, rgba(0,0,0,0) 20%, ${theme.backgroundColor.primary} 90%)`,
		},
	}),
);
