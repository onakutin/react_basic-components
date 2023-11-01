import { useContext, useState } from "react";
import "./Topmenu.scss";
import CurrencySelection from "./CurrencySelection";
import Context from "./Context";
import { Link, useLocation } from "react-router-dom";

export default function Topmenu() {
	// const {
	// 	dispatch,
	// 	state: { currentPage },
	// } = useContext(Context);

	const [open, setOpen] = useState(false);

	const toggleMenu = () => {
		setOpen(!open);
	};

	const location = useLocation();

	return (
		<div className="top-menu">
			{open ? (
				<nav className="navigation">
					<Link
						className={
							`link` + (location.pathname === "/" ? " link--highlighted" : "")
						}
						to="/"
					>
						Home
					</Link>

					<Link
						className={
							`link` +
							(location.pathname === "books" ? " link--highlighted" : "")
						}
						to="/books"
					>
						Books
					</Link>

					<Link
						className={
							`link` +
							(location.pathname === "members" ? " link--highlighted" : "")
						}
						to="/members"
					>
						Members
					</Link>

					<Link
						className={
							`link` +
							(location.pathname === "contact" ? " link--highlighted" : "")
						}
						to="/contact"
					>
						Contact us
					</Link>

					<Link
						className={
							`link` +
							(location.pathname === "login" ? " link--highlighted" : "")
						}
						to="/login"
					>
						Login
					</Link>
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
