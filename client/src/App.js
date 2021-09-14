import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom"
import LandingPage from "./components/LandingPage"
import Home from "./components/Home"
import PokeCreate from './components/PokeCreate';
import Detail from './components/Detail';
import Header from "./components/Header";
import Footer from "./components/Footer";
import styles from "./App.css";

function App() {
  return (
    <BrowserRouter>
   
        <Route exact path ="/" component= {LandingPage}/>
        <Route path ="/home" component= {Header}/>
        <Route path ="/create" component= {Header}/>
        <Route exact path ="/home" component= {Home}/>
        {/* <Route path ="/home" component= {Footer}/> */}
        <Route path ="/create" component= {PokeCreate}/>
        <Route exact path ="/home/:id" component= {Detail}/>
      
    
    </BrowserRouter>
  );
}

export default App;
