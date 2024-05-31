import instagram from "../../public/icons/instagram.svg";
import logo from "../../public/logo.webp";
import { motion } from "framer-motion";
import { useState } from "react";
import { Image } from "astro:assets";

const navMotion = {
  visible: {
    opacity: 1,

    transition: {
      when: "beforeChildren",
      staggerChildren: 0.15,
    },
  },
  hidden: {
    opacity: 0,
  },
};
const itemMotion = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -100 },
};
const itemMotionDesktop = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 1, x: 0 },
};
const navLinks = [
  { name: "O mnie", href: "/o-mnie", id: 1 },
  { name: "Oferty", href: "/oferty", id: 2 },
  { name: "Kontakt", href: "/kontakt", id: 3 },
];

const NavLinks = ({
  isMobile,
  className,
}: {
  isMobile: boolean;
  className: string;
}) => (
  <div className={className}>
    {navLinks.map(({ name, href, id }) => (
      <motion.a
        key={id}
        variants={isMobile ? itemMotion : itemMotionDesktop}
        href={href}
        className="text-center flex justify-center items-center whitespace-nowrap"
      >
        {name}
      </motion.a>
    ))}

    <motion.button
      variants={isMobile ? itemMotion : itemMotionDesktop}
      className="bg-black text-white px-4 py-2 text-center rounded-md flex whitespace-nowrap"
    >
      Skontaktuj się
    </motion.button>
  </div>
);

export default function Nav() {
  const [toggled, setToggled] = useState(false);
  return (
    <nav className="relative px-4 mb-24 flex  items-center justify-between pb-6 pt-6 font-medium  xl:grid grid-cols-3 max-w-[1440px] mx-auto">
      <svg
        className="absolute bottom-0 left-1/2 -translate-x-1/2  "
        width="250"
        height="4"
        viewBox="0 0 250 4"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          animate={{ pathLength: 1, opacity: 1 }}
          initial={{ pathLength: 0, opacity: 0 }}
          transition={{ delay: 1, duration: 0.75 }}
          d="M2 2L428 1.99996"
          stroke="#282828"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>

      <motion.div
        animate={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -25 }}
        transition={{ delay: 0.35 }}
        className="flex gap-12"
      >
        <motion.a
          href="https://www.instagram.com/blondynkanakwadracie_/"
          className="items-center gap-12 xl:flex"
          target="_blank"
        >
          <img src={instagram.src} alt="Youtube Channel" className="w-8" />
        </motion.a>
      </motion.div>

      <a
        href="/"
        className="text-lg font-bold flex justify-center items-center min-w-56"
      >
        <img src={logo.src} alt="logo" className="w-52 h-auto" loading="lazy" />
      </a>

      {/* Nav Items animating in  */}
      {toggled && (
        <motion.div
          variants={navMotion}
          animate="visible"
          initial="hidden"
          className="fixed left-0 top-0  z-40 flex h-screen
          w-full flex-col items-center  justify-center  gap-24 bg-white text-2xl font-bold"
        >
          <NavLinks className="flex flex-col gap-24 text-lg " isMobile={true} />
        </motion.div>
      )}
      <motion.div
        animate={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 25 }}
        transition={{ delay: 0.35 }}
        className="hidden xl:flex xl:items-center  xl:justify-center xl:gap-12 xl:text-lg  xl:ml-auto "
      >
        <NavLinks className="flex gap-12" isMobile={false} />
      </motion.div>

      {/* Hamburger Toggle */}
      <motion.div
        animate={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 25 }}
        transition={{ delay: 0.35 }}
        onClick={() => setToggled((prevToggle) => !prevToggle)}
        className={`burger z-50 cursor-pointer space-y-1.5 xl:hidden 
        `}
      >
        <motion.span
          animate={{ rotateZ: toggled ? 45 : 0, y: toggled ? 8 : 0 }}
          className="line-1 bg-black block h-0.5 w-8 bg-content"
        ></motion.span>

        <motion.span
          animate={{ width: toggled ? 0 : 24 }}
          className="line-2 bg-black block h-0.5 w-6 bg-content"
        ></motion.span>
        <motion.span
          animate={{
            rotateZ: toggled ? -45 : 0,
            y: toggled ? -8 : 0,
            width: toggled ? 32 : 24,
          }}
          className="line-3 bg-black block h-0.5 w-4 bg-content"
        ></motion.span>
      </motion.div>
    </nav>
  );
}
