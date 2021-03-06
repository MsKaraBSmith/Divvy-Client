import React, { useState, useEffect } from 'react';
import Auth from './Components/Auth/Auth';
import DivvyIndex from './Components/DivvyPages/DivvyIndex';
import Sitebar from './Components/Home/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';



function App() {
  const [sessionToken, setSessionToken] = useState('');
  const [userRole, setUserRole] = useState('');

  

  useEffect(() => {
    if (localStorage.getItem('token')){
      setSessionToken(localStorage.getItem('token'));
    }
  }, []);

  const updateToken = (newToken) => {
    localStorage.setItem('token', newToken);
    setSessionToken(newToken);
    console.log(sessionToken, "This is the token from APP");
  };

  const isAdmin = (role) => {
    localStorage.setItem('user', role);
    setUserRole(role);
    console.log(userRole, "user role from app")

  }
  
  const clearToken = () => {
    localStorage.clear();
    setSessionToken('');
  };

  const protectedViews = () => {
    return (sessionToken === localStorage.getItem('token') ?
    <div>
      <Router>
        <DivvyIndex token={sessionToken}  />
      </Router>
    </div>
     : <Auth updateToken={updateToken} isAdmin={isAdmin} />)
  }


  return (
      <div>
        <Sitebar clickLogout={clearToken}/>
        {protectedViews()}
        {/* <Auth updateToken={updateToken}/> */}
      </div>   
  );
};

export default App;
