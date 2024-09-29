import React from 'react';
import './category.css';
import { nextIcon } from '../../constants/icons';
import { useNavigate } from 'react-router-dom';
const CategoryButton = ({ category }) => {
	const navigate = useNavigate();

	const handleCategorySelect = (category) => {
		navigate(`/books?category=${category}`);
	};
	return (
		<button className="category-button" onClick={() => handleCategorySelect(category.name)}>
			<img src={category?.icon} alt={category.name} className="category-icon" />
			<span className="category-name">{category.name}</span>
			<img src={nextIcon} alt="right arrow" className="right-arrow" />
		</button>
	);
};

export default CategoryButton;
