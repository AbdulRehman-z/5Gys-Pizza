import { useDispatch } from "react-redux";
import { Button } from "../../ui/Button";
import { decrementItemQuantity, incrementItemQuantity } from "./cartSlice";

type UpdateQuantityProps = {
  id: number;
  currentQuantity: number;
};

const UpdateQuantity = ({ id, currentQuantity }: UpdateQuantityProps) => {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center gap-1 md:gap-2">
      <Button
        onClick={() => dispatch(decrementItemQuantity(id))}
        variant="round"
      >
        -
      </Button>
      <span className="text-sm font-medium">{currentQuantity}</span>
      <Button
        onClick={() => dispatch(incrementItemQuantity(id))}
        variant="round"
      >
        +
      </Button>
    </div>
  );
};

export default UpdateQuantity;
