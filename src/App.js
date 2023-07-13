import NavBar from './components/NavBar';
import Bannar from './components/Bannar';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

function App() {
  return (
    <>
    <NavBar/>
    <Bannar/>
    <Skills/>
    <Projects/>
    <Contact/>
    </>
  );
}

export default App;
