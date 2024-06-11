import { useEffect, useState } from "react";
import phase1 from "../../src/assets/phase1.png";
import '../CustomStyling/RoadMap.css';

export const Phase1 = () => {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    setIsAnimated(true);
  }, []);

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center ${isAnimated ? 'fade-in' : ''}`}>
      <h1 className='roadmap01-h1 text-white text-5xl sm:text-4xl md:text-5xl  mb-6'>Roadmap</h1>
      <div className="roadMap-section md:flex justify-center items-center gap-10 relative">
        <div className="roadMap-section-para">
          <h1 className="roadmap01-h2 text-white text-3xl sm:text-4xl md:text-5xl head-gradient mb-8">PHASE 1</h1> 
          <div className="roadMap-section-paragraph">
            <ul>
              <li className="animated-paragraph text-sm sm:text-base md:text-lg lg:text-xl text-white space-y-3 sm:space-y-4 md:space-y-6 list-disc sm:ml-8 md:ml-12 lg:ml-0"> Horizen dai dai harmony dogecoin waves nexo. </li>
              <li className="animated-paragraph text-sm sm:text-base md:text-lg lg:text-xl text-white space-y-3 sm:space-y-4 md:space-y-6 list-disc sm:ml-8 md:ml-12 lg:ml-0"> Flow horizen waves dash tether zcash waves dash terraUSD. </li>
              <li className="animated-paragraph text-sm sm:text-base md:text-lg lg:text-xl text-white space-y-3 sm:space-y-4 md:space-y-6 list-disc sm:ml-8 md:ml-12 lg:ml-0"> Quant harmony amp cosmos PancakeSwap decentraland decred. </li>
              <li className="animated-paragraph text-sm sm:text-base md:text-lg lg:text-xl text-white space-y-3 sm:space-y-4 md:space-y-6 list-disc sm:ml-8 md:ml-12 lg:ml-0"> Serum TRON solana tether holo crypto. Flow eCash amp EOS digibyte stellar.</li>
            </ul>
          </div>
        </div>
        <div className="map-img1 md:w-[60%] md:rounded-r-lg rounded-lg overflow-hidden">
          <img src={phase1} alt="phase1-ai" className="overflow-hidden" />
        </div>
      </div>
    </div>
  );
};
