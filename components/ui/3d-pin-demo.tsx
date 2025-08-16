"use client";
import React from "react";
import { PinContainer } from "@/components/ui/3d-pin";

export default function AnimatedPinDemo({ title, children, image, head, link }: { title: string; children: React.ReactNode; image: string; head: string; link: string }) {
  return (
    <div className="h-[20rem] w-full flex items-center justify-center ">
      <PinContainer
        title={head}
        href={link}
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50  w-[37vw] h-[55vh] between0_639:w-[60vw] between0_639:gap-2 max-h-[400px] max-w-2xl min-h-[300px]">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            {title}
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
              {children}
            </span>
          </div>

          {/* Colorful box with image */}
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500 overflow-hidden">
            {image && image.trim() !== "" ? (
              <img
                src={image}
                alt=""
                className="w-full h-full object-cover"
              />
            ) : null}
          </div>

        </div>
      </PinContainer>
    </div>
  );
}
