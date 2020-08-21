import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

import '../public/styles.scss';

import {
  Header,
  Home,
  Videos,
} from './components';

const App = () => {
  return (
    <HashRouter>
      <Header />
      <div className="py-5">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/videos" component={Videos} />
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
