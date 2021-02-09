import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import Login from "./Login";
import ListUsers from "./ListUsers";

import { Switch, Route, Link } from "react-router-dom";
import Signup from "./Signup";

function App() {
  return (
    <Provider store={store}>
      <Switch>
        <Route exact path="/listUsers" component={ListUsers} />
        <Route exact path="/" component={Login} />
        <Route exact path="/signup" component={Signup} />
      </Switch>
    </Provider>
  );
}

export default App;
