import { z } from "zod";

//////////////////////////////////////
/////////////////////////////////////
// Schema for the Menu
const Ingredient = z.string();

const Menu = z.object({
  id: z.number().positive(),
  name: z.string(),
  unitPrice: z.number().positive(),
  imageUrl: z.string().url(),
  ingredients: z.array(Ingredient),
  soldOut: z.boolean().optional(), // Assuming soldOut might not be present in all pizzas
});

export type MenuType = z.infer<typeof Menu>;

export const menuSchema = z.array(Menu);

//////////////////////////////////////
/////////////////////////////////////
// Schema for the Order
const CartItem = z.object({
  addIngredients: z.array(z.string()).optional(), // Assuming addIngredients is optional
  removeIngredients: z.array(z.string()).optional(), // Assuming removeIngredients is optional
  pizzaId: z.number().positive(),
  name: z.string(),
  quantity: z.number().positive(),
  totalPrice: z.number().positive(),
  unitPrice: z.number().positive(),
});

export const orderSchema = z.object({
  customer: z.string(),
  status: z.string(),
  priority: z.boolean(),
  cart: z.array(CartItem),
  id: z.string(),
  estimatedDelivery: z.string(),
  orderPrice: z.number().positive(),
  priorityPrice: z.number(),
});

export type OrderType = z.infer<typeof orderSchema>;

// new order
const newCartItem = z.object({
  pizzaId: z.number().positive(),
  name: z.string(),
  quantity: z.number().positive(),
  unitPrice: z.number().positive(),
  totalPrice: z.number().positive(),
});

export const newOrderSchema = z.object({
  customer: z.string(),
  phone: z.string(),
  address: z.string(),
  status: z.string(),
  priority: z.boolean(),
  cart: z.array(newCartItem),
  id: z.string(),
  estimatedDelivery: z.string(),
  orderPrice: z.number().positive(),
  priorityPrice: z.number(),
  createdAt: z.string(),
});
