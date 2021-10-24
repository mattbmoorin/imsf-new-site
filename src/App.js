import './App.css';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

import Flag from './Bridgeport_flag.png';

import Navbar from './components/Navbar';
import TopSection from './components/TopSection';
import SectionOne from './components/SectionOne';
import SectionTwo from './components/SectionTwo';
import SectionThree from './components/SectionThree';
import SectionFour from './components/SectionFour';

import { Swiper, SwiperSlide } from 'swiper/react';

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
