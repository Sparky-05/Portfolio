import React from "react";

type IconProps = {
  img: string;  // image URL or path
  text: string; // label text
};

const Icon: React.FC<IconProps> = ({ img, text }) => {
  return (
    <div className="h-fit w-fit p-2 rounded-md text-center flex flex-col items-center justify-center gap-2">
      <div
        className="w-12 h-[45px] bg-cover bg-center rounded-md"
        style={{
          backgroundImage: `url(${img})`,
        }}
      ></div>
      <h1 className="text-white mt-2 font-medium text-xl">{text}</h1>
    </div>
  );
};

export default Icon;
