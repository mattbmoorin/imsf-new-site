import './App.css';

import Navbar from './components/Navbar';
import TopSection from './components/TopSection';
import SectionOne from './components/SectionOne';
import SectionTwo from './components/SectionTwo';
import SectionThree from './components/SectionThree';
import SectionFour from './components/SectionFour';

// import { HashLink as Link } from 'react-router-hash-link';
// import dummyText from './Components/DummyText';

function App() {
  return (
    <div className="App">
      <Navbar />
      <TopSection />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
    </div>
  );
}

export default App;
