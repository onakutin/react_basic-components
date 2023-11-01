import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function BookDetail() {
	const { id } = useParams();

	const loadBook = async () => {
		const url =
			"https://classes.codingbootcamp.cz/assets/classes/books-api/book.php?id=" +
			id;
		const response = await fetch(url);
		const data = await response.json();
		console.log(data);
	};
	useEffect(() => {
		loadBook();
	}, [id]);

	return (
		<div className="book-detail">
			<h2>Detail of a book</h2>
		</div>
	);
}
