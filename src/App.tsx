import './App.css';

import Navbar from './components/Navbar';
import Intro from './components/Intro';
import FooterMain from './components/FooterMain';
import { Projects } from './components/Projects';

function App() {

  return (
    <>
      <Navbar />
      <Intro />
      <Projects />
      <FooterMain />
    </>
  );
}

export default App;
