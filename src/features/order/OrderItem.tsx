import { formatCurrency } from "../../utlis/helpers";

type OrderItemProps = {
  item: {
    quantity: number;
    name: string;
    totalPrice: number;
  };
  isLoadingIngredients?: boolean;
  ingredients?: string[];
  error?: string;
};

function OrderItem({
  item,
  isLoadingIngredients,
  ingredients,
}: OrderItemProps) {
  const { quantity, name, totalPrice } = item;

  return (
    <li className="space-y-1 py-3">
      <div className="flex items-center justify-between gap-4 text-sm">
        <p>
          <span className="font-bold">{quantity}&times;</span> {name}
        </p>
        <p className="font-bold">{formatCurrency(totalPrice)}</p>
      </div>
      <p className="text-sm capitalize italic text-stone-600">
        {isLoadingIngredients ? "loading..." : ingredients?.join(" ,")}
      </p>
    </li>
  );
}

export default OrderItem;
