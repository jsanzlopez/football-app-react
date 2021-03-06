import React, { useContext } from 'react';
import './App.scss';
import Routes from './components/common/Routes/Routes';
import Login from './components/Login/Login';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from './store/auth-context';

function App() {
  const ctx = useContext(AuthContext);
  return (
    <div className="App">
      <MainHeader />
      <main>
        {!ctx.isLoggedIn && <Login/>}
        {ctx.isLoggedIn && <Routes/>}
      </main>
    </div>
  );
}

export default App;
