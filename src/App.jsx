import React from "react";
import Container from "react-bootstrap/Container";
import { Switch, Route } from "react-router-dom";

import { About, MeetUps, Home } from "./pages/index";
import Events from "./Events"; // import page Events
import Contact from "./Contact"; // import page Contact
import { Page3 } from "./pages"; // import our pages
import Footer from "./Footer"; // import page Footer
import { Header } from "./components/header/Header";

export const App = () => {
  return (
    <>
      <Header />
      <Container className="container mt-5 min-vh-100">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/About" component={About} />
          <Route path="/MeetUps" component={MeetUps} />
          <Route path="/Events" component={Events} />
          <Route path="/Contact" component={Contact} />
          <Route path="/3" component={Page3} />
        </Switch>
      </Container>
      <Footer />
    </>
  );
};

export default App;
