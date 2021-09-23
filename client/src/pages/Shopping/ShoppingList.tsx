import React from "react";
import Button from "../../components/Button";
import { useHistory } from "react-router-dom";
import { Typography } from "@material-ui/core";

const ShoppingList: React.FC = () => {
  //const history = useHistory();

  return (
    <div className="shoppinglist-wrapper">
      <Typography variant="h2">Here is your Shopping List</Typography>
    </div>
  );
};

export default ShoppingList;
