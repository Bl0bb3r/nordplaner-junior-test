// React imports
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { CssBaseline } from "@material-ui/core";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

// internal imports
import MainTheme from "./themes/MainTheme";
import MainContainer from "./components/MainContainer";
import Dashboard from "./pages/Dashboard/Dashboard";
import ShoppingList from "./pages/Shopping/ShoppingList";
import Settings from "./pages/Settings/Settings";

function App() {
  return (
    <MainTheme>
      <Router>
        <div className="App">
          <CssBaseline>
            <MainContainer>
              <Switch>
                <Route exact path="/">
                  <Dashboard />
                </Route>
                <Route exact path="/shoppinglist">
                  <ShoppingList />
                </Route>
                <Route exact path="/settings">
                  <Settings />
                </Route>
              </Switch>
            </MainContainer>
          </CssBaseline>
        </div>
      </Router>
    </MainTheme>
  );
}

export default App;
