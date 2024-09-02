import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import { type MenuType } from "../../schema";
import MenuItem from "./MenuItem";
import { useSelector } from "react-redux";
import { RootStateType } from "../../store";

function Menu() {
  const menu = useLoaderData() as [MenuType];
  const username = useSelector((state: RootStateType) => state.user.username);
  console.log(username);

  return (
    <ul className="divide-y divide-stone-200">
      {menu.map((item) => (
        <MenuItem key={item.id} pizza={item} />
      ))}
    </ul>
  );
}

export async function menuLoader() {
  return await getMenu();
}

export default Menu;
