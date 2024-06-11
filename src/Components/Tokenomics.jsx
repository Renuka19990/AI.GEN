import React from 'react';
import Holder from '../../src/assets/Holder.png';
import Donut from '../../src/assets/Donut.png';
import '../CustomStyling/tokenomics.css'; 

const Tokenomics = () => {
  return (
    <div className="text-center p-10 text-shadow">
      <h1 className="font-semibold text-5xl my-10 text-gradient">
        Tokenomics
      </h1>
      <div className="flex justify-center gap-6">
        <div className="grid grid-cols-[1fr,10px,1fr] gap-1 text-left">
            <p className="font-semibold">Name</p>
            <p>:</p>
            <p className="ml-4 text-slate-300">AI GEN</p>
            <p className="font-semibold">Total Supply</p>
            <p>:</p>
            <p className="ml-4 text-slate-300">1B</p>
            <p className="font-semibold">Contract</p>
            <p>:</p>
            <p className="ml-4 text-slate-300">Lorem ipsum dolor sit a...</p>
        </div>
        <div className="grid grid-cols-[1fr,10px,1fr] gap-1 text-left">
            <p className="font-semibold">Token Name</p>
            <p>:</p>
            <p className="ml-4 text-slate-300">$AIGEN</p>
            <p className="font-semibold">Circulating Supply</p>
            <p>:</p>
            <p className="ml-4 text-slate-300">1B</p>
            <p className="font-semibold">Chain</p>
            <p>:</p>
            <p className="ml-4 text-slate-300">Ethereum</p>
        </div>
      </div>
      <div className="flex justify-center items-center p-5 gap-8 mt-5">
        <img src={Donut} alt="Donut" className="w-1/2 img-shadow" />
        <img src={Holder} alt="Holder" className="w-[40%] img-shadow" />
      </div>
    </div>
  );
};

export default Tokenomics;
