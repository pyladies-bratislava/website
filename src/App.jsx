import React from "react";

import { Switch, Route } from "react-router-dom";

import { About, MeetUps, Home, Events } from "./pages/index";
import Contact from "./Contact"; // import page Contact
import { Page3 } from "./pages"; // import our pages
import { PageLayout } from "./components/page-layout";

export const App = () => {
  return (
    <PageLayout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/About" component={About} />
        <Route path="/MeetUps" component={MeetUps} />
        <Route path="/Events" component={Events} />
        <Route path="/Contact" component={Contact} />
        <Route path="/3" component={Page3} />
      </Switch>
    </PageLayout>
  );
};

export default App;
