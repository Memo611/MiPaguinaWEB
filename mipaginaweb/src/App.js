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
      <div className='background'></div>
      <div className='App-body'>
        <Navbar />
        <Abaout/>   
        <Educations/>  
        <Skills/>
        <Projects/>     
        <Contact/>
      </div>
    </div>
  );
}

export default App;
