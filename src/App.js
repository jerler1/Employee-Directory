import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={Home} />
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;
