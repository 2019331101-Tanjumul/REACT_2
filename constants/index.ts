import { StaticImageData } from "next/image";
import Slide1 from "../public/slide-1.webp";
import Slide5 from "../public/slide-5.png";

export const theFiveVideos: { title: string; subtitle: string; link: string; src: string | StaticImageData }[] = [
  {
    title: "Explore What's New",
    subtitle: "Our continuously evolving features empower you to express yourself in new ways.",
    link: "Features",
    src: Slide1,
  },

  {
    title: "Discover Reels",
    subtitle: "Create, share, and watch short, entertaining videos on Instagram.",
    link: "Reels",
    src: "/slide-2.mp4",
  },

  {
    title: "Watch Stories",
    subtitle: "Check out Stories and live videos from your favorite people.",
    link: "Stories",
    src: "/slide-3.mp4",
  },

  {
    title: "Have a conversation",
    subtitle: "Send messages, photos and videos to a friend or select group of people.",
    link: "Messenger",
    src: "/slide-4.mp4",
  },

  {
    title: "Find something new",
    subtitle: "Discover content and creators based on your interests.",
    link: "Search & Explore",
    src: Slide5,
  },
];
