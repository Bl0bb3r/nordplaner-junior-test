import { Item } from "./Item.model";

const dummyData: ReadonlyArray<Item> = [
  {
    id: "1",
    name: "Sødmælk 1L",
    quantity: 2,
    date: new Date(),
  },
  {
    id: "2",
    name: "Æg i bakke",
    quantity: 1,
    date: new Date(),
  },
  {
    id: "3",
    name: "Snolder",
    quantity: 3,
    date: new Date(),
  },
  {
    id: "4",
    name: "Garn",
    quantity: 1,
    date: new Date(),
  },
];

export default dummyData;
