import React, { useState } from 'react';
import { motion } from 'framer-motion';

type Box1Props = {
  img1: string;
  img2: string;
  content1: React.ReactNode;
  content2: React.ReactNode;
  content3: React.ReactNode;
};

const Box1 = ({ img1, img2, content1, content2, content3 }: Box1Props) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <div
      className="rounded-xl bg-transparent p-4 cursor-pointer between768_1024:flex between768_1024:gap-2"
      onClick={handleClick}
    >
      {/* Top Box */}
      <motion.div
        className="relative text-3xl font-semibold bg-black text-white h-[190.95px] w-full between562_768_R:w-[455.36px] exact700:w-[455.36px] between698_699:w-[455.36px] between605_562:ml-7 between605_562:w-full between605_562:max-w-[455.36px] between700_769:w-[455.36px] between562_768:ml-[90px] between768_1024:w-[455.36px] border border-neutral-700 rounded-xl flex justify-center items-center overflow-hidden"
        style={{
          backgroundImage: `url(${img1})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        animate={{
          scale: clicked ? 1.05 : 1,
          rotate: clicked ? 1 : 0,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        {/* Globe Layer */}
        {content1}

        {/* Badge/Sticker */}
        <div className="absolute top-3 text-white text-2xl px-3 py-1 rounded-full shadow-md z-20 flex items-center justify-center">
          {content2}
        </div>
      </motion.div>

      <br />

      {/* Bottom Box */}
      <motion.div
        className="text-3xl font-semibold bg-black text-white h-[190.95px] between0_557:w-full w-[455.36px] between698_699:w-[450px] border border-neutral-700 rounded-xl flex justify-center items-center overflow-hidden"
        style={{
          backgroundImage: `url(${img2})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        whileHover={{ scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        {content3}
      </motion.div>
    </div>
  );
};

export default Box1;
