import { products } from "../db";
import repository from "./repository";
import { Client as IClient } from "./interfaces";

const list = async () => {
  return await repository.list();
};

const store = async (data: IClient) => {
  if (!data.name) throw new Error("Property name is missing");
  const client = await repository.store(data);
  return client;
};

const getOne = async (id: string) => {
  const client = await repository.getOne(id);
  if (!client) throw new Error("Product not found");

  return client;
};
const update = async (id: string, data: IClient) => {
  const client = await repository.update(id, data);
  if (!client) throw new Error("Product not found");
  return client;
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
