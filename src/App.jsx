import { useReducer } from "react";
import Header from "./Header";
import MainContent from "./MainContent";
import Context from "./Context";
import reducer from "./reducer";
import { BrowserRouter } from "react-router-dom";

function App() {
	const [contextValue, setContextValue] = useReducer(reducer, {
		user: null,
		theme: "light",
		language: "en",
		currency: localStorage.getItem("currency") || "EUR",
		authHash: null,
		shoppingCart: [],
		exchangeRate: 1,
		currentPage: "home",
	});

	return (
		<BrowserRouter>
			<Context.Provider
				value={{
					state: contextValue,
					dispatch: setContextValue,
				}}
			>
				<>
					<Header />
					<MainContent />
				</>
			</Context.Provider>
		</BrowserRouter>
	);
}

export default App;
