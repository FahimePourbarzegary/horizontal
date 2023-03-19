import React, { useEffect, useState } from "react";
import logo from "./assets/images/logo.svg";
import mountain from "./assets/images/m1.svg";
import mountain2 from "./assets/images/m2.svg";
import sun from "./assets/images/sun.svg";
import vilage from "./assets/images/vilage.svg";
import front from "./assets/images/front.svg";
import summer from "./assets/images/summer.svg";
import night from "./assets/images/night.svg";
import fresh from "./assets/images/fresh.svg";
function App() {
  let sunElement = document.getElementById("sun");
  let mountainElement = document.getElementById("mountain");
  let mountain2Element = document.getElementById("mountain2");
  let village = document.getElementById("village");
  let titleElement = document.getElementById("titleSection");
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsActive(true);
    }, 200);
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      var scrollY = window.scrollY;
      if (titleElement) titleElement.style.top = scrollY * 1.2 + "px";
      if (sunElement) {
        sunElement.style.right = 348 + scrollY * 0.2 + "px";
        sunElement.style.top = scrollY * 0.5 + "px";
      }
      if (mountainElement) mountainElement.style.top = scrollY * 0.5 + "px";
      if (mountain2Element) mountain2Element.style.top = scrollY * 0.2 + "px";
      if (village) village.style.top = -128 + scrollY * 0.2 + "px";
    });
  }, [titleElement, sunElement, mountain2Element]);
  return (
    <div className=" overflow-x-hidden transition-all">
      <div className=" bg-gradient-to-b  from-[#92EAE5] to-[#FFFFDB] -z-[-100000] w-screen h-[36rem] md:h-screen overflow-hidden">
        {/*parallax scrolling | hero section*/}
        <section>
          {/* navbar section */}
          <nav className=" flex flex-col md:flex-row gap-4 justify-between items-center p-10 ">
            <div className="flex items-center ">
              <img src={logo} alt="logo" className="w-16 md:w-full" />{" "}
              <h1 className="ml-4 text-xl font-bold md:text-5xl">HORIZON</h1>
            </div>
            <div>
              <ul className="flex items-center gap-14  text-3xl ">
                <li className="hover:cursor-pointer hover:text-black">
                  <a href="#">Home</a>
                </li>
                <li className="hover:cursor-pointer hover:text-black">
                  <a href="#">About Us</a>
                </li>
                <li className="hover:cursor-pointer hover:text-black">
                  <a href="#">Experience</a>
                </li>
                <button className="border-2 rounded-full border-[#083649] py-2 px-4 md:px-8 md:py-5 font-medium">
                  Book A session
                </button>
              </ul>
            </div>
          </nav>
        </section>

        {/* Parallax scrolling */}
        <section className="relative ">
          <div
            className={`  flex-col text-center  absolute z-40 w-full gap-14  ${
              isActive ? "flex" : "hidden"
            } duration-300`}
            id="titleSection"
          >
            <h1 className=" text-xl md:text-8xl px-96 uppercase font-bold">
              Lets open new horizon’s together
            </h1>
            <span className=" px-72  text-3xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </span>
            <button
              className=" bg-[#083649] text-white font-bold rounded-xl  w-96 py-9 self-center text-4xl"
              id="button"
            >
              Get Started
            </button>
          </div>
          <div className="relative h-screen w-screen">
            {" "}
            <img
              src={mountain}
              alt="mountain"
              className=" z-10 absolute top-14"
              id="mountain"
            />
            <img
              src={mountain2}
              alt="mountain2"
              className=" absolute z-10 top-8"
              id="mountain2"
            />
            <img
              src={sun}
              alt="sun"
              className="absolute right-96  w-72  h-72 z-[1]  md:right-[36rem] "
              id="sun"
            />
            <img
              src={vilage}
              alt="village"
              className=" absolute z-20 -top-32"
              id="village"
            />
            <img
              src={front}
              alt="front"
              className=" z-50 absolute  top-20 md:top-60"
            />
          </div>
        </section>
      </div>
      {/* footer */}
      <section className="  bg-[#083649] text-white overflow-hidden w-screen  pt-32 flex flex-col">
        <div className=" flex flex-col text-center  w-full gap-14  ">
          <h1 className=" text-xl md:text-6xl px-52 uppercase font-bold">
            Discover Our Experience
          </h1>
          <span className=" px-72  text-3xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </span>
        </div>
        <div className=" grid md:grid-cols-3 justify-center items-center w-full px-10 py-24 gap-10">
          {/*item  */}
          <div className="self-center hover:cursor-pointer hover:scale-105 transition-all duration-500 rounded-xl flex flex-col justify-center items-center p-2 ">
            <img src={summer} alt="summer" className="" />{" "}
            <div className="p-8 flex flex-col gap-4">
              <h1 className=" text-4xl font-bold">Summer</h1>
              <span className=" text-2xl ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit
              </span>
            </div>
          </div>{" "}
          {/*item  */}
          <div className="self-center hover:cursor-pointer hover:scale-105 transition-all duration-500 rounded-xl flex flex-col justify-center items-center p-2">
            <img src={night} alt="night" className="" />{" "}
            <div className="p-8 flex flex-col gap-4">
              <h1 className=" text-4xl font-bold">Night</h1>
              <span className=" text-2xl ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit
              </span>
            </div>
          </div>{" "}
          {/*item  */}
          <div className=" self-center hover:cursor-pointer hover:scale-105 transition-all duration-500 rounded-xl flex flex-col justify-center items-center p-2">
            <img src={fresh} alt="fresh" className=" transition-all " />{" "}
            <div className="p-8 flex flex-col gap-4">
              <h1 className=" text-4xl font-bold">Fresh</h1>
              <span className=" text-2xl ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit
              </span>
            </div>
          </div>{" "}
        </div>
      </section>
    </div>
  );
}

export default App;
