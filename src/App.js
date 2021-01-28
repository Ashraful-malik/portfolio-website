import React from "react";
import Pages from "./Components/pages";
import { Switch, Route } from "react-router-dom";
import HomePage from "./Components/Home/HomePage";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer/";
import Projects from "./Components/Project";
function App() {
  return (
    <>
      <Pages />

      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/contact" component={Contact}></Route>
        <Route exact path="/portfolio" component={Projects}></Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
