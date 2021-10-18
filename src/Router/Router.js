import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import MyInfo from "../components/MyInfo/MyInfo";

export default function App() {
  return (
    <Router>      
        <Switch>
          <Route exact path="/Sobre-mi" component={MyInfo}/>            
        </Switch>
    </Router>
  );
}