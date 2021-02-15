import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Containers/Home";
import NavBar from "./Components//NavBar/NavBar";
import Wrapper from "./Components/Wrapper/Wrapper";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Wrapper>
          <Route exact path="/" component={Home} />
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;
