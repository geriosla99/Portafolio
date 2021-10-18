import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Education from "../components/Education/Education";
import ContactForm from "../components/ContactForm/ContactForm";
import MyInfo from "../components/MyInfo/MyInfo";
import Proyects from "../components/Proyects/Proyects";
import Habilitys from "../components/Education/Hability/Habilitys";

export default function App() {
  return (
    <Router>      
        <Switch>
          <Route exact path="/Sobre-mi" component={MyInfo}/>   
          <Route exact path="/Estudios" component={Education}/>          
          <Route exact path="/Mis-proyectos" component={Proyects}/>
          <Route exact path="/Contactame" component={ContactForm}/>    
          <Route exact path="/Habilidades" component={Habilitys}/>    
          <Route exact path="/Contactame" component={ContactForm}/>    
          <Route exact path="/Contactame" component={ContactForm}/>    
        </Switch>
    </Router>
  );
}