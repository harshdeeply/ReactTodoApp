import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Api from "./components/Api";
import Navbar from "./components/Navbar";
import Error from "./components/Error";
import ThemeSwitcher from "./components/ThemeSwitcher";

const App = (props) => {
  return (
    <div className="todoapp stack-large">
      <Navbar />
      <ThemeSwitcher />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        <Route path="/api" component={Api} />
        <Route component={Error} />
      </Switch>
    </div>
  );
};

export default App;
