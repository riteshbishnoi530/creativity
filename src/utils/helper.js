import {
  SliderFirstIcon,
  SliderSecondIcon,
  SliderThirdIcon,
  SliderFourthIcon,
} from './icons';

// Image imports (these paths must be correct)
import imgOne from "../../public/assets/images/first-image.webp";
import imgTwo from "../../public/assets/images/second-img.webp";
import imgThree from "../../public/assets/images/third-img.webp";
import imgFour from "../../public/assets/images/fourth-img.webp";
import one from "../../public/assets/images/one.webp";
import two from "../../public/assets/images/two.webp";
import three from "../../public/assets/images/three.webp";
import four from "../../public/assets/images/four.webp";

// Data array for the swiper
export const NEW_SWIPER_LIST = [
  {
    image: imgOne,
    textIcon: one,
    heading: "AI Chatbots don’t create enterprise-grade",
    spanText: "apps",
    description:
      "Bootstrap end-to-end application package including architecture, tests, infrastructure, and deployment code leveraging AdaptsAI’s patented engine. Your apps are secure by design and by default.",
  },
  {
    image: imgTwo,
    textIcon: two,
    heading: "AI Chatbots don’t create enterprise-grade",
    description:
      "Bootstrap end-to-end application package including architecture, tests, infrastructure, and deployment code leveraging AdaptsAI’s patented engine. Your apps are secure by design and by default.",
  },
  {
    image: imgThree,
    textIcon: three,
    heading: "AI Chatbots don’t create enterprise-grade",
    description:
      "Bootstrap end-to-end application package including architecture, tests, infrastructure, and deployment code leveraging AdaptsAI’s patented engine. Your apps are secure by design and by default.",
  },
  {
    image: imgFour,
    textIcon: four,
    heading: "AI Chatbots don’t create enterprise-grade",
    description:
      "Bootstrap end-to-end application package including architecture, tests, infrastructure, and deployment code leveraging AdaptsAI’s patented engine. Your apps are secure by design and by default.",
  },
];

// Slider Icons list
export const SLIDER_ICON_LIST = [
  <SliderFirstIcon />,
  <SliderSecondIcon />,
  <SliderThirdIcon />,
  <SliderFourthIcon />,
];