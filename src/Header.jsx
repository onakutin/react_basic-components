import "./Header.scss";
import Topmenu from "./Topmenu";
import Context from "./Context";
import { useContext } from "react";
import CartOverview from "./CartOverview";

export default function Header() {
	const {
		state: { language, user },
	} = useContext(Context);

	return (
		<header className="header">
			<Topmenu />
			<div className="header__info">
				<p>Language: {language}</p>
				<CartOverview />
			</div>
			<div className="user">{user ? user.name : ""}</div>
		</header>
	);
}
