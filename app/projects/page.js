"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import projects from "./dataProjects";

export default function PageProjects() {
  const [selectedType, setSelectedType] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [filteredProjects, setFilteredProjects] = useState(projects); // Variable para almacenar los proyectos filtrados

  const handleTypeChange = (e) => {
    setSelectedType(e.target.value);
  };

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
  };

  const handleFilter = () => {
    // Lógica para filtrar los proyectos según las selecciones
    const filtered = projects.filter((project) => {
      if (selectedType && selectedCity) {
        return project.type === selectedType && project.city === selectedCity;
      } else if (selectedType) {
        return project.type === selectedType;
      } else if (selectedCity) {
        return project.city === selectedCity;
      } else {
        return true;
      }
    });

    setFilteredProjects(filtered); // Actualizar los proyectos filtrados en el estado
  };

  return (
    <div className="max-w-7xl mx-auto pt-32 px-4 xl:px-6">
      <p className=" text-lg md:text-xl font-bold text-amber-600">Nuestros </p>
      <h1 className="text-4xl md:text-5xl font-bold text-shark-900 -mt-2 -ml-0.5 mb-12">
        Proyectos
      </h1>
      <div>
        <div className="flex flex-col md:flex-row justify-center mb-16">
          {/* Lista desplegable para el tipo de vivienda */}
          <select
            value={selectedType}
            onChange={handleTypeChange}
            className=" bg-shark-100 w-full md:w-auto px-4 py-2 my-2 rounded-xl font-medium text-shark-500 ring-0 mr-5"
          >
            <option value="">Tipo de vivienda</option>
            <option value="vis">VIS</option>
            <option value="vip">VIP</option>
            <option value="no vis">NO VIS</option>
          </select>
          {/* Lista desplegable para la ciudad */}
          <select
            value={selectedCity}
            onChange={handleCityChange}
            className=" bg-shark-100 w-full md:w-auto px-4 py-2 my-2 rounded-xl font-medium text-shark-500 ring-0 mr-5"
          >
            <option value="">Ciudad</option>
            <option value="Bogotá">Bogotá</option>
            <option value="Tunja">Tunja</option>
            <option value="Malambo">Malambo</option>
            <option value="Malambo">España</option>
          </select>
          {/* Botón de filtrar */}
          <button
            onClick={handleFilter}
            className="bg-amber-500 text-white text-base font-bold rounded-lg p-2 my-2"
          >
            Filtrar
          </button>
        </div>

        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-6 my-10 place-items-center">
          {/* Aquí se muestran los proyectos filtrados */}
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <figure className="bg-gray-200 h-40 relative">
                <Image
                  src={project.fachada}
                  loading="lazy"
                  alt={project.fachadaAlt}
                  className=" h-full object-cover transition-all transform hover:scale-105 hover:blur-[2px]"
                />
                <div className="absolute top-0 left-0 flex flex-col justify-start items-start m-2 px-3 py-2 text-white bg-shark-400/80 rounded-md">
                  <span className="text-sm md:text-base font-medium">
                    {project.type.toLocaleUpperCase()}
                  </span>
                </div>
                <div className="absolute bottom-0 right-0 flex flex-col justify-end items-end m-2 px-3 py-2 text-white bg-amber-500/70 rounded-md">
                  <span className="text-sm md:text-base font-medium">
                    {project.city}
                  </span>
                </div>
              </figure>
              <div className="">
                <div className="flex flex-col md:flex-row p-4">
                  <div className="flex justify-center items-center">
                    <Image
                      src={project.logo}
                      loading="lazy"
                      alt={project.logoAlt}
                      className="h-28 w-28 md:h-40 md:w-40 mx-auto"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-around mx-auto">
                    <Link
                      href={project.link}
                      className="text-base md:text-xl font-semibold underline text-amber-500/90 my-2"
                    >
                      {project.name}
                    </Link>
                    <p className="text-sm md:text-base font-medium text-shark-500 my-2">
                      {project.area}
                    </p>
                    <p className="text-sm md:text-base font-medium text-shark-500 my-2">
                      {project.price}
                      <span className="text-sm">*</span>
                    </p>
                    <div className="flex justify-center items-center my-2">
                      {project.features.map((feature, index) => (
                        <Image
                          key={index}
                          src={feature.icon}
                          loading="lazy"
                          alt={index}
                          className="h-4 w-4 md:h-6 md:w-6 mx-2"
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="w-full text-center pb-1">
                  <span className="text-[8px] md:text-[10px] font-medium text-shark-500 px-4">
                    {project.note}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
