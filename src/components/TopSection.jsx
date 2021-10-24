import React from 'react';
import Flag from '../Bridgeport_flag.png';
import { Swiper, SwiperSlide } from 'swiper/react';

const TopSection = () => {
  return (
    <div className="hero">
      <div className="hero-inner">
        <img className="flag" src={Flag} />
        <h1 className="hero-headline">
          <bold>
            <i>The Irving Moorin Scholarship Fund</i>
          </bold>
        </h1>
        <br />
        <br />
        <h2 className="section-dark">
          After a seven-year struggle with a rare form of cancer, Irving Moorin
          died at the age of 48. But the spirit and resolve he showed during
          that time were an inspiration to both his friends and other people
          with whom he came into contact. The Scholarship Fund was started by a
          group of close friends as a memorial to him.
          <br />
          <br />
          We reach out to those high school students in Bridgeport, CT area who
          show the same determination to overcome their hardships in obtaining a
          college degree. Since its inception in 1971, the award has grown in
          significance. It is highly sought after by graduating seniors, who but
          for this award might otherwise not be able to attend college.
          <br />
          <br />
          Your time, talent, and treasure can make all the difference to a
          nonprofit organization like ours. The Irving Moorin Scholarship Fund
          is designed to help graduating seniors throughout the Bridgeport, CT
          area afford college. The fund was started in honor of Irving S.
          Moorin, who struggled with a rare form of cancer.
          <br />
          <br />
          College is expensive, and unfortunately, higher education isn’t a
          realistic option for many high school students. Luckily, scholarship
          funds like ours exist. The impossible becomes possible with your help.
          Since our establishment in 1971, our mission has focused on helping
          students facing financial hardships.
        </h2>
      </div>
    </div>
  );
};

export default TopSection;
