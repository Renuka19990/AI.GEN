import { useEffect, useState } from "react";
import avatar from "../../src/assets/Avatar.png";
import "../CustomStyling/avatar.css";

export const Avatar = () => {
  const [animationDirection, setAnimationDirection] = useState("cross");

  useEffect(() => {
    const directionInterval = setInterval(() => {
      setAnimationDirection((prevDirection) =>
        prevDirection === "cross" ? "left" : "cross"
      );
    }, 2000);

    return () => clearInterval(directionInterval);
  }, []);

  return (
    <div className="avatar-section md:flex justify-start items-center gap-10 relative">
      <div
        className={`${
          animationDirection === "left"
            ? "animate-left"
            : animationDirection === "cross"
            ? "animate-cross-left"
            : "animate-cross-right"
        } md:w-[60%] md:rounded-r-lg rounded-lg overflow-hidden`}
      >
        <img src={avatar} alt="avatar-ai" className="overflow-hidden" />
      </div>
      <div className="avatar-section-para">
        <h1 className="md:text-7xl text-3xl mt-5 font-semibold">
          How it works
        </h1>
        <p className="animated-paragraph text-5xl mt-10 font-bold">
          Select an Avatar
        </p>
        <p className="animated-paragraph text-4xl mt-3 font-bold">
          Create or Generate Script
        </p>
        <p className="animated-paragraph text-4xl mt-3 font-bold">
          Select AI Voices
        </p>
        <p className="animated-paragraph text-4xl mt-3 font-bold">Publish</p>
      </div>
    </div>
  );
};
