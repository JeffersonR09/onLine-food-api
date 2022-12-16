import { ulid } from "ulid";
import { Menu } from "./models";
import { Menu as IMenu } from "./interfaces";

const list = async () => {
  return await Menu.find();
};

const store = async (data: IMenu) => {
  const id = ulid();

  const menu = new Menu({ name: data.name, price: data.price, id });

  await menu.save();

  return menu;
};

const getOne = async (id: string) => {
  return await Menu.findOne({ id });
};

const destroy = async (id: string) => {
  return await Menu.findOneAndDelete({ id });
};

const update = async (id: string, data: IMenu) => {
  const oldDate = Menu.findOne({ id });
  return await Menu.findOneAndUpdate(oldDate, data, { new: true });
};

export default {
  list,
  store,
  getOne,
  delete: destroy,
  update,
};
