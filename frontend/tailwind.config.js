/** @type {import('tailwindcss').Config} */


const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      'raleway': ['raleway', 'sans-serif'],
    },
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        black: "#000000",
        deep: "#1e2430",
        uptickblue100: "#070C19",
        uptickblue90: "#0E1933",
        uptickblue80: "#15254C",
        uptickblue70: "#1C3166",
        uptickblue60: "#243E80",
        uptickblue50: "#2B4A99",
        uptickblue40: "#3256B3",
        uptickblue30: "#3962CC",
        uptickblue20: "#406FE6",
        uptickblue10: "#477BFF",
        upticklightb90: "#5988FF",
        upticklightb80: "#6C95FF",
        upticklightb70: "#7EA3FF",
        upticklightb60: "#91B0FF",
        upticklightb50: "#A3BDFF",
        upticklightb40: "#B5CAFF",
        upticklightb30: "#C8D7FF",
        upticklightb20: "#DAE5FF",
        upticklightb10: "#EDF2FF",
        uptickpurpleg: "#AF10F9",
        uptickgreen100: "#08120B",
        uptickgreen90: "#102517",
        uptickgreen80: "#183722",
        uptickgreen70: "#20492E",
        uptickgreen60: "#285C3A",
        uptickgreen50: "#306E45",
        uptickgreen40: "#388051",
        uptickgreen30: "#40925C",
        uptickgreen20: "#48A568",
        uptickgreen10: "#50B773",
        upticklightg90: "#62BE81",
        upticklightg80: "#73C58F",
        upticklightg70: "#85CD9D",
        upticklightg60: "#96D4AB",
        upticklightg50: "#A8DBB9",
        upticklightg40: "#B9E2C7",
        upticklightg30: "#CBE9D5",
        upticklightg20: "#DCF1E3",
        upticklightg10: "#EEF8F1",
        uptickpurple100: "#0E0519",
        uptickpurple90: "#1C0B33",
        uptickpurple80: "#2B104C",
        uptickpurple70: "#391566",
        uptickpurple60: "#471B80",
        uptickpurple50: "#552099",
        uptickpurple40: "#6325B3",
        uptickpurple30: "#722ACC",
        uptickpurple20: "#8030E6",
        uptickpurple10: "#8E35FF",
        upticklightp90: "#9949FF",
        upticklightp80: "#A55DFF",
        upticklightp70: "#B072FF",
        upticklightp60: "#BB86FF",
        upticklightp50: "#C79AFF",
        upticklightp40: "#D2AEFF",
        upticklightp30: "#DDC2FF",
        upticklightp20: "#E8D7FF",
        upticklightp10: "#F4EBFF",
        uptickbackground: "#111111",
        uptickwhiteshade: "#F1F5F9",
        uptickbg: "#1C1C1C",
        uptickbg1: "#1A1A1A",
        uptickneutral: "#4D4D4D",
        uptickneutral20: "#666666",
        blackshade: "#2F2F2F",
        whiteshade: "#F8F8F8",
        uptickneutral10: "#E6E6E6",
      },
      backgroundImage: {
        "mask-group": "url('/src/assets/Mask_Group.png')",
        "welcome-back": "url('/src/assets/Vector.png')",
        "ellipse": "url('/src/assets/Ellipse.png')",
        "wing": "url('/src/assets/wing.png')",
        "contact-page": "url('/src/assets/contactpage.png')",
        "about-background": "url('/src/assets/about.png')",
        "beginner-background": "url('/src/assets/uptick-talent.png')",
        "tech-background": "url('/src/assets/uptick-tech.png')",
        "business-background": "url('/src/assets/uptick-business.png')",
        "business-hero": "url('/src/assets/business-hero.png')",
        "hero-background": "url('/src/assets/Herosection.png')",
        "map-background": "url('/src/assets/uptick-map.png')",
        "home-background": "url('/src/assets/homepage.png')",
      },
    },
  },
  plugins: [],
};
export default config;