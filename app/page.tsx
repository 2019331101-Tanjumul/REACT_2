"use client";
import { useState, useEffect, useRef } from "react";
import Image, { StaticImageData } from "next/image";
import { LinkAndArrow } from "@/components/link-with-arrow";
import { theFiveVideos } from "@/constants";
import { TitleSubTitleAndLinkWithArrow } from "@/components/title-subtitle-and-link-with-arrow";

import InstaLogo from "../public/insta-logo.png";
import OrangeHaired from "../public/orange-haired.webp";
import WhiteShirtMan from "../public/white-tshirt-man.webp";
import LandscapePhotoForInsta from "../public/landscapephotoforInsta.webp";
import CommunityBackground from "../public/community-background.webp";
import CowBoyHat from "../public/cowboy_hat.webp";
import TowelHeadGirl from "../public/girl-toung.webp";
import GrowWithUs from "../public/grow-with-us.jpg";

export default function HomePage() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  const parallaxRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isScrollingUp = prevScrollPos > currentScrollPos;

      setVisible(isScrollingUp || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  // Debounce function to limit scroll handler calls
  const debounce = (func: (...args: any[]) => any, delay: number) => {
    let timeoutId: NodeJS.Timeout | number | undefined;
    return (...args: any[]) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  // Effect to handle vertical scroll and update currentSlide
  useEffect(() => {
    const handleVerticalScrollControl = () => {
      if (!carouselRef.current) return;

      // Use the parent section for scroll calculations
      const section = carouselRef.current.closest("section");
      if (!section) return;

      const sectionRect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Calculate vertical scroll progress within the section (0 to 1)
      const scrollProgress = Math.max(0, Math.min(1, (viewportHeight - sectionRect.top) / sectionRect.height));

      // Map progress to slide index (0 to 4)
      const slideIndex = Math.floor(scrollProgress * 5);

      // Clamp slideIndex to be between 0 and 4
      setCurrentSlide(Math.max(0, Math.min(4, slideIndex)));
    };

    const debouncedScrollHandler = debounce(handleVerticalScrollControl, 10);

    // Add event listener to window for vertical scrolling
    window.addEventListener("scroll", debouncedScrollHandler);

    // Cleanup function to remove event listener on component unmount
    return () => {
      window.removeEventListener("scroll", debouncedScrollHandler);
    };
  }, [debounce, carouselRef]); // Dependencies

  // Add CSS to hide the scrollbar (optional, keep if you want dots only)
  const style = `
  .hide-scrollbar::-webkit-scrollbar {
    display: none;
  }

  .hide-scrollbar {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }
  `;

  return (
    <div className="min-h-screen font-helvetica">
      {/* Fixed Section */}
      <Image src={CommunityBackground} alt="Community background" className="fixed top-0 left-0 right-0 -z-10" />
      {/* <style>{style}</style>
      <style jsx>{`
        .font-helvetica {
          font-family: helvetica, sans-serif;
        }
      `}</style> */}
      {/* Header */}
      <header
        className={`flex items-center justify-between py-[24px] px-[7.142vw] fixed top-0 left-0 right-0 ${
          scrollY === 0 ? "bg-transparent" : "bg-white"
        }  z-50 transition-transform duration-300 ${visible ? "translate-y-0" : "-translate-y-full"}`}
      >
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 cursor-pointer">
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <path
              d="M4 6H20M4 12H20M4 18H20"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </g>
        </svg>

        <div className="flex items-center gap-[48px]">
          <span className="text-[20px] font-medium hidden lg:block cursor-pointer hover:underline">Log in</span>
          <Image src={InstaLogo} alt="Instagram Logo" className="h-[72px] w-[72px] cursor-pointer" />
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="pt-[160px] pb-[80px] px-[7.142vw] bg-white z-20">
          {/* Bringing you and the girl*/}
          <div className="flex flex-wrap items-center justify-between">
            <h1 className="text-[96px] w-[50%] font-normal leading-tight tracking-tight text-black">
              Bringing you <br />
              closer to the people
            </h1>
            <div>
              <Image
                src={OrangeHaired}
                alt="Person with orange hair in pink checkered top making hand gestures"
                className="w-full h-full object-none"
              />
            </div>
          </div>

          {/* The boy and and things */}
          <div className="mt-[96px]">
            <div className="flex flex-wrap flex-row-reverse justify-between">
              <h2 className="text-[96px] font-normal leading-tight tracking-tight ml-auto">
                <span className="text-pink-500">and things</span>
                <br />
                <span className="text-violet-500">you love</span>
              </h2>
              <div className="w-[33%]">
                <Image src={WhiteShirtMan} alt="Partial view of person" className="w-full h-full" />
              </div>
            </div>
          </div>

          {/* Arrow and Three Persons */}
          <div className="flex h-[320px]">
            <div className="self-end overflow-hidden">
              <svg
                className="animate-vertical"
                width="96"
                height="96"
                viewBox="0 0 96 96"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.0691 67.5589L22.8279 67.5589C27.8908 67.5589 32.2155 68.7192 35.8017 71.0397C39.4935 73.4657 41.9722 76.8938 43.238 81.3239L43.238 7.91088L55.8954 7.91088L55.8954 81.3239C57.1611 76.8938 59.5871 73.4657 63.1734 71.0397C66.8651 68.7192 71.2425 67.5589 76.3055 67.5589L87.0643 67.5589L87.0643 81.1657L77.7294 81.1657C71.1897 81.1657 65.8631 82.9061 61.7494 86.3868C57.6358 89.8676 55.5789 94.7196 55.5789 100.943L55.5789 102.841L43.5544 102.841L43.5544 100.943C43.5544 94.7196 41.4976 89.8676 37.3839 86.3868C33.2702 82.9061 27.9436 81.1657 21.4039 81.1657L12.0691 81.1657L12.0691 67.5589Z"
                  fill="#000000"
                ></path>
              </svg>
            </div>

            <Image
              src={LandscapePhotoForInsta}
              alt="Three girls taking a photo from above in a landscape"
              className="h-[320px] w-max absolute right-0"
            />
          </div>
        </section>

        {/* We're committed to section */}
        <section className="min-h-screen flex items-center px-[14.284vw] text-white bg-black/25">
          <article>
            <h3 className="text-[72px]">We're committed to fostering a safe and supportive community for everyone</h3>
            <LinkAndArrow link="Community" />
          </article>
        </section>

        {/* Slider Section */}
        <section className="px-[7.142vw] py-[48px] h-screen bg-white">
          <div className="flex items-center justify-center">
            <TitleSubTitleAndLinkWithArrow
              title={theFiveVideos[currentSlide].title}
              subtitle={theFiveVideos[currentSlide].subtitle}
              link={theFiveVideos[currentSlide].link}
              className="w-[35%] mr-auto"
            />
            <div
              className={`max-w-[320px] h-full rounded-[28px] mr-[7.142vw] ${
                currentSlide !== 0 && "border-pink-500 border-[4px]"
              }`}
            >
              {currentSlide == 0 || currentSlide == theFiveVideos.length - 1 ? (
                <Image
                  src={theFiveVideos[currentSlide].src as StaticImageData}
                  alt={theFiveVideos[currentSlide].title}
                  className={`${currentSlide !== 0 && "rounded-[28px]"} w-[100%]`}
                />
              ) : (
                <video
                  src={theFiveVideos[currentSlide].src as string}
                  autoPlay
                  className="min-h-full min-w-full rounded-[28px]"
                />
              )}
            </div>
          </div>

          <div className="flex gap-5">
            {Array.from({ length: 5 }).map((_, index) => {
              return (
                <div
                  key={index}
                  className={`w-5 h-5 rounded-full cursor-pointer ${
                    index === currentSlide ? "bg-pink-500" : "bg-gray-500"
                  }`}
                  onClick={() => setCurrentSlide(index)}
                />
              );
            })}
          </div>
        </section>

        {/* Hat boy and towel girl */}
        <section className="relative w-full h-screen pt-[48px] bg-white px-[7.142vw] flex gap-[48px]">
          <Image src={CowBoyHat} alt="Image resembling man with cowboy hat" className="w-[58vw] h-[60vh] self-end" />
          <Image src={TowelHeadGirl} alt="Image resembling woman with towel" className="absolute right-0 w-[28vw]" />
        </section>

        {/* Insta Dance and Stand out */}
        <section className="relative bg-white px-[7.142vw] py-[160px] flex items-center gap-[48px]">
          <div className={`max-w-[320px] h-full rounded-[28px] ml-[7.142vw] border-pink-500 border-[4px]`}>
            <video src="/insta_dance.mp4" muted autoPlay className="w-[100%] rounded-[28px]" />
          </div>
          <TitleSubTitleAndLinkWithArrow
            title="Stand out on Instagram"
            subtitle="Connect with more people, build influence, and create compelling content that's distinctly yours."
            link="Creators"
            className="w-[35%] ml-auto"
          />
        </section>

        {/* Our Community is Evolving */}
        <section className="px-[7.142vw] py-[14.284vw] text-white text-[192px]">
          <h2 className="ml-auto text-right mb-[7.142vw]">
            Our <br /> Community <br /> is evolving,
          </h2>
          <h2>so are we</h2>
        </section>

        {/* Grow with us */}
        <section className="relative bg-white px-[7.142vw] py-[160px] flex items-center gap-[48px]">
          <TitleSubTitleAndLinkWithArrow
            title="Grow with us"
            subtitle="Share and grow your brand with our diverse, global community."
            link="Business"
            className="w-[35%] mr-auto"
          />
          <div className={`max-w-[320px] h-full rounded-[28px] mr-[7.142vw] border-pink-500 border-[4px]`}>
            <Image src={GrowWithUs} className="w-[100%] rounded-[28px]" alt="grow with us" />
          </div>
        </section>

        {/* grow with US section */}

        {/* Download Section on different stores */}

        <div className="text-center pt-[48px] pb-[19px] lg:pb-[412px] bg-white">
          <p
            className="font-semibold text-gray-900 mb-8 lg:text-6xl"
            style={{ fontSize: "calc(48px + (16 * ((100vw - 375px) / 1225)))" }}
          >
            Download for iOS/Android
          </p>
          <div className="flex flex-row justify-center items-center gap-6">
            {" "}
            {/* the two icon's horezontal gaps or sizing */}
            {/* iOS Download Image/Button (Placeholder) */}
            <img src="./appstore.svg" alt="Download on the App Store" className="w-40 h-12" />{" "}
            {/* Example size, adjust as needed */}
            {/* Android Download Image/Button (Placeholder) */}
            <img src="./getitongoogleplay.webp" alt="Get it on Google Play" className="w-40 h-12" />{" "}
            {/* Specified size */}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="px-6 lg:px-12 py-6 bg-white">
        <div className="max-w-6xl mx-auto p-3">
          <div className="flex flex-row justify-center items-center gap-6 mb-12 md:grid md:grid-cols-6 md:gap-2">
            {/* Left Column: Our Story, Meta, Features (visible on all screen sizes) */}
            <div className="flex flex-col gap-y-3 sm:w-1/2 md:contents">
              {/* Our Story */}
              <div>
                <h4 className="font-semibold text-black mb-2 text-xl md:text-base">Our Story</h4>{" "}
                <ul className="space-y-1 text-gray-400 text-xs sm:text-sm hidden md:block">
                  {" "}
                  <li>
                    <a href="#" className="hover:text-black transition-colors">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-black transition-colors">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-black transition-colors">
                      Jobs
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-black transition-colors">
                      News
                    </a>
                  </li>
                </ul>
              </div>
              {/* Meta */}
              <div>
                <h4 className="font-semibold text-black mb-2 text-xl md:text-base">Meta</h4>{" "}
                <ul className="space-y-1 text-gray-400 text-xs sm:text-sm hidden md:block">
                  {" "}
                  <li>
                    <a href="#" className="hover:text-black transition-colors">
                      Guidelines
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-black transition-colors">
                      Support
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-black transition-colors">
                      Safety
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-black transition-colors">
                      Tips
                    </a>
                  </li>
                </ul>
              </div>
              {/* Features */}
              <div>
                <h4 className="font-semibold text-black mb-2 text-xl md:text-base">Features</h4>{" "}
                <ul className="space-y-1 text-gray-400 text-xs sm:text-sm hidden md:block">
                  {" "}
                  <li>
                    <a href="#" className="hover:text-black transition-colors">
                      Documentation
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-black transition-colors">
                      API
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-black transition-colors">
                      Tools
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-black transition-colors">
                      Resources
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column: safety and Threads (visible on all screen sizes) */}
            <div className="flex flex-col gap-y-3 sm:w-1/2 md:contents">
              {/* Safety */}
              <div>
                <h4 className="font-semibold text-black mb-2 text-xl md:text-base">safety</h4>{" "}
                <ul className="space-y-1 text-gray-400 text-xs sm:text-sm hidden md:block">
                  {" "}
                  <li>
                    <a href="#" className="hover:text-black transition-colors">
                      Privacy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-black transition-colors">
                      Terms
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-black transition-colors">
                      Cookies
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-black transition-colors">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              {/* Threads */}
              <div>
                <h4 className="font-semibold text-black mb-2 text-xl md:text-base">Threads</h4>{" "}
                <ul className="space-y-1 text-strong-black text-xs sm:text-sm hidden md:block">
                  {" "}
                  <li>
                    <a href="#" className="hover:text-black transition-colors">
                      Edits <img src="./right-up.png" className="inline-block w-4 h-4" alt="edit icon" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-black transition-colors">
                      Business
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-black transition-colors">
                      Creators
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Developers (hidden below md) */}
            <div className="hidden md:block md:col-span-1">
              {" "}
              {/* Hide on mobile, occupy one grid column on md and up */}{" "}
              <h4 className="font-semibold text-black mb-4">Developers</h4>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <a href="#" className="hover:text-black transition-colors">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black transition-colors">
                    API
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black transition-colors">
                    Tools
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black transition-colors">
                    Resources
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex justify-center mt-12">
            <div className="flex gap-4">
              <img src="./instagram.png" alt="Instagram" className="w-10 h-10 lg:w-7 lg:h-7" />
              <img src="./facebook.png" alt="Facebook" className="w-10 h-10 lg:w-7 lg:h-7" />
              <img src="./threads.png" alt="Threads" className="w-10 h-10 lg:w-7 lg:h-7" />
              <img src="./youtube.png" alt="YouTube" className="w-10 h-10 lg:w-7 lg:h-7" />
              <img src="./twitter.png" alt="Twitter" className="w-10 h-10 lg:w-7 lg:h-7" />
              <img src="./linkedin.png" alt="LinkedIn" className="w-10 h-10 lg:w-7 lg:h-7" />
            </div>
          </div>{" "}
          <div className=" ">
            <div className="flex justify-center  mt-20  gap-6  text-gray-400  text-xs">
              <p>English(US)</p>

              <p>Instagram from Meta</p>
              <p>API</p>
              <p>Privacy</p>
              <p>Terms</p>
              <p>Sitemaps</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
