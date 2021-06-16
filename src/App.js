import './App.css';
import welcome from './components/welcome';
import { Route, Switch } from "react-router-dom"
import picker from './components/picker';
import blue from './components/blue';
import red from './components/red';
import green from './components/green';


function App() {
  return (
    <div className="App">
       <Switch>
          <Route exact path="/" component={welcome} />
          <Route exact path="/picker" component={picker} />
          <Route exact path="/blue" component={blue} />
          <Route exact path="/green" component={green} />
          <Route exact path="/red" component={red} />
       </Switch>
     
    </div>
  );
}

export default App;
