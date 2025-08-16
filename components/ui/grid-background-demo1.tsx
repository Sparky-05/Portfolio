import { cn } from "@/lib/utils";
import React from "react";
import { BackgroundLines } from "./background-lines";
import MagicButton from "./MagicButton";
import { BsRocket } from "react-icons/bs";

export default function GridBackgroundDemo() {
  return (
    <div className="relative z-10 flex h-[50rem] w-full items-center justify-center bg-white dark:bg-black">
      {/* Grid background lines */}
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:70px_70px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        )}
      />

      {/* Radial mask for fade effect */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white dark:bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      {/* Main Content */}
      <div className="relative z-20 text-center px-4 sm:px-8">
        <BackgroundLines>
          <div className="flex flex-col items-center justify-center h-full space-y-4 between0_425:space-y-2">
            <div className="text-white text-4xl md:text-5xl sm:text-3xl lg:text-6xl between0_425:text-xl between0_557:text-3xl between0_467:text-2xl between0_389:text-xl">
              Let’s turn your vision into a
            </div>
            <div className="text-4xl sm:text-4xl md:text-5xl between0_557:text-4xl between0_425:text-2xl lg:text-6xl between0_546:text-3xl between0_467:text-2xl between0_389:text-xl font-bold bg-gradient-to-r from-violet-500 via-pink-500 to-pink-700 bg-clip-text text-transparent">
              powerful online experience.
            </div>
            <div className=" flex justify-center items-center">
              <MagicButton
                Child="I’m ready when you are"
                Child2={<BsRocket className="text-base" />}
                href="https://mail.google.com/mail/?view=cm&to=tiwarymayank5816@gmail.com&su=Hello%20Mayank&body=Hi%20there!"
              />

            </div>
          </div>
        </BackgroundLines>
      </div>
    </div>
  );
}
