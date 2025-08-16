/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        exact1024: { raw: '(width: 1024px)' }, // ✅ Now in correct place
        exact425: { raw: '(width: 425px)' },
        exact320: { raw: '(width: 320px)' },
        exact700: { raw: '(width: 700px)' },
        between900_768: { raw: '(min-width: 768px) and (max-width: 900px)' },
        between699_424: { raw: '(min-width: 424px) and (max-width: 699px)' },
        between1177_1024: { raw: '(min-width: 1024px) and (max-width: 1177px)' },
        between768_1170: { raw: '(min-width: 1024px) and (max-width: 1170px)' },
        between768_949: { raw: '(min-width: 700px) and (max-width: 949px)' },
        between320_402: { raw: '(min-width: 320px) and (max-width: 402px)' },
        between768_1024: { raw: '(min-width: 700px) and (max-width: 1024px)' },
        between0_640: { raw: '(min-width: 1px) and (max-width: 640px)' },
        between0_639: { raw: '(min-width: 1px) and (max-width: 639.5px)' },
        between0_557: { raw: '(min-width: 1px) and (max-width: 557px)' },
        between0_768: { raw: '(min-width: 1px) and (max-width: 700px)' },
        between562_768: { raw: '(min-width: 562px) and (max-width: 700px)' },
        between562_768_R: { raw: '(min-width: 562px) and (max-width: 768px)' },
        between675_768: { raw: '(min-width: 675px) and (max-width: 768px)' },
        between0_425: { raw: '(min-width: 1px) and (max-width: 425px)' },
        between0_515: { raw: '(min-width: 1px) and (max-width: 515px)' },
        between700_769: { raw: '(min-width: 698px) and (max-width: 769px)' },
        between1_768: { raw: '(min-width: 1px) and (max-width: 768px)' },
        between1_562: { raw: '(min-width: 1px) and (max-width: 562px)' },
        between1_430: { raw: '(min-width: 1px) and (max-width: 430px)' },
        between698_699: { raw: '(min-width: 698px) and (max-width: 699.5px)' },
        between605_562: { raw: '(min-width: 561.5px) and (max-width: 605.2px)' },
        between0_320: { raw: '(min-width: 0px) and (max-width: 320.2px)' },
        between0_375: { raw: '(min-width: 0px) and (max-width: 375.2px)' },
        between0_546: { raw: '(min-width: 0px) and (max-width: 546.2px)' },
        between0_467: { raw: '(min-width: 0px) and (max-width: 467.2px)' },
        between0_389: { raw: '(min-width: 0px) and (max-width: 389.2px)' },
        between2000_3000: { raw: '(min-width: 2000px) and (max-width: 3000px)' },
      },
      animation: {
        spotlight: "spotlight 2s ease .75s 1 forwards",
        first: "moveVertical 30s ease infinite",
        second: "moveInCircle 20s reverse infinite",
        third: "moveInCircle 40s linear infinite",
        fourth: "moveHorizontal 40s ease infinite",
        fifth: "moveInCircle 20s ease infinite",
      },
      keyframes: {
        spotlight: {
          "0%": {
            opacity: 0,
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: 1,
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
        moveHorizontal: {
          "0%": {
            transform: "translateX(-50%) translateY(-10%)",
          },
          "50%": {
            transform: "translateX(50%) translateY(10%)",
          },
          "100%": {
            transform: "translateX(-50%) translateY(-10%)",
          },
        },
        moveInCircle: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "50%": {
            transform: "rotate(180deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        moveVertical: {
          "0%": {
            transform: "translateY(-50%)",
          },
          "50%": {
            transform: "translateY(50%)",
          },
          "100%": {
            transform: "translateY(-50%)",
          },
        },
      },
    },
  },
  plugins: [],
};
