import { newOrderSchema, orderSchema } from "../schema";
import { menuSchema } from "../schema";

const API_URL = "https://react-fast-pizza-api.onrender.com/api";

export async function getMenu() {
  const res = await fetch(`${API_URL}/menu`);

  // fetch won't throw error on 400 errors (e.g. when URL is wrong), so we need to do it manually. This will then go into the catch block, where the message is set
  if (!res.ok) throw Error("Failed getting menu");

  const { data } = await res.json();
  const validateData = menuSchema.safeParse(data);
  console.log(validateData.data);

  if (!validateData.success) throw new Error("Failed parsing menu data");
  return validateData.data;
}

export async function getOrder(id: string) {
  const res = await fetch(`${API_URL}/order/${id}`);
  if (!res.ok) throw Error(`Couldn't find order #${id}`);

  const { data } = await res.json();
  const validateData = orderSchema.safeParse(data);

  if (!validateData.success) alert(validateData.error);
  return validateData.data;
}

export async function createOrder(newOrder: any) {
  try {
    const res = await fetch(`${API_URL}/order`, {
      method: "POST",
      body: JSON.stringify(newOrder),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) throw Error();
    const { data } = await res.json();
    const validateData = newOrderSchema.safeParse(data);
    if (!validateData.success) throw alert(validateData.error);

    return validateData.data;
  } catch (error) {
    throw Error(error);
  }
}

export async function updateOrder(id: number, updateObj: any) {
  try {
    const res = await fetch(`${API_URL}/order/${id}`, {
      method: "PATCH",
      body: JSON.stringify(updateObj),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) throw Error();
    // We don't need the data, so we don't return anything
  } catch {
    throw Error("Failed updating your order");
  }
}
