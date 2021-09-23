import React, { useEffect } from "react";
import { DataGrid, GridColDef } from "@material-ui/data-grid";
import Button from "../../components/Button";
import { useHistory } from "react-router-dom";
import { capitalize, Typography } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { RootState, RootDispatch } from "../../store";

const columns: GridColDef[] = [
  {
    field: "name",
    headerName: "Item",
    width: 150,
    valueFormatter: (params) => capitalize(params.row?.name),
  },
  {
    field: "quantity",
    headerName: "Quantity",
    width: 150,
  },
  {
    field: "date",
    headerName: "Date Added",
    width: 475,
  },
];

const ShoppingList: React.FC = () => {
  const dbData = useSelector((state: RootState) => state.items);
  const dispatch = useDispatch<RootDispatch>();

  useEffect(() => {
    dispatch.items.loadAsync();
  }, [dispatch.items]);

  return (
    <div className="shoppinglist-wrapper">
      <Typography variant="h2" align="center">
        This is your Shopping List:
      </Typography>
      <DataGrid
        rows={dbData}
        columns={columns}
        pageSize={5}
        autoHeight={true}
        autoPageSize={true}
        rowsPerPageOptions={[25]}
        checkboxSelection
        disableSelectionOnClick
      />
      <Button
        title={"Add Item to ShoppingList"}
        onClick={() => {
          // const name = prompt("Enter Item here:");
          // if (name) {
          //   this.setState((state: { items: any }) => ({
          //     items: [...state.items, { name }],
          //   }));
          // }
        }}
      ></Button>
    </div>
  );
};

export default ShoppingList;
