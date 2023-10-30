import { useState } from "react";
import "./Topmenu.scss";

export default function Topmenu({ currentPage, setCurrentPage }) {
	const [open, setOpen] = useState(false);

	const toggleMenu = () => {
		setOpen(!open);
	};

	return (
		<div className="top-menu">
			{open ? (
				<nav className="navigation">
					<a
						className={
							`link` + (currentPage === "home" ? " link--highlighted" : "")
						}
						href="#"
						onClick={() => setCurrentPage("home")}
					>
						Home
					</a>
					<a
						className={
							`link` + (currentPage === "books" ? " link--highlighted" : "")
						}
						href="#books"
						onClick={() => setCurrentPage("books")}
					>
						Books
					</a>
					<a
						className={
							`link` + (currentPage === "members" ? " link--highlighted" : "")
						}
						href="#members"
						onClick={() => setCurrentPage("members")}
					>
						Members
					</a>
					<a
						className={
							`link` + (currentPage === "contact" ? " link--highlighted" : "")
						}
						href="#contact"
						onClick={() => setCurrentPage("contact")}
					>
						Contact
					</a>
					<a
						className={
							`link` + (currentPage === "login" ? " link--highlighted" : "")
						}
						href="#login"
						onClick={() => setCurrentPage("login")}
					>
						Login
					</a>
				</nav>
			) : (
				""
			)}
			<div className="burger-menu" onClick={toggleMenu}>
				<div className="burger"></div>
				<div className="burger"></div>
				<div className="burger"></div>
			</div>
		</div>
	);
}
