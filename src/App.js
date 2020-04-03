import React from 'react';
import Login from './Layout/PublicRoutes/components/Login';
import Register from './Layout/PublicRoutes/components/Register';
import { BrowserRouter, Switch } from 'react-router-dom';
import PublicRoutes from './Layout/PublicRoutes/PublicRoutes';
import PrivateRoutes from './Layout/PrivateRoutes/PrivateRoutes';
import Ships from './Layout/PrivateRoutes/components/Ships';
import About from './Layout/PrivateRoutes/components/About';
import LaunchList from './Layout/PrivateRoutes/components/LaunchList';
import SignForm from './Layout/PrivateRoutes/SignForm';
import AllHistory from './Layout/PrivateRoutes/components/AllHistory';



const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <PublicRoutes component={SignForm} exact path="/" />
        <PublicRoutes component={Login} exact path="/login" />
        <PublicRoutes component={Register} exact path="/register" />
        <PrivateRoutes component={Ships} exact path="/ships" />
        <PrivateRoutes component={About} exact path="/about" />
        <PrivateRoutes component={AllHistory} exact path="/histo" />
        <PrivateRoutes component={LaunchList} exact path="/launches" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
