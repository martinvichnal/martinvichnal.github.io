import './App.css';

import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Footer from './components/Footer';
import Analytics from './components/Analytics';
import Newsletter from './components/Newsletter';
import Cards from './components/Cards';


function App() {

  return (
    <>
      <Navbar />
      <Intro />
      {/* <Analytics />
      <Newsletter />
      <Cards /> */}
      <Footer />
    </>
  );
}

export default App;
