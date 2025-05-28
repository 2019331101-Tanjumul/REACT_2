"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Menu, Download, Play, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

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
      const section = carouselRef.current.closest('section');
      if (!section) return;

      const sectionRect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Calculate vertical scroll progress within the section (0 to 1)
      const scrollProgress = Math.max(0, Math.min(1, (viewportHeight - sectionRect.top) / (sectionRect.height)));

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
    <div className="min-h-screen bg-white font-helvetica">
      <style>{style}</style>
      <style jsx>{`
        .font-helvetica {
          font-family: helvetica, sans-serif;
        }
      `}</style>
      {/* Header */}
      <header
        className={`flex items-center justify-between p-6 lg:px-80 sticky top-0 bg-white/80 backdrop-blur-sm z-50 transition-transform duration-300 ${visible ? "translate-y-0" : "-translate-y-full"
          }`}
      >
        <Button variant="ghost" size="icon" className="lg:hidden">
          <Menu className="h-6 w-6" />
        </Button>

        <div className="hidden lg:block">
          <Button variant="ghost" size="icon">
            <Menu className="h-10 w-16" />
          </Button>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-xl font-medium hidden lg:block">Log in</span>
          <img
            src="./insta-logo.png"
            alt="Instagram Logo"
            className="w-16 h-16 object-contain p-4"
          />
        </div>
      </header>

      {/* Hero Section */}
      <section className="px-6 lg:px-12 py-12 lg:py-14">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24  max-w-7xl mx-auto">
          <div className="space-y-8 ml-4 lg:ml-0 lg:hidden">
            <h1 className="text-5xl lg:text-7xl xl:text-8xl font-normal leading-tight tracking-tight text-black">
              Bringing you closer to the <br/> people
            </h1>
          </div>

          <div className="relative">
            <div className=" overflow-hidden w-40 ml-auto max-w-md lg:w-auto lg:ml-auto lg:mr-0 lg:max-w-md border-4 border-white/20 ">
              <Image
                src="/orange-haired.webp"
                alt="Person with orange hair in pink checkered top making hand gestures"
                width={400}
                height={400}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
              {/* Optional gradient overlay */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-transparent via-transparent to-black/20 pointer-events-none" />
            </div>
          </div>
        </div>

        <div className="lg:text-right mt-3 sm:mt-0 ml-4 lg:ml-0 lg:hidden">
          <h2 className="text-3xl lg:text-7xl xl:text-8xl font-normal leading-tight tracking-tight">
            <span className="text-pink-500">and things</span>
            <br/>
            <span className="text-violet-500">you love</span>
          </h2>
        </div>

        <div className="mt-24 lg:mt-42 grid lg:grid-cols-2 gap-12 lg:gap-24 items-end max-w-7xl mx-auto">
          <div className="relative">
            <div className="aspect-square w-40 mr-auto max-w-sm lg:w-auto lg:mr-0 lg:max-w-sm">
              <Image
                src="/white-tshirt-man.webp"
                alt="Partial view of person"
                width={548.56}
                height={738.06}
                className="w-full h-full object-cover rounded-lg"
              />

              <div className="mt-20 py-16 flex items-center justify-center">
                <div className="animate-pulse animate-bounce">
                  <img
                    src="./arrow-down.png"
                    alt="Scroll down"
                    width={80}
                    height={80}
                    className="w-20 h-20 filter drop-shadow-xl hover:scale-125 transition-all duration-300"
                  />
                </div>
              </div>

            </div>
          </div>

          {/* <div className="lg:text-right">
            <h2 className="text-5xl lg:text-7xl xl:text-8xl font-normal leading-tight tracking-tight">
              <span className="text-pink-500">and things</span>
              <br />
              <span className="text-violet-500">you love</span>
            </h2>
          </div> */}
        </div>
        <div className="relative">
          <div className="aspect-[16/9] overflow-hidden max-w-md mx-auto my-56  lg:mx-0 lg:ml-auto">
            <Image
              src="./landscapephotoforInsta.webp"
              alt="Three girls taking a photo from above in a landscape"
              width={800}
              height={451.92}
              className="w-full h-full object-cover" />

          </div>
        </div>

      </section>

      <div className="relative h-[170vh] overflow-hidden">
        {/* Sticky container that holds all parallax elements */}
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          {/* Background Layer (moves slowest) */}
          <div
            className="absolute inset-0"
            style={{
              transform: `translateY(${scrollY * 0.05}px)`,
              transition: "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
              willChange: "transform"
            }}
          >
            {/* Inner container for rotation */}
            <div className="absolute inset-0" style={{ transform: 'rotate(90deg)' }}>
              <Image
                src="/community-background.webp"
                alt="Community background"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="absolute inset-0 bg-black/40"></div>
          </div>

          {/* Mid Layer (moves medium speed) */}
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{
              transform: `translateY(${scrollY * 0.3}px)`,
              transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
              willChange: "transform"
            }}
          >
            <div className="relative w-full h-full">
              {/* You can add additional visual elements here that move at medium speed */}
            </div>
          </div>

          {/* Fixed Content Layer (doesn't move) */}
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="text-center text-white px-6 max-w-2xl mx-auto">
              <h3 className="text-4xl lg:text-6xl xl:text-7xl font-normal leading-tight mb-8">
                {"We're committed to fostering a safe and supportive community for everyone"}
              </h3>
              <div className="flex items-center justify-center gap-4 text-xl lg:text-2xl">
                <span>Community</span>
                <ArrowRight className="h-6 w-6 lg:h-8 lg:w-8" />
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white z-20">
            <div className="flex flex-col items-center gap-2">
              <div className="w-px h-12 bg-white/50"></div>
              <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-white animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer to ensure smooth transition */}
      <div className="h-32"></div>

      {/* START: New Sliding Section - Vertical scroll controls horizontal slide (Option B) */}
      {/* This section is intentionally tall to allow vertical scroll to control horizontal slides */}
      <section className="px-6 lg:px-12 py-24 lg:py-32 bg-white min-h-[160vh]"> {/* Section tall enough for vertical scroll */}
        <div className="max-w-4xl mx-auto"> {/* Center content area */}
          {/* Slider Content Area - Overflow hidden to only show one slide horizontally at a time */}
          <div className="overflow-hidden"> {/* Hide horizontal overflow */}
            {/* Flex container that holds all slides and moves horizontally based on currentSlide */}
            <div
              ref={carouselRef} // Ref attached to the horizontally moving flex container
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }} // Controlled by state from vertical scroll
            >
              {/* Content for each slide (each slide is a flex item in the row) */}
              {[...Array(5)].map((_, index) => (
                <div key={index} className="w-full flex-shrink-0 flex flex-col lg:flex-row items-center lg:justify-center px-16 py-12 lg:py-0 gap-25"> {/* Layout for text left / media right within the slide */}
                  {/* Text Content (Left Column within slide) */}
                  <div className="w-full lg:w-1/2 text-center lg:text-left"> {/* Removed flex and alignment for dots */}
                    <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900"> {/* Reverted mb to mb-4 */}
                      {index === 0 ? "Explore What's New" : index === 1 ? "Discover Reels" : index === 2 ? "Watch Stories" : index === 3 ? "Have a conversation" : "Find something new"}
                    </h2>
                    <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
                      {index === 0 ? "Our continuously evolving features empower you to express yourself in new ways." : index === 1 ? "Create, share, and watch short, entertaining videos on Instagram." : index === 2 ? "Check out Stories and live videos from your favorite people." : index === 3 ? "Send messages, photos and videos to a friend or select group of people." : "Discover content and creators based on your interests."}
                    </p>
                  </div>
                  {/* Media Container (Right Column within slide) */}
                  <div className="w-full lg:w-1/2 max-w-md lg:max-w-none">
                    {/* Conditional rendering based on index and file type */}
                    {index === 0 ? (
                      <Image
                        src="/slide-1.webp"
                        alt="Explore What's New visual"
                        width={500} // Example width, adjust as needed
                        height={300} // Example height, adjust as needed
                        objectFit="cover"
                        className="rounded-lg shadow-md"
                      />
                    ) : index === 1 ? (
                      <video
                        src="/slide-2.mp4"
                        controls
                        loop
                        muted
                        autoPlay
                        playsInline
                        className="rounded-lg shadow-md w-full h-auto object-cover"
                      />
                    ) : index === 2 ? (
                      <video
                        src="/slide-3.mp4"
                        controls
                        loop
                        muted
                        autoPlay
                        playsInline
                        className="rounded-lg shadow-md w-full h-auto object-cover"
                      />
                    ) : index === 3 ? (
                      <video
                        src="/slide-4.mp4"
                        controls
                        loop
                        muted
                        autoPlay
                        playsInline
                        className="rounded-lg shadow-md w-full h-auto object-cover"
                      />
                    ) : (
                      <Image
                        src="/slide-5.png"
                        alt="Find something new visual"
                        width={500} // Example width, adjust as needed
                        height={300} // Example height, adjust as needed
                        objectFit="cover"
                        className="rounded-lg shadow-md"
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Navigation Dots Container - Below the slides */}
          <div className="flex justify-center mt-8 space-x-2"> {/* Centered below slides */}
            {[...Array(5)].map((_, index) => (
              <button
                key={`dot-${index}`}
                className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-blue-500' : 'bg-gray-300'
                  } focus:outline-none transition-colors`}
                onClick={() => {
                  // Scroll the window vertically to the corresponding part of the section
                  if (carouselRef.current) {
                    const section = carouselRef.current.closest('section');
                    if (section) {
                      const sectionTop = section.offsetTop;
                      const sectionHeight = section.offsetHeight;
                      // Calculate target scroll based on slide index - maps 0-4 index to a vertical scroll position within the section
                      // Adjust the targetScroll calculation slightly to center the section in the viewport if possible
                      const targetScroll = sectionTop + (sectionHeight / 5) * index - window.innerHeight / 3;
                      window.scrollTo({
                        top: targetScroll,
                        behavior: 'smooth' // Smooth scrolling effect
                      });
                    }
                  }
                }}
              ></button>
            ))}
          </div>
        </div>
      </section>
      {/* END: New Sliding Section */}


      {/* New Two-Image Section - Layout like the original reference image */}
      <section className="px-6 lg:px-12 py-12 lg:py-20 bg-white relative overflow-hidden"> {/* Reduced top and bottom padding */}
        <div className="max-w-7xl mx-auto h-[500px] lg:h-[600px] flex flex-col lg:flex-row gap-4"> {/* Container with fixed height for positioning context */}
          {/* First Image (Left) - Positioned relatively within the section */}
          <div className="relative w-full lg:w-2/3 h-1/2 lg:h-full"> {/* Occupies left space */}
            <Image
              src="/cowboy hat.webp"
              alt="Image resembling man with cowboy hat"
              fill // Fill the parent div
              className="object-cover rounded-lg shadow-md"
            />
          </div>

          {/* Second Image (Top Right) - Positioned absolutely relative to the section */}
          <div className="absolute top-1/4 right-4 lg:right-16 w-1/2 lg:w-1/4 h-1/2 lg:h-2/3"> {/* Positioned top right */}
            {/* Note: Using the same path, please replace with the actual path for the second image if different */}
            <Image
              src="/girl-toung.webp"
              alt="Image resembling woman with towel"
              fill // Fill the parent div
              className="object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>



      {/* grow with US section */}
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
        <div className="flex flex-col items-center gap-12 lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1 text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Grow with us
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-13">
              Share and grow your brand with our diverse, global community.
            </p>
            <div className="flex items-center gap-2 ml-0">
              <a
                href="#"
                className="flex items-center text-4xl font-semibold text-black-600 py-10"
              >
                Business
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-4 h-10 w-10"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          {/* Image on the right */}
          <div className="order-1 lg:order-2 justify-self-end">
            <div className="rounded-xl overflow-hidden w-[173.59px] h-[379.44px] border border-red-500 mx-auto lg:w-[282.97px] lg:h-[617.01px] lg:border-2 lg:border-red-500">
              <Image
                src="./grow-with-us.jpg"
                alt="Business growth illustration"
                width={685}
                height={151}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Download Section on different stores */}

      <div className="text-center pt-[48px] pb-[19px] lg:pb-[412px]">
        <p className="font-semibold text-gray-900 mb-8 lg:text-6xl" style={{ fontSize: 'calc(48px + (16 * ((100vw - 375px) / 1225)))' }}>Download for iOS/Android</p>
        <div className="flex flex-row justify-center items-center gap-6"> {/* the two icon's horezontal gaps or sizing */}
          {/* iOS Download Image/Button (Placeholder) */}
          <img src="./appstore.svg" alt="Download on the App Store" className="w-40 h-12" /> {/* Example size, adjust as needed */}

          {/* Android Download Image/Button (Placeholder) */}
          <img src="./getitongoogleplay.webp" alt="Get it on Google Play" className="w-40 h-12" /> {/* Specified size */}
        </div>
      </div>

      {/* Spacer after Download Section */}
      <div className="h-[112px] lg:h-102"></div>

      {/* Footer */}
      <footer className="px-6 lg:px-12 py-6">
        <div className="max-w-6xl mx-auto p-3">
          <div className="flex flex-row justify-center items-center gap-6 mb-12 md:grid md:grid-cols-6 md:gap-2">
            {/* Left Column: Our Story, Meta, Features (visible on all screen sizes) */}
            <div className="flex flex-col gap-y-3 sm:w-1/2 md:contents">
              {/* Our Story */}
              <div>
                <h4 className="font-semibold text-black mb-2 text-xl md:text-base">Our Story</h4>                <ul className="space-y-1 text-gray-400 text-xs sm:text-sm hidden md:block">                  <li><a href="#" className="hover:text-black transition-colors">About</a></li>
                  <li><a href="#" className="hover:text-black transition-colors">Blog</a></li>
                  <li><a href="#" className="hover:text-black transition-colors">Jobs</a></li>
                  <li><a href="#" className="hover:text-black transition-colors">News</a></li>
                </ul>
              </div>
              {/* Meta */}
              <div>
                <h4 className="font-semibold text-black mb-2 text-xl md:text-base">Meta</h4>                <ul className="space-y-1 text-gray-400 text-xs sm:text-sm hidden md:block">                  <li><a href="#" className="hover:text-black transition-colors">Guidelines</a></li>
                  <li><a href="#" className="hover:text-black transition-colors">Support</a></li>
                  <li><a href="#" className="hover:text-black transition-colors">Safety</a></li>
                  <li><a href="#" className="hover:text-black transition-colors">Tips</a></li>
                </ul>
              </div>
              {/* Features */}
              <div>
                <h4 className="font-semibold text-black mb-2 text-xl md:text-base">Features</h4>                <ul className="space-y-1 text-gray-400 text-xs sm:text-sm hidden md:block">                  <li><a href="#" className="hover:text-black transition-colors">Documentation</a></li>
                  <li><a href="#" className="hover:text-black transition-colors">API</a></li>
                  <li><a href="#" className="hover:text-black transition-colors">Tools</a></li>
                  <li><a href="#" className="hover:text-black transition-colors">Resources</a></li>
                </ul>
              </div>
            </div>

            {/* Right Column: safety and Threads (visible on all screen sizes) */}
            <div className="flex flex-col gap-y-3 sm:w-1/2 md:contents">
              {/* Safety */}
              <div>
                <h4 className="font-semibold text-black mb-2 text-xl md:text-base">safety</h4>                <ul className="space-y-1 text-gray-400 text-xs sm:text-sm hidden md:block">                  <li><a href="#" className="hover:text-black transition-colors">Privacy</a></li>
                  <li><a href="#" className="hover:text-black transition-colors">Terms</a></li>
                  <li><a href="#" className="hover:text-black transition-colors">Cookies</a></li>
                  <li><a href="#" className="hover:text-black transition-colors">Contact</a></li>
                </ul>
              </div>
              {/* Threads */}
              <div>
                <h4 className="font-semibold text-black mb-2 text-xl md:text-base">Threads</h4>                <ul className="space-y-1 text-strong-black text-xs sm:text-sm hidden md:block">                  <li><a href="#" className="hover:text-black transition-colors">Edits <img src="./right-up.png" className="inline-block w-4 h-4" alt="edit icon" /></a></li>
                  <li><a href="#" className="hover:text-black transition-colors">Business</a></li>
                  <li><a href="#" className="hover:text-black transition-colors">Creators</a></li>
                </ul>
              </div>
            </div>

            {/* Developers (hidden below md) */}
            <div className="hidden md:block md:col-span-1"> {/* Hide on mobile, occupy one grid column on md and up */}              <h4 className="font-semibold text-black mb-4">Developers</h4>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-black transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-black transition-colors">API</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Tools</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Resources</a></li>
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
          </div> <div className=" ">
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
  )
}
