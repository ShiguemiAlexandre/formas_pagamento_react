import './App.css';
import logo from './img/logo.png' 
import Home from './routes/Home';

import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <a href="/">
        <img src={logo} className='Logo' />
      </a>
      <Outlet />
      <footer>
        © 2023 <a href='https://www.instagram.com/pmc.da.umbanda/'>Pmc da umbanda.</a> All rights reserved | Design by <a href='https://www.instagram.com/alexandre_shiguemi/'>Alexandre Shiguemi Ito</a>
      </footer>
    </div>
  );
}

export default App;
