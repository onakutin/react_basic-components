import { useState } from "react";
import Header from "./Header";
import MainContent from "./MainContent";

function App() {
	const [currentPage, setCurrentPage] = useState("home");

	const [user, setUser] = useState(null);

	// console.log(user);
	return (
		<>
			<Header
				currentPage={currentPage}
				setCurrentPage={setCurrentPage}
				user={user}
			/>
			<MainContent
				currentPage={currentPage}
				setCurrentPage={setCurrentPage}
				user={user}
				setUser={setUser}
			/>
		</>
	);
}

export default App;
