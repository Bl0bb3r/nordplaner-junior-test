import { createModel } from "@rematch/core";
import { RootModel } from ".";
import { Item } from "../pages/Shopping/Item.model";
import axios from "axios";
import React from "react";

// fetchItems needs implementation for fetching database Items thus saving in state.
function fetchItems() {
  return [];
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
