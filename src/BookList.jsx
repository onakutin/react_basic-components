import "./BookList.css";
import { useContext, useEffect, useState } from "react";
import Context from "./Context.js";

export default function BookList() {
	const { state, dispatch } = useContext(Context);

	const [books, setBooks] = useState([]);
	const loadBooks = async () => {
		const response = await fetch(
			"https://classes.codingbootcamp.cz/assets/classes/books-api/latest-books.php"
		);
		const data = await response.json();

		setBooks(data);
	};

	useEffect(() => {
		loadBooks();
	}, []);

	return (
		<>
			<h2>List of All the Books</h2>
			{books.map((book) => (
				<div className="book" key={book.isbn}>
					<div className="book-info">
						<h3>{book.title}</h3>
						<h4>{book.authors.map((author) => author.name)}</h4>
						<h5>
							{(book.price * state.exchangeRate).toFixed(2)} {state.currency}
						</h5>
					</div>
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
			))}
		</>
	);
}
