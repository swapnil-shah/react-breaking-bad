import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './component/Home';
import './App.css';



const App = () => {
  return (
    <Router>
      <Route exact path="/" component={Home} />
    </Router>
  )
}

export default App
