import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import Links from './components/Links';
import Navbar from './components/Navbar';
import World from './components/World';
import {useState} from 'react'

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <AboutUs menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Links/>
      <World/>
      <Footer/>
    </>
  );
}

export default App;
