import AboutMe from "../Components/AboutMe/AboutMe.jsx";
import Contact from "../Components/Contact/Contact.jsx";
import Education from "../Components/Education/Education.jsx";
import Nav from "../Components/Nav/Nav.jsx";
import Proyects from "../Components/Proyects/Proyects.jsx";

function App(props) {
    return (
        <div>
            <Nav/>
            <AboutMe/>
            <Education/>
            <Proyects/>
            <Contact/>
        </div>
    )
}

export default App;