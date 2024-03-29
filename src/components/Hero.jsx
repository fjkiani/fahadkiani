import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import HeroTyper from "./HeroTyper"


const words1 = ['Grow', 'Scale', 'Save', 'Expand', 'Enhance'];



const Hero = () => {


  return (
    <section className={`relative w-full h-[70vh] mx-auto   
    `}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5  `}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
      
          {/* <div className='w-1 sm:h-80 h-40 violet-gradient' /> */}
        </div>

        <div>
          <br/>      <br/>      <br/>
          <h1 className={`${styles.heroHeadText} text-white`}>
      Jedi Labs helps <HeroTyper wordsArray={words1} /> your business 5x
    </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          Machine Learning | Web Development | Data Transformation | 3D | Analytics

          </p>
        </div>
      </div>
      <br/>

      {/* <ComputersCanvas /> */}

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[84px] m{} rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
