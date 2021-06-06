import './App.css';
import Home from "./Home.js";
import {BrowserRouter as Router , Switch,Route} from 'react-router-dom';
import Searchpage from './Searchpage';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/Searchpage"> 
          <Searchpage/>
          </Route>
          <Route path="/"> 
          <Home/>
          </Route>
        </Switch>
      </Router>
     
    </div>
  );
}

export default App;
