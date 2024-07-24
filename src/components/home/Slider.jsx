import React, { useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Slide1 from '../../images/Slide-1.jpg';
import Slide2 from '../../images/Slide-2.jpg';
import Slide3 from '../../images/Slide-3.jpg';
import Slide4 from '../../images/Slide-4.jpg';
import Slide5 from '../../images/Slide-5.jpg';

const Slider = () => {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      if (sliderRef.current.scrollLeft === 0) {
        sliderRef.current.scrollTo({
          left: sliderRef.current.scrollWidth - sliderRef.current.clientWidth,
          behavior: 'smooth',
        });
      } else {
        sliderRef.current.scrollBy({
          left: -sliderRef.current.clientWidth,
          behavior: 'smooth',
        });
      }
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      const maxScrollLeft = sliderRef.current.scrollWidth - sliderRef.current.clientWidth;
      if (sliderRef.current.scrollLeft >= maxScrollLeft) {
        sliderRef.current.scrollTo({
          left: 0,
          behavior: 'smooth',
        });
      } else {
        sliderRef.current.scrollBy({
          left: sliderRef.current.clientWidth,
          behavior: 'smooth',
        });
      }
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      scrollRight();
    }, 4000); // Change the interval time as needed

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  return (
    <div className="relative w-full overflow-hidden" style={{ maxWidth: '100%', height: '500px' }}>
      <div
        className="flex transition-transform duration-300 ease-in-out"
        ref={sliderRef}
        style={{ width: '100%', overflowX: 'hidden', scrollSnapType: 'x mandatory', scrollBehavior: 'smooth' }}
      >
        <div className="flex-none w-full h-full scroll-snap-align-start" style={{ flexBasis: '100%', height: '500px' }}>
          <img src={Slide1} alt="Slide 1" className="w-full h-full object-cover" />
        </div>
        <div className="flex-none w-full h-full scroll-snap-align-start" style={{ flexBasis: '100%', height: '500px' }}>
          <img src={Slide2} alt="Slide 2" className="w-full h-full object-cover" />
        </div>
        <div className="flex-none w-full h-full scroll-snap-align-start" style={{ flexBasis: '100%', height: '500px' }}>
          <img src={Slide3} alt="Slide 3" className="w-full h-full object-cover" />
        </div>
        <div className="flex-none w-full h-full scroll-snap-align-start" style={{ flexBasis: '100%', height: '500px' }}>
          <img src={Slide4} alt="Slide 4" className="w-full h-full object-cover" />
        </div>
        <div className="flex-none w-full h-full scroll-snap-align-start" style={{ flexBasis: '100%', height: '500px' }}>
          <img src={Slide5} alt="Slide 5" className="w-full h-full object-cover" />
        </div>
      </div>
      <button
        onClick={scrollLeft}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-500 text-white p-2 rounded"
      >
        <FontAwesomeIcon icon={faArrowLeft} size="lg" />
      </button>
      <button
        onClick={scrollRight}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-500 text-white p-2 rounded"
      >
        <FontAwesomeIcon icon={faArrowRight} size="lg" />
      </button>
    </div>
  );
};

export default Slider;
