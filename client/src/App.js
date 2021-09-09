import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom"
import LandingPage from "./components/LandingPage"
import Home from "./components/Home"
import PokeCreate from './components/PokeCreate';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path ="/" component= {LandingPage}/>
        <Route path ="/home" component= {Home}/>
        <Route path ="/create" component= {PokeCreate}/>
      </Switch>
      <h1>Henry Pokemon</h1>
    </div>
    </BrowserRouter>
  );
}

export default App;
