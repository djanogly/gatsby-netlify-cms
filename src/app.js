import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Components/Header';
import InnerContent from './Components/home/InnerContent';
import Private from './Components/Private';
import Login from './Auth/Login';
import Logout from './Auth/Logout';

const App = () => (
  <div>
    <Header2 />
    <main>
      <Switch>
        <Route exact path="/" component={InnerContent} />
        <Route path="/private" component={Private} />
        <Route path="/login" component={Login} />
        <Route path="/logout" component={Logout} />
        }}/>
      </Switch>
    </main>
  </div>
)

export default App
