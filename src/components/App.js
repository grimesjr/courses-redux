import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './Home/HomePage';
import AboutPage from './About/AboutPage';
import Header from './common/Headers';
import PageNotFound from './PageNotFound';

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={AboutPage} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;

//Switch will stop when Route matches
//able to set a default page, 404
