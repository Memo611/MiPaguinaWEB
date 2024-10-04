import './App.css';
import { Navbar } from './Components/Navbar.js';
import Abaout from './Components/Abaout';
import {Projects} from './Components/Projects';
import logo from './Constants/logo.svg'
import { Educations } from './Components/Educations.js';
import { Skills } from './Components/Skills.js';
import { Contact } from './Components/Contact.js';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />

      </header>
      <div className='App-body'>
        <Abaout/>     
        <Projects/>
        <Educations/>
        <Skills/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
