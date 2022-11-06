import React from "react";

import { Switch, Route } from "react-router-dom";

import { About, Home, Events, Contact, Stories } from "./pages/index";
import { PageLayout } from "./components/page-layout";

export const App = () => {
  return (
    <PageLayout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/About" component={About} />
        <Route path="/Events" component={Events} />
        <Route path="/Contact" component={Contact} />
        <Route path="/Stories" component={Stories} />
      </Switch>
    </PageLayout>
  );
};

export default App;
