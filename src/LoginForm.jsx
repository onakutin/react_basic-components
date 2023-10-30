export default function LoginForm({ user, setUser }) {
	return (
		<form action="">
			{user === null ? (
				<>
					<input type="text" />
					<button
						onClick={() =>
							setUser({
								id: 1,

								name: "John",

								email: "john.doe@gmail.com",
							})
						}
					>
						Submit
					</button>
				</>
			) : (
				<button onClick={() => setUser(null)}>Sign out</button>
			)}
		</form>
	);
}
