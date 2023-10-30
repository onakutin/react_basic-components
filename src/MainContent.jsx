import LoginForm from "./LoginForm";
import "./MainContent.scss";

export default function MainContent({ currentPage, user, setUser }) {
	return (
		<main>
			<div className="app">
				<h1 className="app__headline">All the Books</h1>
			</div>
			{currentPage === "home" ? <h2>Welcome home</h2> : ""}
			{currentPage === "books" ? <h2>List of all books</h2> : ""}
			{currentPage === "members" ? <h2>This is your personal page</h2> : ""}
			{currentPage === "contact" ? (
				<h2>We do not want you to contact us</h2>
			) : (
				""
			)}
			{currentPage === "login" ? (
				<LoginForm user={user} setUser={setUser} />
			) : (
				""
			)}
		</main>
	);
}
