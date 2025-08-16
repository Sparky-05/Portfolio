import React from 'react';

const Box = ({ img,pretext, text,text2 }) => {
  return (
    <div
      className="relative group flex font-semibold bg-black text-white between675_768:w-[599.84px] between0_768:max-w-[599.84px] between0_768:w-full between0_425:w-0 between0_425:h-0 h-[415.51px] w-[699.84px] exact1024:w-[710px] md:w-[710px] border border-neutral-700 rounded-xl mb-8 between768_1024:w-full between768_1024:h-[500px] between768_1024:mr-12"
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        
      }}
    >
      <h4 className=" font-thin text-neutral-400 text-lg absolute top-[300px] between768_1024:top-[390px] left-4 transform transition-transform duration-300 ease-in-out group-hover:translate-x-2 between0_425:hidden ">{pretext}</h4>
      <h1 className=" between768_1024:text-2xl exact1024:text-2xl between0_768:text-2xl between0_515:text-xl exact425:text-lg text-3xl absolute bottom-4 left-4 transform transition-transform duration-300 ease-in-out group-hover:translate-x-2 between768_1170:text-2xl between0_425:hidden">
        {text}<br />
        {text2}
      </h1>
    </div>
  );
};

export default Box;
