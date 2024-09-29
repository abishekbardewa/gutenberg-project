import React from 'react';
import './emptystate.css';
const EmptyState = ({ searchTerm }) => {
	return (
		<div className="empty-state-wrapper">
			<h2 className="empty-title">No results found for "{searchTerm}"</h2>
		</div>
	);
};

export default EmptyState;
