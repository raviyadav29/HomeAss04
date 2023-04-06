import logo from './logo.svg';
import './App.css';
import Nav from './Components/Nav';
import Login from './Components/Login';
import Home from './Components/Home';
import { useContext } from 'react';
import { AuthContext } from './Components/context';

function App() {
  const { isloggedin } = useContext(AuthContext);
  return (
    <div className="App">

      {/* <Login>Geekster</Login> */}
       {/* Condition Renderring */}
      {isloggedin ? (<div><Nav /><Home /></div>) :( <Login/>)}

      {/* <Nav/>  
        <Home/> */}
    </div>
  );
}

export default App;
