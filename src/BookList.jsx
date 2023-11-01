import "./BookList.css";
import { Fragment, useContext, useEffect, useState } from "react";
import Context from "./Context.js";
import { Link } from "react-router-dom";

export default function BookList() {
	const { state, dispatch } = useContext(Context);

	const [page, setPage] = useState(1);
	const [books, setBooks] = useState([]);
	const loadBooks = async () => {
		const response = await fetch(
			"https://classes.codingbootcamp.cz/assets/classes/books-api/latest-books.php?page=" +
				page
		);
		const data = await response.json();

		setBooks(data);
	};

	useEffect(() => {
		loadBooks();
	}, [page]);

	return (
		<>
			<h2>List of All the Books</h2>
			{page > 1 ? (
				<button className="paginate" onClick={() => setPage(page - 1)}>
					Previous
				</button>
			) : (
				""
			)}
			{page}
			<button className="paginate" onClick={() => setPage(page + 1)}>
				Next
			</button>
			{books.map((book) => (
				<Fragment key={book.isbn}>
					<h3>{book.title}</h3>
					<div className="book">
						<div className="book-info">
							<h4>{book.authors.map((author) => author.name)}</h4>
							<h5>
								{(book.price * state.exchangeRate).toFixed(2)} {state.currency}
							</h5>
						</div>
						<div className="book-buttons">
							<Link to={"/book/" + book.id}>Detail</Link>
							<button
								onClick={() => {
									dispatch({
										type: "cart/addItem",
										payload: { title: book.title, price: book.price },
									});
								}}
							>
								Add to cart
							</button>
						</div>
					</div>
				</Fragment>
			))}
		</>
	);
}
