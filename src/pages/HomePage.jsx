import React from 'react';

import CategoryList from '../components/Category/CategoryList';
import Header from '../components/Header/Header';

const HomePage = () => {
	return (
		<>
			<Header />
			<div className="container">
				<CategoryList />
			</div>
		</>
	);
};

export default HomePage;
