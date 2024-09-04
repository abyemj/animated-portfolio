import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "AI Summariser",
    img: "/summariser.png",
    desc: "An AI Article Summarizer Website, using openai's chat-gpt technology, built with ReactJS, Vite, tailwind CSS, Redux toolkit, Rapidapi",
    demo: "https://summariser-653de.web.app/"
  },
  {
    id: 2,
    title: "Chekam",
    img: "/chekam.png",
    desc: "A smart Real Estate application, built with ReactJS, Material UI and Firebase.",
    demo: "https://chekam.com/"
  },
  {
    id: 3,
    title: "Zanes Cuisine",
    img: "/zanes.png",
    desc: "A lovely restaurant application built with ReactJS and Tailwind CSS hosted on vercel",
    demo: "https://zanes-cuisine.vercel.app/"
  },
  {
    id: 4,
    title: "Our Saviour Anglican Schools Durumi",
    img: "/osas.png",
    desc: "A simple school website built with Next JS and tailwind CSS",
    demo: "https://osasdurunmi.vercel.app/"
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>
              <a href={item.demo}>
                See Demo
              </a>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
