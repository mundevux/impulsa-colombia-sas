"use client";

import { useState } from "react";
import LogoImpulsa from "../assets/Logo_Impulsa_Colombia.png";
import ListOfProjects from "./ListOfProjects";
import Link from "next/link";
import Image from "next/image";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const options = [
    {
      name: "Cerasus Monteblanco",
      link: "/cerasus-monteblanco",
    },
    {
      name: "Cerasus Danubio",
      link: "/cerasus-danubio",
    },
    {
      name: "Ceraus Usme",
      link: "/cerasus-usme",
    },
    {
      name: "Avium Tunja",
      link: "/avium-tunja",
    },
    {
      name: "Prunus Sexta Entrada",
      link: "/prunus-sexta-entrada",
    },
    {
      name: "Cerasus Sexta Entrada",
      link: "/cerasus-sexta-entrada",
    },
    {
      name: "Proyectos en España",
      link: "https://impulsaproyectos.com/",
    },
  ];

  return (
    <header>
      <nav className=" z-20 fixed w-screen bg-shark-900 backdrop-blur-2xl">
        <div className="max-w-7xl mx-auto md:px-12 xl:px-0">
          <div className="flex items-center justify-around lg:justify-between py-2 gap-6 md:py-4 md:gap-0 relative">
            <input
              aria-hidden="true"
              type="checkbox"
              name="toggle_nav"
              id="toggle_nav"
              className="hidden peer"
            ></input>
            <div className="relative z-20 w-full flex justify-between lg:w-max md:px-0">
              <div className="relative flex items-center lg:hidden max-h-10">
                <label
                  role="button"
                  htmlFor="toggle_nav"
                  aria-label="humburger"
                  id="hamburger"
                  className="relative  p-6 -mr-6"
                >
                  <div
                    aria-hidden="true"
                    id="line"
                    className="m-auto h-0.5 w-5 rounded bg-white dark:bg-shark-300 transition duration-300"
                  ></div>
                  <div
                    aria-hidden="true"
                    id="line2"
                    className="m-auto mt-2 h-0.5 w-5 rounded bg-white dark:bg-shark-300 transition duration-300"
                  ></div>
                </label>
              </div>

              <Link
                href="/"
                aria-label="logo"
                className="flex space-x-2 items-center mr-6"
              >
                <div aria-hidden="true" className="flex space-x-1">
                  <Image
                    src={LogoImpulsa}
                    alt="Logo Impulsa Colombia Sas"
                    className=" h-10 lg:h-12"
                    height={48}
                  ></Image>
                </div>
              </Link>
            </div>
            <div
              className="flex-col z-20 flex-wrap gap-6 p-8 rounded-3xl border border-gray-100 bg-shark-900 shadow-2xl shadow-gray-600/10 justify-between invisible opacity-0 translate-y-1  absolute top-full left-0 transition-all duration-300 scale-95 origin-top 
                                lg:relative lg:scale-100 lg:peer-checked:translate-y-0 lg:translate-y-0 lg:flex lg:flex-row lg:items-center lg:gap-0 lg:p-0 lg:bg-transparent lg:w-7/12 lg:visible lg:opacity-100 lg:border-none
                                peer-checked:scale-100 peer-checked:opacity-100 peer-checked:visible lg:shadow-none 
                                dark:shadow-none dark:bg-gray-800 dark:border-gray-700 w-full"
            >
              <div className="text-gray-600 dark:text-gray-300 lg:pr-4 lg:w-auto lg:pt-0">
                <ul className="tracking-wide font-medium lg:text-sm flex-col flex lg:flex-row gap-6 lg:gap-0">
                  <li>
                    <Link
                      href="/"
                      className="block md:px-4 transition text-base text-white hover:text-amber-500"
                    >
                      <span>Inicio</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/aboutus"
                      className="block md:px-4 transition text-base text-white hover:text-amber-500"
                    >
                      <span>Nosotros</span>
                    </Link>
                  </li>
                  <li>
                    <button
                      className="block md:px-4 transition text-base text-white hover:text-amber-500"
                      onClick={() => setIsOpen(!isOpen)}
                    >
                      <span className="pr-2">Proyectos</span>
                      {isOpen ? (
                        <i className="fa-solid fa-caret-up pr-2"></i>
                      ) : (
                        <i className="fa-solid fa-caret-down pr-2"></i>
                      )}
                    </button>
                    {isOpen && (
                      <div className="relative lg:absolute z-30 bg-shark-900 rounded-lg px-2 py-3">
                        <ul className="flex flex-col">
                          {options.map((options, index) => (
                            <li key={index}>
                              <ListOfProjects
                                name={options.name}
                                link={options.link}
                              />
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </li>
                  <li>
                    <Link
                      href="/blog"
                      className="block md:px-4 transition text-base text-white hover:text-amber-500"
                    >
                      <span>Blog</span>
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="flex justify-center mt-8 lg:mt-0">
                <button className="bg-amber-500 hover:bg-amber-600 transition text-white text-base font-bold rounded-lg p-2">
                  <a href="#contact">Contacto</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
