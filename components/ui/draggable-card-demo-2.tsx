import React from "react";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card";

export default function DraggableCardDemo() {
  const items = [
    {
      title: "",
      image: "/Mayank/center2.jpg",
      className: "absolute top-40 left-[25%] rotate-[-7deg]",
    },
    {
      title: "",
      image: "/Mayank/Img5.jpg",
      className: "absolute top-5 left-[40%] rotate-[8deg]",
    },
    {
      title: "",
      image: "/Mayank/Img4.jpg",
      className: "absolute top-32 left-[55%] rotate-[10deg]",
    },
    {
      title: "",
      image: "/Mayank/Img3.jpg",
      className: "absolute top-24 right-[35%] rotate-[2deg]",
    },
    {
      title: "",
      image: "/Mayank/Img2.jpg",
      className: "absolute top-24 left-[45%] rotate-[-7deg]",
    },
    {
      title: "",
      image: "/Mayank/imgend1.jpg",
      className: "absolute top-8 left-[30%] rotate-[4deg]",
    },
  ];

  return (
    <DraggableCardContainer className="relative flex min-h-screen w-full items-center justify-center overflow-clip">
      <div className="absolute top-1/2 mx-auto max-w-sm -translate-y-3/4 text-center text-xl font-black text-neutral-400 md:text-3xl lg:text-4xl font-serif dark:text-neutral-800">
        <div>You see the final build</div><div>I remember the crashes.</div>
      </div>

      {items.map((item, index) => (
        <DraggableCardBody
          key={index}
          className={`flex flex-col items-center justify-center
                      bg-black rounded-xl shadow-md p-2
                      w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-96 lg:h-96
                      ${item.className}`}
        >
          <img
            src={item.image}
            alt={item.title}
            className="pointer-events-none w-full h-full object-cover rounded-lg"
          />
          {item.title && (
            <h3 className="mt-2 text-center text-sm sm:text-base md:text-lg font-bold text-white">
              {item.title}
            </h3>
          )}
        </DraggableCardBody>
      ))}
    </DraggableCardContainer>
  );
}
