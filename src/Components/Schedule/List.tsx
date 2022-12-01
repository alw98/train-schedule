import { Schedule } from 'Models/Schedule';
import React, { useMemo } from 'react';
import { createUseStyles, Styles } from 'react-jss';

interface ListProps {
	items: Schedule
}

export const List: React.FC<ListProps> = ({ items }: ListProps) => {
	const styles = useStyles();

	const listItems = useMemo(() => {
		return items.map((val, ind) => {
			return (
				<div key={ind}>
					{val.name} {val.duration.format('mm:ss', { trim: false })}
				</div>
			);
		});
	}, [items]);

	return (
		<div className={styles.listContainer}>
			{listItems}
		</div>
	);
};

const useStyles = createUseStyles(
	(): Styles => ({
		listContainer: {
			display: 'flex',
			width: '100%',
			flexDirection: 'column',
			alignItems: 'flex-end',
			justifyContent: 'center',
			color: '#7E7E7E',
		},
	}),
);
