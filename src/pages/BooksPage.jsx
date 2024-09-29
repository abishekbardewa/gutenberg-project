import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import BookList from '../components/BookList/BookList';
import SearchBar from '../components/SearchBar/SearchBar';
import { fetchBooksByCategory } from '../services/api';
import BooksHeader from '../components/Header/BooksHeader';
import { scrollDebounce } from '../utils/utils';

const BooksPage = () => {
	const [searchParams] = useSearchParams();
	const category = searchParams.get('category');

	const [books, setBooks] = useState([]);
	const [page, setPage] = useState(1);
	const [searchTerm, setSearchTerm] = useState('');
	const [hasMore, setHasMore] = useState(true);
	const [loading, setLoading] = useState(false);

	const fetchBooks = async () => {
		try {
			setLoading(true);
			const response = await fetchBooksByCategory(category, page, searchTerm);

			if (page === 1) {
				setBooks(response.results);
			} else {
				setBooks((prevBooks) => [...prevBooks, ...response.results]);
			}
			setHasMore(!!response.next);
		} catch (error) {
			console.error('Error fetching books:', error);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchBooks();
	}, [page, searchTerm]);

	const handleSearch = (newSearchTerm) => {
		if (newSearchTerm !== searchTerm) {
			setLoading(true);
			setBooks([]);
			setPage(1);
			setSearchTerm(newSearchTerm);
		}
	};

	useEffect(() => {
		const handleScroll = scrollDebounce(() => {
			if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.scrollHeight - 1) {
				if (hasMore && !loading) {
					setPage((prev) => prev + 1);
				}
			}
		}, 200);

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, [loading, hasMore]);

	return (
		<>
			<BooksHeader category={category}>{<SearchBar onSearch={handleSearch} />}</BooksHeader>
			<div className="container">
				<BookList books={books} loading={loading} searchTerm={searchTerm} />
			</div>
		</>
	);
};

export default BooksPage;
