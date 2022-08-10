import { React } from "react";

const OnlineCodeSample = [
  { title: "BodyIn", src: "/assets/Design Projects/BodyIn.png" },
  { title: "ChelseaJo", src: "/assets/Design Projects/ChelseaJo.png" },
  {
    title: "CrownOfEster",
    src: "/assets/Design Projects/CrownOfEster.png",
  },
  {
    title: "D&J-Life-Coaches",
    src: "/assets/Design Projects/D&J-Life-Coaches.png",
  },
  { title: "Fllego", src: "/assets/Design Projects/Fllego.jpeg" },
  { title: "GettingFit", src: "/assets/Design Projects/GettingFit.png" },
  {
    title: "DivineFitness",
    src: "/assets/Design Projects/GettingFitAtAnyAge - DivineFitness.png",
  },
  {
    title: "Fit&Fabulous",
    src: "/assets/Design Projects/GettingFitAtAnyAge - Fit&Fabulous.png",
  },
  {
    title: "FitAndAgeless",
    src: "/assets/Design Projects/GettingFitAtAnyAge - FitAndAgeless.png",
  },
  {
    title: "StrongerThanYouThink",
    src: "/assets/Design Projects/GettingFitAtAnyAge - StrongerThanYouThink copy.png",
  },
  {
    title: "I Am Working For What I Am Hoping For",
    src: "/assets/Design Projects/I Am Working For What I Am Hoping For.png",
  },
  {
    title: "I Relaunched My Life",
    src: "/assets/Design Projects/I Relaunched My Life.png",
  },
  {
    title: "Im Not Just Existing Im Living",
    src: "/assets/Design Projects/Im Not Just Existing Im Living.png",
  },
  {
    title: "IvyHouseOfStyle-Presentation",
    src: "/assets/Design Projects/IvyHouseOfStyle-Presentation.png",
  },
  { title: "KillCam", src: "/assets/Design Projects/KillCam.png" },
  { title: "Lux&Lot", src: "/assets/Design Projects/Lux&Lot.JPG" },
  { title: "MomisHomes", src: "/assets/Design Projects/MomisHomes.JPG" },
  {
    title: "NellaStyles",
    src: "/assets/Design Projects/NellaStyles.JPG",
  },
  {
    title: "Pengin Shoe Navy Blue",
    src: "/assets/Design Projects/Pengin Shoe Navy Blue.png",
  },
  { title: "Pengin", src: "/assets/Design Projects/Pengin.png" },
  { title: "Poshbytoya", src: "/assets/Design Projects/Poshbytoya.png" },
  {
    title: "Speak Over Yourself",
    src: "/assets/Design Projects/Speak Over Yourself.png",
  },
  {
    title: "Wolferic-Security",
    src: "/assets/Design Projects/Wolferic-Security.png",
  },
];

const CodeSample = () => {
  return (
    <div className="h-full">
      <div className=" relative grid grid-cols-2 sm:grid-cols-4 gap-2">
        {OnlineCodeSample.map((Sample, index) => (
          <div
            key={index}
            className="relative flex items-center justify-center cursor-pointer"
          >
            <div className="absolute inset-0 z-10 flex transition duration-300 ease-in hover:opacity-0">
              <div className="absolute inset-0 bg-black opacity-70" />
              <div
                key={index}
                className="mx-auto text-white z-10 self-center text-center tracking-widest uppercase"
              >
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
