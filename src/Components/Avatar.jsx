import { useEffect, useState } from "react";
import avatar from "../../src/assets/Avatar.png";
import '../CustomStyling/avatar.css';

export const Avatar = () => {
    const [current, setCurrent] = useState(0);
    const steps = ["Select an Avatar", "Create or Generate Script", "Select AI Voices", "Publish"];
    
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrent((prevCurrent) => (prevCurrent + 1) % steps.length);
      }, 3000);

      return () => clearInterval(interval);
    }, []);

    return (
      <div className="avatar-section md:flex justify-start items-center gap-10 relative">
        <div className="md:w-[60%] md:rounded-r-lg rounded-lg overflow-hidden">
          <img src={avatar} alt="avatar-ai" className="overflow-hidden" />
        </div>
        <div className="avatar-section-para">
          <h1 className="md:text-7xl text-3xl mt-5 font-semibold">How it works</h1>
          {steps.map((step, index) => (
            <p key={index} className={`animated-paragraph text-${index === 0 ? '5xl' : '4xl'} mt-${index === 0 ? '10' : '3'} font-bold ${index === current ? 'text-active' : 'text-inactive'}`}>
              {step}
            </p>
          ))}
        </div>
      </div>
    );
};
