import { useContext, useEffect, useState } from "react";
import Context from "./Context.js";

export default function CurrencySelection() {
	const { state, dispatch } = useContext(Context);

	const [currencies, setCurrencies] = useState([]);

	const loadCurrencies = async () => {
		const response = await fetch(
			"https://classes.codingbootcamp.cz/assets/classes/books-api/currencies.php"
		);
		const data = await response.json();
		setCurrencies(data);
	};

	const handleSelect = (ev) => {
		dispatch({
			type: "currency/set",
			payload: ev.target.value,
		});
	};

	const loadExchangeRates = async () => {
		const response = await fetch(
			"https://classes.codingbootcamp.cz/assets/classes/books-api/exchange-rate.php?currency=" +
				state.currency
		);
		const data = await response.json();
		dispatch({
			type: "exchangeRate/set",
			payload: data.rate,
		});
	};

	useEffect(() => {
		loadCurrencies();
	}, []);

	useEffect(() => {
		loadExchangeRates(state.currency);
		localStorage.setItem("currency", state.currency);
	}, [state.currency]);

	return (
		<>
			<select name="currency" value={state.currency} onChange={handleSelect}>
				{currencies.map((currency) => (
					<option key={currency} value={currency}>
						{currency}
					</option>
				))}
			</select>
			<p>Exchange rate: {state.exchangeRate}</p>
		</>
	);
}
