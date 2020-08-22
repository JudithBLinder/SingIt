import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

import '../public/styles.scss';

import {
  Header,
  Home,
  Maroon5,
  WheelsOnTheBus,
} from './components';

const App = () => {
  return (
    <HashRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/maroon5" component={Maroon5} />
        <Route exact path="/wheelsonthebus" component={WheelsOnTheBus} />
      </Switch>
    </HashRouter>
  );
}

export default App;
