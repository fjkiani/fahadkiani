import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";
import { ExploreCard, TitleText, TypingText } from ".";
import { useSiteContent } from "../hooks/useSiteContent";
import { exploreWorlds as fallbackWorlds } from "../constants";

const Explore = () => {
  const [active, setActive] = useState("world-2");
  const navigate = useNavigate();
  const { content } = useSiteContent();
  const worlds = content?.exploreWorlds ?? fallbackWorlds;

  return (
    <section className={`${styles.paddings}`} id="explore">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText
          title="| Web, Data, Automation and Machine Learning Solutions |"
          textStyles="text-center"
        />
        <TitleText
          title={
            <>
              Choose your industry & learn{" "}
              <br className="md:block hidden" /> how we can grow it 5x
            </>
          }
          textStyles="text-center"
        />
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {worlds.map((world, index) => (
            <ExploreCard
              key={world.id}
              {...world}
              index={index}
              active={active === world.id}
              handleClick={() => {
                setActive(world.id);
                navigate(world.path);
              }}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Explore;
