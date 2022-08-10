import { React } from "react";
import { FetchDesigns } from "../sub-components/FetchDesigns";

const CodeSample = () => {
  return (
    <div>
      <div className=" relative grid grid-cols-2 sm:grid-cols-3 gap-2">
        {FetchDesigns.map((Sample, index) => (
          <div className="relative cursor-pointer">
            <div className="absolute inset-0 z-10 flex transition duration-300 ease-in hover:opacity-0">
              <div className="absolute inset-0 bg-black opacity-70"></div>
              <div className="mx-auto text-white z-10 self-center tracking-widest uppercase">
                {Sample.title}
              </div>
            </div>
            <img key={index} src={Sample.src} alt="/" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CodeSample;
