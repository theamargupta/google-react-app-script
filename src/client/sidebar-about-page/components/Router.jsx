import React, { useState } from 'react';
import LoginPassword from './LoginPassword';
import LoginEmail from './LoginEmail';
import { routeConst } from './utils';
import HomeLandingPage from './Home';

const Router = () => {
  const [routeState, setRouteState] = useState('root');

  switch (true) {
    case routeState === routeConst.root:
      return <LoginEmail setRouteState={setRouteState} />;
    case routeState === routeConst.loginPassword:
      return <LoginPassword setRouteState={setRouteState} />;
    case routeState === routeConst.home:
      return <HomeLandingPage setRouteState={setRouteState} />;
    default:
      return <LoginEmail setRouteState={setRouteState} />;
  }
};

export default Router;
