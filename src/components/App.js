import React, { Component } from 'react';
import NoMatch from './NoMatch';
import NavBar from './NavBar';
import Flash from './Flash';
import Home from './Home';
import { Switch, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import Episodes from './Episodes'
import Characters from './Characters'

class App extends Component {
  render() {
    return (
      <Container>
        <NavBar />
        <Flash />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/episodes' component={Episodes} />
            <Route exact path='/characters' component={Characters} />
            <Route component={NoMatch} />
          </Switch>
      </Container>
    );
  }
}

export default App;
