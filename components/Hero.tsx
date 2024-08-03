
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { Meteors } from "./ui/meteors";
import Image from "next/image";
import { GlareCard } from "./ui/glare-card";
import { VanishingText } from "./ui/TextVanish";
import MagicButton from "./MagicButton";
import { FaLinkedin, FaTwitter } from "react-icons/fa6";

const taglines = [
    "Transforming Concepts into seamless user experiences ",
    "Bridging front-end finesse with back-end prowess",
    "Architecting digital solutions from database to interface",
    "Turning complex problems into elegant full-stack solutions",
    "Seamlessly connecting users to data through innovative code",
    "Transforming ideas into full-fledged digital realities "
];

const Hero = () => {
  
  return (
    <div className="pb-20 pt-36">
      
      {/**
       *  UI: Spotlights
       *  Link: https://ui.aceternity.com/components/spotlight
       */}
      <div>
        <Meteors number={20} className="absolute z-50"/>  
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/**
       *  UI: grid
       *  change bg color to bg-black-100 and reduce grid color from
       *  0.2 to 0.03
       */}
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          // chnage the bg to bg-black-100, so it matches the bg color and will blend in
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center md:justify-between relative md:my-20 z-10">
        <GlareCard className="flex flex-col items-center justify-center w-full">
            <Image src={'/photo-large.png'} className="hover:grayscale p-5 rounded-2xl w-full" height={800} width={600} alt="photo" />
        </GlareCard>
        <div className="text-center md:text-start md:max-w-[50vw] flex flex-col items-center justify-center md:items-start md:justify-start">
          
          <TextGenerateEffect
            words="Hi! I'm Manish Rana, Full Stack Developer"
            className="text-start text-[20px] md:text-3xl lg:text-4xl"
          />
         
          {/* <p className="text-start md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
           Transforming Concepts into seamless user experiences
          </p> */}
          <p className="text-start md:tracking-wider mb-4 text-sm md:text-md lg:text-xl my-5">I am a passionate Software Engineer, specialised in front-end development using React, NextJs, NodeJs, TypeScript and more.
            <br />
          </p>
          <VanishingText className="text-start h-14 md:tracking-wider mt-5 text-sm md:text-md lg:text-xl" textList={taglines} />
          <div className="flex items-center gap-6 mt-5">
              <a href="https://www.linkedin.com/in/manishraana/" target="_blank">
                <MagicButton
                  title="LinkedIn"
                  otherClasses="hover:bg-blue-500"
                  icon={<FaLinkedin />}
                  position="right"
                />
              </a>
              <a href="https://twitter.com/ManishRaanaa" target="_blank">
                <MagicButton
                  title="Twitter"
                  otherClasses="hover:bg-blue-500"
                  icon={<FaTwitter />}
                  position="right"
                />
              </a>
            </div>
            
        </div>
      </div>
    </div>
  );
};

export default Hero;
