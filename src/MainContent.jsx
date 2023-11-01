import { useContext } from "react";
import Homepage from "./Homepage";
import LoginForm from "./LoginForm";
import "./MainContent.scss";
import Context from "./Context";

export default function MainContent() {
	const {
		state: { currentPage },
	} = useContext(Context);
	return (
		<main>
			{currentPage === "login" ? <LoginForm /> : ""}

			{currentPage === "home" ? <h2>Welcome home</h2> : ""}
			{currentPage === "books" ? <h2>List of all books</h2> : ""}
			{currentPage === "members" ? <h2>This is your personal page</h2> : ""}
			{currentPage === "contact" ? (
				<h2>We do not want you to contact us</h2>
			) : (
				""
			)}

			<div className="app">
				<Homepage />
			</div>
		</main>
	);
}
