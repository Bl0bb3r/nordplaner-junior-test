import { createModel } from "@rematch/core";
import { RootModel } from ".";
import { Item } from "../pages/Shopping/Item.model";
import React from "react";
import dummyData from "../pages/Shopping/item.data";

// fetchItems needs implementation for fetching database Items thus saving in state.
function fetchItems() {
  return dummyData;
}

export const items = createModel<RootModel>()({
  state: [] as ReadonlyArray<Item>,
  reducers: {
    loaded: (state, payload: ReadonlyArray<Item>) => payload,
  },
  effects: (dispatch) => ({
    async loadAsync() {
      const payload = fetchItems();
      dispatch.items.loaded(payload);
    },
  }),
});
