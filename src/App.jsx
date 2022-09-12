import React from "react";

import { Switch, Route } from "react-router-dom";

import { About, MeetUps, Home, Events, Contact } from "./pages/index";
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
      </Switch>
    </PageLayout>
  );
};

export default App;
