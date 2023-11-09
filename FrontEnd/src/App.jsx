import logo from './logo.svg';
import './App.css';
import Shop from './components/Shop';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {

  return (
    <div className="App">
        <Navbar></Navbar>
    <div className="container">
      <Shop></Shop>
    
     {
       //"For some reason, the switch only works when the page is reloaded; the component appears, but not immediately."
     /*  <Router> 
          <Switch>
            <Route exact path='/shop' component={Shop}></Route>
            <Route  path='/menu'></Route>
            <Route  path='/contact'></Route>
            <Route  path='/home'></Route>
          </Switch>
      </Router> */}
    </div>
    </div>
  );
}

export default App;
