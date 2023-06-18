import React, { useEffect, useState } from 'react';
import Signup from './Signup';
import Home from './Home';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      setIsAuthenticated(true);
    }
  }, []);

  return isAuthenticated ? (
    <Home setIsAuthenticated={setIsAuthenticated} />
  ) : (
    <Signup setIsAuthenticated={setIsAuthenticated} />
  );
};

export default App;
