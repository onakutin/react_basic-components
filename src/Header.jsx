import "./Header.scss";
import Topmenu from "./Topmenu";

export default function Header({ currentPage, setCurrentPage, user }) {
	return (
		<header className="header">
			<Topmenu currentPage={currentPage} setCurrentPage={setCurrentPage} />
			<div className="user">{user ? user.name : ""}</div>
		</header>
	);
}
