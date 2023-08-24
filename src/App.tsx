// Importing designe elements
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Importing Elemenets
import { NavigationBar } from './components/NavigationBar';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';

// Main App fucntion
function App() {
  return (
    <div className="App">
      <NavigationBar></NavigationBar>
      <Banner />
      <Skills></Skills>
    </div>
  );
}

export default App;
