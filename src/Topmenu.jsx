import { useContext, useState } from "react";
import "./Topmenu.scss";
import CurrencySelection from "./CurrencySelection";
import Context from "./Context";

export default function Topmenu() {
	const {
		dispatch,
		state: { currentPage },
	} = useContext(Context);

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
						onClick={() =>
							dispatch({
								type: "currentPage/set",
								payload: "home",
							})
						}
					>
						Home
					</a>
					<a
						className={
							`link` + (currentPage === "books" ? " link--highlighted" : "")
						}
						href="#books"
						onClick={() =>
							dispatch({
								type: "currentPage/set",
								payload: "books",
							})
						}
					>
						Books
					</a>
					<a
						className={
							`link` + (currentPage === "members" ? " link--highlighted" : "")
						}
						href="#members"
						onClick={() =>
							dispatch({
								type: "currentPage/set",
								payload: "members",
							})
						}
					>
						Members
					</a>
					<a
						className={
							`link` + (currentPage === "contact" ? " link--highlighted" : "")
						}
						href="#contact"
						onClick={() =>
							dispatch({
								type: "currentPage/set",
								payload: "contact",
							})
						}
					>
						Contact
					</a>
					<a
						className={
							`link` + (currentPage === "login" ? " link--highlighted" : "")
						}
						href="#login"
						onClick={() =>
							dispatch({
								type: "currentPage/set",
								payload: "login",
							})
						}
					>
						Login
					</a>
				</nav>
			) : (
				""
			)}
			<CurrencySelection />
			<div className="burger-menu" onClick={toggleMenu}>
				<div className="burger"></div>
				<div className="burger"></div>
				<div className="burger"></div>
			</div>
		</div>
	);
}
