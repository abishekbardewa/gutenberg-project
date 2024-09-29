import React from 'react';
import './header.css';
const Header = () => {
	return (
		<div className="header-wrapper">
			<header className="header">
				<div className="header-content">
					<h1 className="title">Gutenberg Project</h1>
					<h2 className="description">
						A social cataloging website that allows you to freely search its database of books, annotations, and reviews.
					</h2>
				</div>
			</header>
		</div>
	);
};

export default Header;
