import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './component/Home';
import './App.css';
import CharacterProfile from './component/CharacterProfile';



const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path={"/:id"} component={CharacterProfile} />
        </Switch>
      </Router>
    </>
  )
}

export default App
