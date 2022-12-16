import { ulid } from "ulid";
import { Client } from "./models";
import { Client as IClient } from "./interfaces";

const list = async () => {
  return await Client.find();
};

const store = async (data: IClient) => {
  const id = ulid();

  const client = new Client({
    ...data,
    id,
  });

  await client.save();

  return client;
};

const getOne = async (id: string) => {
  return await Client.findOne({ id });
};

const destroy = async (id: string) => {
  return await Client.findOneAndDelete({ id });
};

const update = async (id: string, data: IClient) => {
  const oldDate = Client.findOne({ id });
  return await Client.findOneAndUpdate(oldDate, data, { new: true });
};

export default {
  list,
  store,
  getOne,
  delete: destroy,
  update,
};
