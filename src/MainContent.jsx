import { useContext } from "react";
import Homepage from "./Homepage";
import LoginForm from "./LoginForm";
import "./MainContent.scss";
import Context from "./Context";
import Books from "./Books";
import { Route, Routes } from "react-router-dom";
import Members from "./Members";
import Contact from "./Contact";
import BookDetail from "./BookDetail";
import SubpageLayout from "./SubpageLayout";

export default function MainContent() {
	const {
		state: { currentPage },
	} = useContext(Context);
	return (
		<main>
			{currentPage === "login" ? <LoginForm /> : ""}
			<Routes>
				<Route path="/" element={<Homepage />} />

				<Route path="/" element={<SubpageLayout />}>
					<Route path="/books" element={<Books />} />
					<Route path="/members" element={<Members />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/login" element={<LoginForm />} />

					<Route path="/book/:id" element={<BookDetail />} />
				</Route>
			</Routes>
		</main>
	);
}
