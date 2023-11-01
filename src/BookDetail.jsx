import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function BookDetail() {
	const { id } = useParams();

	console.log(id);

	const [book, setBook] = useState(null);

	const loadBook = async () => {
		const url =
			"https://classes.codingbootcamp.cz/assets/classes/books-api/book.php?id=" +
			id;
		const response = await fetch(url);
		const data = await response.json();
		setBook(data);
	};
	useEffect(() => {
		loadBook();
	}, []);

	return <div className="book-detail">{book ? <h2>{book.title}</h2> : ""}</div>;
}
