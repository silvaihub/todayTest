
import './App.css';
import {
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import About from './Pages/About';
import Login from './Pages/Login'


function App() {
 
  
  
  return (
    <div className="App">
      <nav>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/login">Login</Link>
        
        <Link to="/">Home</Link>
        
      </nav>
      
      <Switch>
      <Route path='/about'>
        <About />
      </Route>
      <Route path = '/contact'>
        <Contact />
      </Route>

      <Route path = '/login'>
        <Login />
      </Route>
      
      <Route path='/'>
        <Home />
      </Route>
      </Switch>
    
      
    </div>
    
  );
}

export default App;
