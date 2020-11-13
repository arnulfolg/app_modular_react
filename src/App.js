import React from 'react';
import { BrowserRouter as Router, Switch } from "react-router-dom";
import HttpsRedirect from 'react-https-redirect';
import ReactGA from 'react-ga';
import { createBrowserHistory } from "history";
import { GuardProvider, GuardedRoute } from "react-router-guards";

import Login from "./views/Login/Login"
import Profile from './views/Profile/Profile';
import Register from './views/Register/Register';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from './views/Home/Home';
import { isLoggedIn } from "./components/Auth/Auth";

const history = createBrowserHistory();
history.listen(location => {
  ReactGA.set({ page: location.pathname })
  ReactGA.pageview(location.pathname)
  // alert("entro path")
} )

const requireLogin = (to, from, next) => {
  if (to.meta.auth) {
    if (isLoggedIn()) {
      next();
    }
    next.redirect('/login');
  } else if(to.meta.session){
    if( isLoggedIn()) {
      next.redirect('/profile')
    }
    next()
  } else {
    next()
  }
};

class App extends React.Component {

  render() {
    
    return (
      <Router history={history}>
        <Header />
        <section className="main">
          <GuardProvider guards={[requireLogin]} >
            <Switch>
              <HttpsRedirect>
                <GuardedRoute exact path="/" component={Home} />
                <GuardedRoute exact path="/login" component={Login} meta={{ session: true }} />
                <GuardedRoute exact path="/profile" component={Profile} meta={{ auth: true }} />
                <GuardedRoute exact path="/register" component={Register} meta={{ session: true }}/>
              </HttpsRedirect>
            </Switch>
          </GuardProvider>

        </section>
        <Footer />
      </Router>
    );
  }
}

export default App;
