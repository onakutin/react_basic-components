import { useContext } from "react";
import Context from "./Context";

export default function CartOverview() {
	const {
		state: { shoppingCart },
	} = useContext(Context);

	return <p>{shoppingCart.length} items in the cart</p>;
}
