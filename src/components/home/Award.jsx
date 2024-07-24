import React from 'react';
import Award1 from '../../images/awards/Award1.png';
import Award2 from '../../images/awards/Award2.png';
import Award3 from '../../images/awards/Award3.png';
import Award4 from '../../images/awards/Award4.png';
import Award5 from '../../images/awards/Award5.png';
import Award6 from '../../images/awards/Award6.png'; 
const Award = () => {
  return (
    <div className="flex flex-col items-center py-10 bg-white">
      <h2 className="text-xl font-semibold mb-8">A Recognized Track-Record Of Excellence</h2>
      <div className="flex flex-wrap justify-center gap-6">
        <img src={Award1} alt="Award 1" className="h-16" />
        <img src={Award2} alt="Award 2" className="h-16" />
        <img src={Award3} alt="Award 3" className="h-16" />
        <img src={Award4} alt="Award 4" className="h-16" />
        <img src={Award5} alt="Award 5" className="h-16" />
        <img src={Award6} alt="Award 6" className="h-16" />
      </div>
    </div>
  );
};

export default Award;
