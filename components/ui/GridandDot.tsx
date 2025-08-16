import { cn } from "@/lib/utils";
import React from "react";
import { BackgroundBeamsWithCollision } from "./background-beams-with-collision";
import MagicButton from "@/components/ui/MagicButton";
import { HiArrowDownTray } from "react-icons/hi2";

export function GridBackgroundDemo() {
  return (
    <div className="relative flex flex-col items-center justify-center w-full px-4 py-12 min-h-[40rem] sm:py-16 overflow-hidden bg-transparent">
      {/* Grid background */}
      <div
        className={cn(
          "absolute inset-0 z-0 opacity-40 rounded-full",
          "[background-size:90px_90px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        )}
      />

      {/* Radial gradient mask */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-transparent [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      <BackgroundBeamsWithCollision className="absolute inset-0 z-10 bg-transparent">
        <div className="relative z-20 text-center max-w-4xl w-full px-4 mx-auto">
          {/* Headings */}
          <div className="sm:pb-0 pb-3 flex sm:flex-row flex-nowrap justify-center items-center sm:items-baseline gap-1 text-[10px] sm:text-sm font-light text-black dark:text-white">
            <div className="lg:text-base sm:text-xs md:text-base">Clarity and Precision crafted into</div>
            <div className="sm:text-xs md:text-base bg-gradient-to-r from-violet-500 via-pink-500 to-pink-700 bg-clip-text text-transparent font-medium lg:text-lg lg:h-6 lg:pr-5">
              every Single Pixel
            </div>
          </div>

          <div className="pt-3 pb-1 lg:gap-5 font-bold text-black dark:text-white text-center">
            <h2 className="text-2xl sm:text-3xl between0_425:text-xl md:text-6xl lg:text-6xl break-words px-2 between768_949:text-4xl between320_402:text-sm">
              Bringing Ideas to Life
            </h2>
            <div className="flex flex-wrap justify-center gap-1 xl:gap-2 lg:pt-4 pt-0 text-center xl:h-20">
              <h1 className="text-2xl sm:text-3xl between0_425:text-xl md:text-6xl lg:text-6xl break-words between768_949:text-4xl between320_402:text-sm">
                Through
              </h1>
              <h1 className="text-[25px] between0_425:text-xl sm:text-3xl between768_949:text-4xl between320_402:text-sm md:text-6xl lg:text-6xl bg-gradient-to-r from-violet-500 via-purple-500 to-pink-700 bg-clip-text text-transparent break-words lg:pl-2 lg:h-[65px] md:h-[65px] md:pl-4">
                Elegant Interactions
              </h1>
            </div>
          </div>

          {/* Subheading */}
          <div className="mt-4 text-xs items-center justify-center sm:text-sm md:text-base text-gray-700 dark:text-gray-300 max-w-xs sm:max-w-md md:max-w-lg mx-auto px-2 lg:text-xl flex between0_375:flex-col">
            <div>Hi! I'm Mayank, a Full Stack Developer</div>
            <div>based in India.</div>
          </div>

          {/* Button */}
          <div className="sm:h-10 mt-2 flex justify-center">
            <MagicButton
              Child="Show my Work"
              Child2={<HiArrowDownTray className="text-xl ml-2 between0_425:text-sm" />}
            />
          </div>
        </div>
      </BackgroundBeamsWithCollision>
    </div>
  );
}
