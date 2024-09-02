import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalPrice, getTotalQuantity } from "./cartSlice";

function CartOverview() {
  const totalCartQuantity = useSelector(getTotalQuantity);
  const totalCartPrice = useSelector(getTotalPrice);

  if (totalCartQuantity === 0) return null;

  return (
    <div className="text-md flex items-center justify-between bg-stone-800 px-4 py-3 font-semibold text-stone-200 md:px-6 md:text-2xl">
      <p className="space-x-2">
        <span>
          {totalCartQuantity} {totalCartQuantity > 1 ? "pizzas" : "pizza"}
        </span>
        <span>${totalCartPrice}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
