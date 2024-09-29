import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BooksPage from './pages/BooksPage';
import HomePage from './pages/HomePage';

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/books" element={<BooksPage />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
