import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HttpsRedirect from 'react-https-redirect';
import ReactGA from 'react-ga';
import { createBrowserHistory } from "history";

import Login from "./views/Login/Login"
import Profile from './views/Profile/Profile';
import Register from './views/Register/Register';
import Header from "./components/Header/Header";

const history = createBrowserHistory();
history.listen(location => {
  ReactGA.set({ page: location.pathname })
  ReactGA.pageview(location.pathname)
  // alert("entro path")
} )

class App extends React.Component {
  state = { height: window.innerHeight };

  render() {
    
    return (
      <Router history={history}>
        <Header />
        <Switch>
          <HttpsRedirect>
            <Route exact path="/login" component={Login} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/register" component={Register} />
          </HttpsRedirect>
        </Switch>
      </Router>
    );
  }
}

export default App;
