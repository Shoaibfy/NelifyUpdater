import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import "./layout/layout.scss";
import LoginPage from "./pages/LoginPage/LoginPage";
import AppLayoutRoute from "./components/Applayout";
import CrudOperations from "./pages/Cruds";
import Profile from "./pages/Profile/profile";
import Admin from "./pages/admin";
import Table2 from "./pages/table/exmpleTable";
import SetPassword from "./pages/SetPassword/SetPassword";
import MyChart from "./pages/Charts/chart";
import PageNotFound from "./pages/PageNotFound";
import ProductList from "./pages/productList/productList";




class App extends React.Component {
  render() {
    return (
      <>
        {" "}
        <Switch>
          <div>
            <div className="container-fluid admin-fluid">
              <div className="row" style={{ display: "contents" }}>
                <Route exact path="/" component={LoginPage} />

                <AppLayoutRoute exact path="/profile" component={Profile} />
                <AppLayoutRoute exact path="/restdata" component={Table2} />
                <AppLayoutRoute exact path="/home" component={Home} />
                <AppLayoutRoute exact path="/crud" component={CrudOperations} />
                <AppLayoutRoute exact path="/info" component={Admin} />
                <AppLayoutRoute exact path="/settings" component={SetPassword} />
                <AppLayoutRoute exact path="/charts" component={MyChart} />
                <AppLayoutRoute exact path="/products" component={ProductList} />

                <AppLayoutRoute exact path="/component-6" component={PageNotFound} />
                <Redirect path="*" component={PageNotFound} />
              </div>
            </div>
          </div>
        </Switch>
      </>
    );
  }
}

export default App;
