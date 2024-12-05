import React from 'react';
import{
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Contact from './Contact';
import About from './About';
import Home from './Home';


function App() {
  return(
    <Router>
      <nav>
        <Link to="/" className='link'>Shop</Link>
        <Link to="/about" className='link'>About</Link>
        <Link to="/contact" className='link'>Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </Router>
  )
 
}

export default App;
