import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavbarHeader from './component/NavbarHeader';
import LoginData from './component/LoginData';
import Firebasedata from './FireBaseService/Firebasedata';

function App() {
  return (
    <div className="App">
     <Router>
        <NavbarHeader/>
     
        <Switch>
          <Route exact path="/"></Route>
          <Route path="/loginpg" component={LoginData}></Route>
          <Route component={Firebasedata}></Route>
       
        </Switch>
      </Router>
    </div>
  );
}

export default App;
