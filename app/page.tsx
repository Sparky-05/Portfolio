"use client"
import Image from "next/image";
import styles from "./page.module.css";
import './globals.css';
import Hero from "@/components/ui/Hero";
import Navitems from "@/components/ui/Navitems";
import Box from "@/components/Box";
import Box1 from "@/components/Box1";
import Box2 from "@/components/ui/box2";
import CardSpotlightDemo from "@/components/ui/card-spotlight-demo";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { GoCopy } from "react-icons/go";
import MagicButtonCopy from "@/components/ui/MagicButtonCopy";
import GlobeDemo from "@/components/ui/globeDemo";
import { HiH1 } from "react-icons/hi2";
import { dimensionValueTypes } from "motion/react";
import PinContainerDemo from "@/components/ui/3d-pin-demo";
import Testimonials from "@/components/ui/animated-testimonials-demo";
import Icon from "@/components/ui/icon"
import CanvasRevealEffectDemo from "@/components/ui/canvas-reveal-effect-demo";
import { GridBackgroundDemo } from "@/components/ui/GridandDot";
import GridBackgroundDemo1 from "@/components/ui/grid-background-demo1";
import { DraggableCardContainer } from "@/components/ui/draggable-card";
import DraggableCardDemo from "@/components/ui/draggable-card-demo-2";
import { BackgroundLines } from "@/components/ui/background-lines";
import SocialIcon from "@/components/ui/social_icon";
import { BiLogoInstagram, BiLogoLinkedinSquare, BiLogoGithub } from "react-icons/bi";

export default function Home() {
  return (
    <main className="relative bg-black flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <div className="w-full flex justify-center"><Navitems /></div>
        <Hero />

        <div id="about" className="p-4 flex between768_1024:flex-col between0_768:flex-col  between0_640: between0_640:flex-col gap-5 exact1024:gap-3 exact1024:w-[1000px] exact1024:p-0 exact1024:pr-3 between698_699:w-fit">
          <Box img="/Images/image1.png" pretext="" text="I value client partnerships and promote transparent communication." text2="" />
          <Box2 img1="" img2="/Images/image4.png" content1={<GlobeDemo />} content2={<div><div className="mx-9 between0_425:text-base text-center">We sync across</div><div className="between0_425:text-base text-center">timezones effortlessly.</div></div>} content3={"I constantly try to improve"} content4={"My Tech Stack"} />
        </div>

        <div className="p-4 flex  between768_1024:flex-col between0_768:flex-col gap-5 exact1024:gap-3 exact1024:w-[1000px] exact1024:p-0 exact1024:pr-7">
          <Box1 img1="" img2="" content1={<CardSpotlightDemo />} content3={
            <div className="relative w-full h-full overflow-hidden rounded-xl">
              {/* Background Gradient Layer */}
              <div className="absolute inset-0 z-0">
                <BackgroundGradientAnimation />
              </div>

              {/* Foreground Content */}
              <div className="relative z-10 flex items-center justify-center h-full w-full flex-col space-y-4">
                <div className="text-3xl font-semibold text-center between768_949:text-2xl between1_430:text-xl between0_320:text-lg">
                  Do you want to start a <br />project together?
                </div>
                <MagicButtonCopy Child={<GoCopy />} Child2="Copy my email" />
              </div>
            </div>
          }
            content2={""} />
          <Box img="/Images/image2.png" pretext="Code in Motion" text="Crafting a slick JS" text2="animation library from scratch." />
        </div>

        <div id="projects" className="w-full py-24 flex justify-center">
          <div className="flex flex-wrap justify-center items-center gap-2 text-center font-bold text-2xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl text-white">
            <h1 className="whitespace-nowrap">A small selection of</h1>
            <h1 className="bg-gradient-to-r from-violet-500 via-pink-500 to-pink-700 bg-clip-text text-transparent whitespace-nowrap">recent projects</h1>
          </div>
        </div>


        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-y-36 px-4 mt-10 mb-40 between2000_3000:gap-x-96 gap-x-5 ">
          <PinContainerDemo title="Zen-Sphere" children="Find your stillness — breathe, focus, and reconnect with your inner calm" head="Zen-Sphere" link="https://sparky-05.github.io/Zen-Sphere/" image="/logo/Zen.png"/>
          <PinContainerDemo title="Ideas in Motion" children="The creator is brewing fresh ideas — new projects are on the way" head="Hold-tight!"link="" image=""/>
          <PinContainerDemo title="Ideas in Motion" children="The creator is brewing fresh ideas — new projects are on the way" head="Hold-tight!" link="" image=""/>
          <PinContainerDemo title="Ideas in Motion" children="The creator is brewing fresh ideas — new projects are on the way" head="Hold-tight!" link="" image="" />
        </div>


        <div id="testimonials" className="w-full py-24 flex justify-center">
          <div  className="flex flex-wrap justify-center items-center gap-2 text-center font-bold text-2xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl text-white">
            <h1 className="whitespace-nowrap">kind words from</h1>
            <h1 className="bg-gradient-to-r from-violet-500 via-pink-500 to-pink-700 bg-clip-text text-transparent whitespace-nowrap">Satisfied Clients</h1>
          </div>
        </div>

        <Testimonials />

        <div className=" pt-20 grid grid-cols-2 gap-6 justify-items-center pb-8 sm:pb-28 lg:grid-cols-5 lg:pb-32">
          <Icon img="/logo/A.png" text="Cloudinary" />
          <Icon img="/logo/B.png" text="Docker" />
          <Icon img="/logo/C.png" text="React" />
          <Icon img="/logo/D.png" text="Tailwind" />

          {/* No wrapper needed for lg: screens, center only for small */}
          <div className="col-span-2 flex justify-center lg:col-span-1 lg:justify-self-center">
            <Icon img="/logo/E.png" text="Hostinger" />
          </div>
        </div>



        <div className="w-full py-24 flex justify-center">
          <div className="flex flex-wrap justify-center items-center gap-2 text-center font-bold text-4xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-6xl text-white">
            <h1 className="whitespace-nowrap">My</h1>
            <h1 className="bg-gradient-to-r from-violet-500 via-pink-500 to-pink-700 bg-clip-text text-transparent whitespace-nowrap">Approach</h1>
          </div>
        </div>

        <CanvasRevealEffectDemo />

        <div className="w-full py-24 flex justify-center">
          <div className="flex flex-wrap justify-center items-center gap-2 text-center font-bold text-2xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl text-white">
            <h1 className="whitespace-nowrap">The face behind the</h1>
            <h1 className="bg-gradient-to-r from-violet-500 via-pink-500 to-pink-700 bg-clip-text text-transparent whitespace-nowrap">Code</h1>
          </div>
        </div>

        <div><DraggableCardDemo /></div>

        <div className=""><GridBackgroundDemo1 /></div>

        <div id="contact" className="flex gap-3 pb-10 justify-center lg:justify-end lg:pr-20 items-center">
          <SocialIcon icon={<div className="text-3xl mr-[3px] mb-[1px] z-[100]"><BiLogoInstagram /></div>} href='https://instagram.com/cozy_manku_' />
          <SocialIcon icon={<div className="text-3xl mr-[3px] mb-[1px] z-[100]"><BiLogoLinkedinSquare /></div>} href='https://www.linkedin.com/in/mayank-tiwary-7b2a7b1bb/' />
          <SocialIcon icon={<div className="text-3xl mr-[3px] mb-[1px]"><BiLogoGithub /></div>} href='https://github.com/Sparky-05' />
        </div>

      </div>
    </main>
  );
}
