import AboutMe from "../Components/AboutMe/AboutMe.jsx";
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
        </div>
    )
}

export default App;