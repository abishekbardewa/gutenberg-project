import React, { useEffect, useState } from 'react';
import { cancelIcon, searchIcon } from '../../constants/icons';
import './searchbar.css';

const SearchBar = ({ onSearch }) => {
	const [searchTerm, setSearchTerm] = useState('');
	const [debouncedValue, setDebouncedValue] = useState('');

	const handleInput = (e) => {
		setSearchTerm(e.target.value);
	};

	useEffect(() => {
		const timeoutId = setTimeout(() => {
			setDebouncedValue(searchTerm);
			onSearch(searchTerm);
		}, 500);
		return () => clearTimeout(timeoutId);
	}, [searchTerm]);

	const handleClear = () => {
		setSearchTerm('');
		onSearch('');
	};

	return (
		<div className="search-bar-container">
			<input className="search-bar" type="text" value={searchTerm} onChange={handleInput} placeholder="Search by title or author..." />
			<img src={searchIcon} alt="Search" className="search-icon" />
			{searchTerm && <img src={cancelIcon} alt="Clear" className="clear-icon" onClick={handleClear} />}
		</div>
	);
};

export default SearchBar;
