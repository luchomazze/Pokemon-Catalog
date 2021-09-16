import { BrowserRouter, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Home from "./components/Home";
import PokeCreate from "./components/PokeCreate";
import Detail from "./components/Detail";
import Header from "./components/Header";
import "./App.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPokemons, getTypes } from "./actions";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPokemons());
    dispatch(getTypes());
  }, [dispatch]);
  return (
    <BrowserRouter>
      <Route exact path="/" component={LandingPage} />
      <Route path="/home" component={Header} />
      <Route path="/create" component={Header} />
      <Route exact path="/home" component={Home} />
      <Route path="/create" component={PokeCreate} />
      <Route exact path="/home/:id" component={Detail} />
    </BrowserRouter>
  );
}

export default App;
