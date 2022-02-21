import { Schedule } from 'Models/Schedule';
import React from 'react';

interface BottomListProps {
	items: Schedule
}

export const BottomList: React.FC<BottomListProps> = ({ items }: BottomListProps) => {
	return (
		<div>
			Bottom List: + {items.length}
		</div>
	);
};
