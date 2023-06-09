import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <div className="App">

    <BrowserRouter>
    <Navbar/>
    {/* <Login/> */}
    {/* <Signup/> */}

    <Routes>
      <Route path={'/login'} element={<Login/>}/>
      <Route path={'/Signup'} element={<Signup/>}/>
      <Route path={'/'} element={<Home/>}/>



    </Routes>

    
    
    </BrowserRouter>   
 
    </div>
  );
}

export default App;
