/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { NavLink } from "react-router-dom";
import { RiMenu2Line } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

const Navbar = ({ dark, setDark }) => {
  const [open, setOpen] = useState(false);

  const links = (
    <>
      <NavLink className={"hover:text-sky-300 transition-colors duration-100 font-semibold"}>
        <button className="uppercase">Home</button>
      </NavLink>{" "}
      <br />
      <NavLink className={"hover:text-sky-300 transition-colors duration-100 font-semibold"}>
        <button className="uppercase">About Me</button>
      </NavLink>{" "}
      <br />
      <NavLink className={"hover:text-sky-300 transition-colors duration-100 font-semibold"}>
        <button className="uppercase">Skills</button>
      </NavLink>{" "}
      <br />
      <NavLink className={"hover:text-sky-300 transition-colors duration-100 font-semibold"}>
        <button className="uppercase">Projects</button>
      </NavLink>{" "}
      <br />
      <NavLink className={"hover:text-sky-300 transition-colors duration-100 font-semibold"}>
        <button className="uppercase">Contact</button>
      </NavLink>{" "}
      <br />
    </>
  );

  return (
    <div className="">
      <div
        className={`flex items-center justify-between container mx-auto py-2`}
      >
        <div>
          <NavLink to={'/'}>
          <img className="w-[55px] cursor-pointer" src="../../../public/Logo-2.png" alt="" />
          </NavLink>
        </div>
        <div className="hidden md:flex items-center gap-6">
          {links}
          <a href="https://drive.google.com/uc?export=download&id=1YhQCCEx1ym9FEk0woVHXHWmUNZGhNcZF" download={"Mojahidul Islam's Resume"}>
          <button
            id="button-rs"
            className="items-center text-center font-semibold"
          >
            Resume
          </button>
          </a>
          <div className="">
            {dark ? (
              <button  onClick={() => setDark(false)}>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  class="text-secondary cursor-pointer"
                  height="25"
                  width="25"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M12 9c1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3 1.35-3 3-3m0-2c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58a.996.996 0 00-1.41 0 .996.996 0 000 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37a.996.996 0 00-1.41 0 .996.996 0 000 1.41l1.06 1.06c.39.39 1.03.39 1.41 0a.996.996 0 000-1.41l-1.06-1.06zm1.06-10.96a.996.996 0 000-1.41.996.996 0 00-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36a.996.996 0 000-1.41.996.996 0 00-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"></path>
                </svg>
              </button>
            ) : (
              <button  onClick={() => setDark(true)}>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 16 16"
                  height="19"
                  width="19"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"></path>
                  <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"></path>
                </svg>
              </button>
            )}
          </div>
        </div>
        <div className="block md:hidden">
          {open ? (
            <IoMdClose
              onClick={() => setOpen(false)}
              className="text-xl font-semibold cursor-pointer"
            ></IoMdClose>
          ) : (
            <RiMenu2Line
              onClick={() => setOpen(true)}
              className="text-xl font-semibold cursor-pointer"
            ></RiMenu2Line>
          )}
        </div>
      </div>
      <div className="relative z-50">
      {open ? (
        <div className="md:hidden absolute bg-white right-0 flex justify-end items-end">
          <div className="w-[150px] rounded-lg shadow-xl py-4 px-4">
            {links}
          </div>
        </div>
      ) : (
        ""
      )}
      </div>
    </div>
  );
};

export default Navbar;
