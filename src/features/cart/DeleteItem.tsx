import { useDispatch } from "react-redux";
import { Button } from "../../ui/Button";
import { deleteItem } from "./cartSlice";

type DeleteItemProps = {
  id: number;
};

const DeleteItem = ({ id }: DeleteItemProps) => {
  const dispatch = useDispatch();

  return (
    <Button onClick={() => dispatch(deleteItem(id))} variant="small">
      Delete
    </Button>
  );
};

export default DeleteItem;
