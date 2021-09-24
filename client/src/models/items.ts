import { createModel } from "@rematch/core";
import { RootModel } from ".";
import { Item } from "../pages/Shopping/Item.model";
import axios from "axios";

const fetchItems = async () => {
  const response = await axios.get("http://localhost:5000/api/shoppinglist");
  return response.data;
};

const addItemInDb = async (name: string, quantity: number) => {
  await axios.post("http://localhost:5000/api/shoppinglist", {
    name,
    quantity,
    date: Math.round(new Date().getTime() / 1000),
  });
};

export const items = createModel<RootModel>()({
  state: [] as ReadonlyArray<Item>,
  reducers: {
    loaded: (state, payload: ReadonlyArray<Item>) => payload,
  },
  effects: (dispatch) => ({
    loadAsync: async () => {
      const payload = await fetchItems();
      dispatch.items.loaded(payload.map((r: any) => ({ ...r, id: r._id })));
    },
    addItem: async (payload: { name: string; quantity: number }) => {
      await addItemInDb(payload.name, payload.quantity);
      dispatch.items.loadAsync();
    },
  }),
});
