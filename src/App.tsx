// Importing designe elements
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Importing Elemenets
import { NavigationBar } from './components/NavigationBar';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

// Main App fucntion
function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Banner />
      <Skills />
      <Projects />
      {/* <Contact /> */}
      <Footer />
    </div>
  );
}

export default App;
