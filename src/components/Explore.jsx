import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom'; // Make sure this is imported

import { styles } from '../styles';
import { exploreWorlds } from '../constants';
import { staggerContainer } from '../utils/motion';
import { ExploreCard, TitleText, TypingText } from '.';

const Explore = () => {
  const [active, setActive] = useState('world-2');
  const navigate = useNavigate(); // Correctly obtain the navigate function here

  // Function to handle navigation
  const handleNavigate = (path) => {
    navigate(path); // Use the path variable correctly
  };

  return (
    <section className={`${styles.paddings}`} id="explore">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| Web, Data, Automation and Machine Learning Solutions |" textStyles="text-center" />
        <TitleText
          title={<>Choose your industry & learn <br className="md:block hidden" />  how we can grow it 5x</>}
          textStyles="text-center"
        />
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {exploreWorlds.map((world, index) => (
            <ExploreCard
              key={world.id}
              {...world}
              index={index}
              active={active === world.id}
              handleClick={() => handleNavigate(world.path)} // Correctly pass the path to handleNavigate
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Explore;
