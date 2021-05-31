import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { render } from "react-dom";
import Home from "./Home";
import About from "./About";
import Rules from "./Rules";
import Username from "./Username";
import Welcome from "./Welcome";
import Essentials from "./Essentials";
// import MapMain from "./MapMain";
// import MapQ1 from "./MapQ1";
// import ComponentWithGeolocation from "./ComponentWithGeolocation";

import "./style.css";

const App = () => {
  const [username, setUsername] = useState("");

  const handleHello = (welcomeName) => {
    setUsername(welcomeName);
  };

  return (
    <Router>
      <div className="container">
        <nav className="nav">
          <ul className="nav-ul">
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/about">About</Link>
            </li>

            <li>
              <Link to="/rules">Rules</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/rules">
            <Rules />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/username">
            <Username helloUsername={handleHello} />
          </Route>
          <Route exact path="/welcome">
            <Welcome usernameW={username} />
          </Route>
          <Route exact path="/essentials">
            <Essentials />
          </Route>
          {/* <Route exact path="/mapmain">
            <MapMain usernameW={username} />
          </Route>
          <Route exact path="/mapq1">
            <MapQ1 />
          </Route>
          <Route exact path="/geolocation">
            <ComponentWithGeolocation />
          </Route> */}
        </Switch>
      </div>
    </Router>
  );
};

render(<App />, document.querySelector("#app"));