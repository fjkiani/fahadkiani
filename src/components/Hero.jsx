import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import HeroTyper from "./HeroTyper"
import { staggerContainer } from '../utils/motion';
import { ExploreCard, TitleText, TypingText } from '.';




const words1 = ['Grow', 'Scale', 'Save', 'Expand', 'Enhance'];

const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8, ease: "easeInOut" } }
};

const Hero = () => {
  return (
    <section className={`relative w-full h-[70vh] mx-auto`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >   
        <div className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-col justify-center items-center`}>
          <div className='w-full flex flex-col justify-center items-center'> 
            <motion.div
              variants={fadeInVariants}
              initial="hidden"
              animate="visible"
              className="text-center"
            >
              <h1 className={`${styles.heroHeadText} text-white`}> 
                Jedi Labs helps <HeroTyper wordsArray={words1} /> your business 5x
              </h1>
            </motion.div>
          </div>
        </div>

        {/* Your scrolling animation component, ensure it's properly aligned if displayed */}
        <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
          <a href='#about'>
            <div className='w-[35px] h-[84px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
              <motion.div
                animate={{ y: [0, 24, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
                className='w-3 h-3 rounded-full bg-secondary mb-1'
              />
            </div>
          </a>
        </div>
      </motion.div>
      
      
    </section>
  );
};

export default Hero;
