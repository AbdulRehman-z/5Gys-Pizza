import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import { type MenuType } from "../../schema";

function Menu() {
  const menu = useLoaderData() as [MenuType];
  console.log(menu);

  return (
    <div>
      {menu.map((item) => (
        <div key={item.id}>
          <h1>{item.name}</h1>
          <img src={item.imageUrl} alt={item.name} />
          <p>{item.unitPrice}</p>
          <p>{item.soldOut}</p>
        </div>
      ))}
    </div>
  );
}

export async function menuLoader() {
  return await getMenu();
}

export default Menu;
