"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, Download, Play, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isScrollingUp = prevScrollPos > currentScrollPos;

      setVisible(isScrollingUp || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <div className="min-h-screen bg-white">
      {/* Header - now only visible when scrolling up */}
      <header
        className={`flex items-center justify-between p-6 lg:px-80 sticky top-0 bg-white/80 backdrop-blur-sm z-50 transition-transform duration-300 ${
          visible ? "translate-y-0" : "-translate-y-full"
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
  <span className="text-xl font-medium">Log in</span>
  <img
    src="./insta-logo.png"
    alt="Instagram Logo"
    className="w-16 h-16 object-contain p-4" // Adjusted size & object-fit
  />
</div>
      </header>

      {/* Hero Section */}
      <section className="px-6 lg:px-12 py-12 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center max-w-7xl mx-auto">
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-7xl xl:text-8xl font-normal leading-tight tracking-tight text-black">
              Bringing you closer to the people
            </h1>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-full overflow-hidden max-w-md mx-auto lg:ml-auto lg:mr-0">
              <Image 
                src="https://scontent.fdac177-1.fna.fbcdn.net/v/t39.8562-6/387722956_7378458712178487_1775710954647878208_n.webp?_nc_cat=106&ccb=1-7&_nc_sid=f537c7&_nc_ohc=4hjeR8K_VvUQ7kNvwFxTAYP&_nc_oc=AdmlJ5_LKGZT0apbIK9mmkBGaGfdixp2ug--COAstNrTaLCIfoWNoWyS5hwVDfJLi9Q&_nc_zt=14&_nc_ht=scontent.fdac177-1.fna&_nc_gid=6JmaC_BnseBvQAvQDTmtog&oh=00_AfKO3-H4pJFQBhYIaUgDvsvjH9O91kEufxDZV-TkTo2Bcw&oe=6837EAE0"
                alt="Person with orange hair in pink checkered top making hand gestures"
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mt-24 lg:mt-32 grid lg:grid-cols-2 gap-12 lg:gap-24 items-end max-w-7xl mx-auto">
          <div className="relative">
            <div className="aspect-square max-w-sm">
              <Image
                src="https://scontent.fdac177-1.fna.fbcdn.net/v/t39.8562-6/387146343_617196437155293_2327283482117678195_n.webp?_nc_cat=108&ccb=1-7&_nc_sid=f537c7&_nc_ohc=F65q_gEycyUQ7kNvwFX6Q6a&_nc_oc=Adm0wljbkCdiUxjlJDFoPrIE_Thzw3qi1XdEEDUltKbdbYmLpU7G9HNaWMrT0CPfXqs&_nc_zt=14&_nc_ht=scontent.fdac177-1.fna&_nc_gid=6JmaC_BnseBvQAvQDTmtog&oh=00_AfJb_Rn2fDdKgoz8FwqGtg3wiiahnQH8z52h2egEmr-rBw&oe=6837D1D2"
                alt="Partial view of person"
                width={300}
                height={300}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>

          <div className="lg:text-right">
            <h2 className="text-5xl lg:text-7xl xl:text-8xl font-normal leading-tight tracking-tight">
              <span className="text-pink-500">and things</span>
              <br />
              <span className="text-violet-500">you love</span>
            </h2>
          </div>
        </div>
      </section>

      {/* Sticky Transition Section */}
      <div className="relative">
        {/* Sticky Container */}
        <div className="sticky top-0 h-screen overflow-hidden">
          <div className="relative h-full">
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src="https://scontent.fdac177-1.fna.fbcdn.net/v/t39.8562-6/387041588_1173432146946550_7707432751021130960_n.webp?_nc_cat=110&ccb=1-7&_nc_sid=f537c7&_nc_ohc=lkz_v4IUMMkQ7kNvwE2t49x&_nc_oc=AdnDLRTyqS4Vq0nmhLPjU_EXjr2ISKH2gvZ75hkouD52QqdewHhgXOcUIjRxqdsDGEU&_nc_zt=14&_nc_ht=scontent.fdac177-1.fna&_nc_gid=6JmaC_BnseBvQAvQDTmtog&oh=00_AfK4YM2JaFvqezbinayiaJkqxi90QwOpVOiQz5RoDetfVw&oe=6837EF3B"
                alt="Community of diverse people using Instagram"
                width={1920}
                height={1080}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40"></div>
            </div>

            {/* Sliding Text Content */}
            <div className="relative z-10 h-full flex items-center justify-center">
              <div className="text-center text-white px-6 max-w-4xl mx-auto">
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
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white">
              <div className="flex flex-col items-center gap-2">
                <div className="w-px h-12 bg-white/50"></div>
                <div className="w-2 h-2 rounded-full bg-white animate-bounce"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Spacer for scroll effect */}
        <div className="h-screen"></div>
      </div>

      {/* Community Safety Section */}
      <section className="px-6 lg:px-12 py-24 lg:py-32 bg-white relative z-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <h3 className="text-4xl lg:text-6xl font-normal leading-tight text-black mb-8">
                Building a safer community
              </h3>
              <p className="text-s text-gray-600 leading-relaxed mb-8 ">
                We're working to make Instagram a place where everyone feels safe to express themselves. Our community
                guidelines help create a positive environment for all users.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-pink-500"></div>
                  <span className="text-lg text-gray-700">Anti-bullying measures</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-pink-500"></div>
                  <span className="text-lg text-gray-700">Content moderation</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-pink-500"></div>
                  <span className="text-lg text-gray-700">Mental health resources</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-pink-500"></div>
                  <span className="text-lg text-gray-700">Privacy controls</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100">
                <Image
                  src="/placeholder.svg?height=500&width=500"
                  alt="Instagram safety features interface"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-6 lg:px-12 py-24 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 lg:gap-24">
            <div className="text-center">
              <div className="text-6xl lg:text-7xl font-light text-black mb-4">2B+</div>
              <p className="text-lg text-gray-600">Monthly active users</p>
            </div>
            <div className="text-center">
              <div className="text-6xl lg:text-7xl font-light text-black mb-4">500M+</div>
              <p className="text-lg text-gray-600">Daily active users</p>
            </div>
            <div className="text-center">
              <div className="text-6xl lg:text-7xl font-light text-black mb-4">95M+</div>
              <p className="text-lg text-gray-600">Photos shared daily</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 lg:px-12 py-24 lg:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-24 items-center mb-32">
            <div>
              <h3 className="text-4xl lg:text-6xl font-normal leading-tight text-black mb-8">Share your story</h3>
              <p className="text-xl text-gray-600 leading-relaxed">
                From everyday moments to life's highlights, share it all with your friends and followers. Express
                yourself with photos, videos, Stories, and Reels.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-br from-purple-100 to-pink-100">
                <Image
                  src="/placeholder.svg?height=500&width=400"
                  alt="Instagram Stories interface"
                  width={400}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-24 items-center mb-32">
            <div className="lg:order-2">
              <h3 className="text-4xl lg:text-6xl font-normal leading-tight text-black mb-8">Discover new interests</h3>
              <p className="text-xl text-gray-600 leading-relaxed">
                Explore content from creators you love and discover new accounts that share your passions. From cooking
                to travel, find inspiration everywhere.
              </p>
            </div>
            <div className="relative lg:order-1">
              <div className="aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-yellow-100 to-orange-100">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Instagram Explore page"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <h3 className="text-4xl lg:text-6xl font-normal leading-tight text-black mb-8">Connect with friends</h3>
              <p className="text-xl text-gray-600 leading-relaxed">
                Stay in touch with the people who matter most. Send messages, share posts, and keep up with what your
                friends are doing.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-br from-green-100 to-blue-100">
                <Image
                  src="/placeholder.svg?height=500&width=400"
                  alt="Instagram Direct messages"
                  width={400}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="px-6 lg:px-12 py-24 lg:py-32 bg-white-500 text-white">
        <div className="max-w-7xl mx-auto text-center">
         <p className="text-6xl text-gray-800 mb-12  mx-auto">
       
      
          Download for iOS/Android.
          </p>
 
 <div className="px-6">


<div className ="w-full p-4 text-center bg-white  rounded-lg shadow-sm sm:p-8 dark:bg-gray-800 dark:border-gray-700">
    {/* <h5 className ="mb-2 text-3xl font-bold text-gray-900 dark:text-white">Work fast from anywhere</h5> */}
    {/* <p className ="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">Stay up to date and move work forward with Flowbite on iOS & Android. Download the app today.</p> */}
    <div className ="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
        <a href="#" className ="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
            <svg className ="me-3 w-7 h-7" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="apple" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path></svg>
            <div className ="text-left rtl:text-right">
                <div className ="mb-1 text-xs">Download on the</div>
                <div className ="-mt-1 font-sans text-sm font-semibold">Mac App Store</div>
            </div>
        </a>
        <a href="#"className ="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
            <svg className ="me-3 w-7 h-7" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google-play" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"></path></svg>
            <div className ="text-left rtl:text-right">
                <div className ="mb-1 text-xs">Get in on</div>
                <div className ="-mt-1 font-sans text-sm font-semibold">Google Play</div>
            </div>
        </a>
    </div>
</div>

 </div>


         
        </div>
      </section>

      {/* Footer */}

      
      <footer className="px-6 lg:px-12 py-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-6 gap-6 mb-12">
            <div>
              <h4 className="font-semibold text-black mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400  text-xs">
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
            <div>
              <h4 className="font-semibold text-black mb-4">Community</h4>
              <ul className="space-y-2 text-gray-400  text-xs">
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
            <div>
              <h4 className="font-semibold text-black mb-4">Developers</h4>
              <ul className="space-y-2 text-gray-400  text-xs">
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
          <div>
              <h4 className="font-semibold text-black mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400  text-xs">
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

            


            <div >
              <h4 className="font-semibold text-black mb-4">Threads</h4>
              <ul className="space-y-2 text-strong-black">
                <li>
                  <a href="#" className="hover:text-black transition-colors">
                    Edits <img src="./right-up.png" className="inline-block w-4 h-4" alt="edit icon"/></a>
                    {/* <a href="https://www.flaticon.com/free-icons/arrows" title="arrows icons"></a> */}
                  
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
                <li>
                 
                </li>
              </ul>
            </div>



            <div >
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
         
         <div className=" flex gap-4 w-9 h-9 mt-12 mb-20"> 
               
               <div>  <img src="./instagram.png" alt="" /> 
                      <img src="./threads.png" alt="" /> </div>
              
          
            </div>
        
        </div>
      </footer>
    </div>
    
  )
}
