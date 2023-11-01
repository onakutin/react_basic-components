import { useContext } from "react";
import Context from "./Context.js";

export default function LoginForm() {
	const {
		dispatch,
		state: { user },
	} = useContext(Context);

	return (
		<form action="">
			{user === null ? (
				<>
					<input type="text" />
					<button
						onClick={() =>
							dispatch({
								type: "user/set",
								payload: { id: 1, name: "John", email: "john.doe@gmail.com" },
							})
						}
					>
						Submit
					</button>
				</>
			) : (
				<button
					onClick={() =>
						dispatch({
							type: "user/set",
							payload: null,
						})
					}
				>
					Sign out
				</button>
			)}
		</form>
	);
}
