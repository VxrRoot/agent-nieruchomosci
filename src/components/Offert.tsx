import { motion } from "framer-motion";
import { useRef } from "react";
import flat1Img from "../../public/flat1.webp";
import flat2Img from "../../public/flat2.webp";
import flat3Img from "../../public/flat3.webp";

const flats = [
  { street: "Powstańców Warszawy 44", city: "Warszawa", img: flat2Img },
  { street: "3 maja", city: "Kraków", img: flat1Img },
  { street: "Kwiatkowskiego", city: "Wrocław", img: flat3Img },
];

const Offert = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const variants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.15 } },
  };

  return (
    <motion.div
      ref={sectionRef}
      whileInView="visible"
      variants={variants}
      initial="hidden"
      viewport={{ once: true }}
    >
      <h2 className="font-semibold text-4xl">Moje najnowsze oferty</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-4 py-12">
        {flats.map((item) => (
          <div>
            <img
              className="lg:h-64 bg-center mb-8 bg-cover"
              src={item.img.src}
              alt="Zdjęcie mieszkania"
              loading="eager"
            />
            <span className="text-center block text-gray-800 text-md">
              {item.city}
            </span>
            <span className="text-center block text-xl">{item.street}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Offert;
