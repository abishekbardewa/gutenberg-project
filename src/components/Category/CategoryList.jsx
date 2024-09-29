import React from 'react';
import CategoryButton from './CategoryButton';
import { categories } from '../../constants/categories';
import './category.css';
const CategoryList = () => {
	return (
		<div className="category-list">
			{categories.map((category) => (
				<CategoryButton key={category.name} category={category} />
			))}
		</div>
	);
};

export default CategoryList;
