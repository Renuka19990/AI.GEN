import React from "react";
import shoesPic from "../../src/assets/ai.shoes.png";
import girlPic from "../../src/assets/ai.girl.png";
import keyBoard from "../../src/assets/ai.keyboard.png";
import detailsPic from "../../src/assets/ai.details.png";
import "../CustomStyling/items.css";

export default function Items() {
  return (
    <div className="relative top-[10%] w-full">
      <div className="flex justify-center items-center gap-12 h-[30%]">
        <div className="img-container transform-hover">
          <img src={shoesPic} alt="shoes" />
        </div>
        <div className="img-container transform-hover">
          <img src={girlPic} alt="girl" />
        </div>
      </div>
      <div className="relative top-[20%] my-[3%] flex justify-center items-center gap-12 h-[30%]">
        <div className="img-container transform-hover">
          <img src={keyBoard} alt="keyboard" />
        </div>
        <div className="img-container transform-hover">
          <img src={detailsPic} alt="details" />
        </div>
      </div>
    </div>
  );
}
