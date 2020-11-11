import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HttpsRedirect from 'react-https-redirect';
import ReactGA from 'react-ga';
import { createBrowserHistory } from "history";

import Login from "./views/Login/Login"
import Profile from './views/Profile/Profile';
import Register from './views/Register/Register';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from './views/Home/Home';

const history = createBrowserHistory();
history.listen(location => {
  ReactGA.set({ page: location.pathname })
  ReactGA.pageview(location.pathname)
  // alert("entro path")
} )

class App extends React.Component {

  render() {
    
    return (
      <Router history={history}>
        <Header />
        <section className="main">
          <Switch>
            <HttpsRedirect>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/profile" component={Profile} />
              <Route exact path="/register" component={Register} />
            </HttpsRedirect>
          </Switch>
        </section>
        <Footer />
      </Router>
    );
  }
}

export default App;
