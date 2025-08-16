"use client";
import React from "react";

import { AnimatePresence, motion } from "motion/react";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import { HiH1 } from "react-icons/hi2";

export default function CanvasRevealEffectDemo() {
  return (
    <>
      <div className="py-20 flex flex-col lg:flex-row items-center justify-center bg-white dark:bg-black w-full gap-4 mx-auto px-8">
        <Card title={
          <div className="flex flex-col gap-2">
          <h1 className="text-3xl text-center">Planning & Strategy</h1>
          <p className="text-base text-center">Together, we’ll define your website’s goals, target audience, and key features. We’ll also outline the site structure, navigation, and content needed for a smooth user experience.</p>
          </div>
          } icon={<span className="text-white text-3xl font-bold">Step 1</span>}>
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-[#ff0066]"
            colors={[[230, 230, 230]]}
            dotSize={3}
          />
        </Card>
        <Card title={
          <div className="flex flex-col gap-2">
          <div className="text-3xl text-center">Development & Progress Updates</div>
          <p className="text-base text-center">Once the plan is in place, development begins. From initial concepts to clean, functional code, I’ll keep you informed throughout the entire process.</p>
          </div>
        } icon={<span className="text-white text-3xl font-bold flex items-center justify-center absolute top-1.5">Step 2</span>}>
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-yellow-500"
            colors={[[255, 255, 255]]}
            dotSize={3}
          />
          {/* Radial gradient for the cute fade */}
          <div />
        </Card>
        <Card title={
          <div className="flex flex-col gap-2">
          <h1 className="text-3xl text-center">Development & Launch</h1>
          <p className="text-base text-center">This is where ideas come to life. Using the approved design, I’ll build your website from the ground up, turning vision into fully functional code.</p>
          </div>
        }icon={<span className="text-white text-3xl font-bold">Step 3</span>}>
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-cyan-600"
            colors={[[255, 255, 255]]}
            dotSize={3}
          />
        </Card>

      </div>
    </>
  );
}

const Card = ({
  title,
  icon,
  children,
}: {
  title: React.ReactNode;
  icon: React.ReactNode;
  children?: React.ReactNode;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 relative h-[35rem] relative"
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20">
        <div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center mb-6 absolute">
          {icon}
        </div>
        <div className="opacity-0 group-hover/canvas-card:opacity-100 relative z-10 group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {title}
        </div>
      </div>
    </div>
  );
};

const AceternityIcon = () => {
  return (
    <svg
      width="66"
      height="65"
      viewBox="0 0 66 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-10 w-10 text-black dark:text-white group-hover/canvas-card:text-white "
    >
      <path
        d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
        stroke="currentColor"
        strokeWidth="15"
        strokeMiterlimit="3.86874"
        strokeLinecap="round"
        style={{ mixBlendMode: "darken" }}
      />
    </svg>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
