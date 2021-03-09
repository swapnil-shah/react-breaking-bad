import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './component/Home';
import './App.css';
import CharacterProfile from './component/CharacterProfile';
import Header from './component/Header';



const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path={"/:name"} component={CharacterProfile} />
        </Switch>
      </Router>
    </>
  )
}

export default App
