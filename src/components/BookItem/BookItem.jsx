import React from 'react';
import { openBookInPreferredFormat } from '../../services/api';
import './bookitem.css';
const BookItem = ({ book }) => {
	const handleOpenBook = () => {
		openBookInPreferredFormat(book);
	};

	return (
		<div className="book-item" onClick={handleOpenBook}>
			<img src={book?.formats['image/jpeg']} alt={book?.title} />
			<div>
				<h3 className="book-name">{book?.title}</h3>
				<p className="book-author">{book?.authors[0]?.name?.replace(',', ' ')}</p>
			</div>
		</div>
	);
};

export default BookItem;
