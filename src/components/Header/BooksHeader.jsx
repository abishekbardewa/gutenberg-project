import React from 'react';
import './header.css';
import { backIcon } from '../../constants/icons';
import { useNavigate } from 'react-router-dom';
const BooksHeader = ({ category, children }) => {
	const navigate = useNavigate();

	return (
		<div className="books-header-wrapper">
			<header className="header">
				<div className="header-content">
					<div className="header-title-wraper">
						<img
							src={backIcon}
							alt="Back"
							className="back-icon"
							onClick={() => {
								navigate(-1);
							}}
						/>
						<h1 className="title">{category}</h1>
					</div>

					{children}
				</div>
			</header>
		</div>
	);
};

export default BooksHeader;
