import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import Clients from './Pages/Clients';
import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route path="/signin" component={ SignIn } />
            <Route path="/signup" component={ SignUp  } />
            <Route path="/clients" component={ Clients } />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
