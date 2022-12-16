import { products } from "../db";
import repository from "./repository";
import { Menu as IMenu } from "./interfaces";

const list = async () => {
  return await repository.list();
};

const store = async (data: any) => {
  if (!data.name) throw new Error("Property name is missing");
  const menu = await repository.store(data);
  return menu;
};

const getOne = async (id: string) => {
  const menu = await repository.getOne(id);
  if (!menu) throw new Error("Product not found");

  return menu;
};
const update = async (id: string, data: IMenu) => {
  const menu = await repository.update(id, data);
  if (!menu) throw new Error("Product not found");
  return menu;
};

const destroy = async (id: string) => {
  return await repository.delete(id);
};

export default {
  list,
  store,
  update,
  getOne,
  delete: destroy,
};
