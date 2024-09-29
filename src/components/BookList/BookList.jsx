import React, { useEffect, useState } from 'react';
import BookItem from '../BookItem/BookItem';
import './booklist.css';
import Loading from '../Loading/Loading';
import EmptyState from '../EmptyState/EmptyState';

const BookList = ({ books, loading, searchTerm }) => {
	if (loading && books.length === 0) {
		return <Loading />;
	}

	if (searchTerm && books.length === 0) {
		return <EmptyState searchTerm={searchTerm} />;
	}
	return (
		<>
			<div className="book-list">
				{books.map((book, idx) => (
					<BookItem key={`${idx}-${book.title}-${book.id}`} book={book} />
				))}
			</div>
			{loading && <Loading />}
		</>
	);
};

export default BookList;
