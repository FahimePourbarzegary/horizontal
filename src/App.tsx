import { useState } from "react";
import logo from "./assets/images/logo.svg";
function App() {
  return (
    <div className=" bg-gradient-to-b  from-[#92EAE5] to-[#FFFFDB] p-10 ">
      {/*parallax scrolling | hero section*/}
      <section>
        {/* navbar section */}
        <nav className=" flex flex-col md:flex-row gap-4 justify-between items-center ">
          <div className="flex items-center ">
            <img src={logo} alt="logo" className="w-16 md:w-full" />{" "}
            <h1 className="ml-4 text-xl font-bold md:text-5xl">HORIZON</h1>
          </div>
          <div>
            <ul className="flex items-center gap-14  text-3xl ">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Experience</a>
              </li>
              <button className="border-2 rounded-full border-[#083649] px-2 md:px-8 md:py-5 font-medium">
                Book A session
              </button>
            </ul>
          </div>
        </nav>
      </section>
    </div>
  );
}

export default App;
