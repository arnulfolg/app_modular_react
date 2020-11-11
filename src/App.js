import React from 'react';
import Login from "./views/Login"
import { BrowserRouter as Router, Route } from "react-router-dom";
import HttpsRedirect from 'react-https-redirect';
import ReactGA from 'react-ga';
import { createBrowserHistory } from "history";

const history = createBrowserHistory();
history.listen(location => {
  ReactGA.set({ page: location.pathname })
  ReactGA.pageview(location.pathname)
  // alert("entro path")
} )

class App extends React.Component {
  state = { height: window.innerHeight };

  render() {
    
    const {height} = this.state;
    return (
      <Router history={history}>
        <style>{`
          :root {
            --window-height: ${height}px;
          }
        `}</style>
        <HttpsRedirect>
          <Route exact path="/login" component={Login} />
        </HttpsRedirect>
      </Router>
    );
  }
}

export default App;
