import { Schedule } from 'Models/Schedule';
import React from 'react';

interface TopListProps {
	items: Schedule
}

export const TopList: React.FC<TopListProps> = ({ items }: TopListProps) => {
	return (
		<div>
			Top List: + {items.length}
		</div>
	);
};
