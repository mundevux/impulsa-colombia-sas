"use client";
import Image from "next/image";
import { useState } from "react";
import logoMonteblanco from "/app/assets/Cerasus_Monteblanco/Logo_Cerasus_Monteblanco.png";
import fachadaMonteblanco from "/app/assets/Cerasus_Monteblanco/Fachada_Cerasus_Monteblanco.jpg";
import logoDanubio from "/app/assets/Cerasus_Danubio/Logo_Cerasus_Danubio.png";
import fachadaDanubio from "/app/assets/Cerasus_Danubio/Fachada_Cerasus_Danubio.png";
import logoUsme from "/app/assets/Cerasus_Usme/Logo_Cerasus_Usme.png";
import fachadaUsme from "/app/assets/Cerasus_Usme/Fachada_Cerasus_Usme.jpg";
import logoTunja from "/app/assets/Avium_Tunja/Logo_Avium_Tunja.png";
import fachadaTunja from "/app/assets/Avium_Tunja/Fachada_Avium_Tunja.jpg";
import logoCerasusSextaEntrada from "/app/assets/Cerasus_Sexta_Entrada/Logo_Cerasus_Sexta_Entrada.png";
import fachadaCerasusSextaEntrada from "/app/assets/Cerasus_Sexta_Entrada/Fachada_Cerasus_Sexta_Entrada.png";
import logoPrunusSextaEntrada from "/app/assets/Prunus_Sexta_Entrada/Logo_Prunus_Sexta_Entrada.png";
import fachadaPrunusSextaEntrada from "/app/assets/Prunus_Sexta_Entrada/Fachada_Prunus_Sexta_Entrada.png";
import Link from "next/link";
import IconParkDanubio from "/app/assets/Cerasus_Danubio/park.svg";

export default function PageProjects() {
  const projects = [
    // Aquí deberías tener un arreglo de objetos con información sobre tus proyectos de vivienda
    // Ejemplo:
    {
      id: 1,
      name: "Cerasus Monteblanco",
      category: "Categoría A",
      city: "Bogotá",
      type: "vis",
      logo: logoMonteblanco,
      fachada: fachadaMonteblanco,
      fachadaAlt: "Fachada Cerasus Monteblanco",
      logoAlt: "Logo Cerasus Monteblanco",
      link: "/projects/cerasus-monteblanco",
    },
    {
      id: 2,
      name: "Cerasus Danubio",
      category: "Categoría B",
      city: "Bogotá",
      type: "vis",
      logo: logoDanubio,
      fachada: fachadaDanubio,
      fachadaAlt: "Fachada Cerasus Danubio",
      logoAlt: "Logo Cerasus Danubio",
      link: "/projects/cerasus-danubio",
    },
    {
      id: 3,
      name: "Cerasus Usme",
      category: "Categoría C",
      city: "Bogotá",
      type: "vip",
      logo: logoUsme,
      fachada: fachadaUsme,
      fachadaAlt: "Fachada Cerasus Usme",
      logoAlt: "Logo Cerasus Usme",
      link: "/projects/cerasus-usme",
    },
    {
      id: 4,
      name: "Avium Tunja",
      category: "Categoría A",
      city: "Tunja",
      type: "no vis",
      logo: logoTunja,
      fachada: fachadaTunja,
      fachadaAlt: "Fachada Avium Tunja",
      logoAlt: "Logo Avium Tunja",
      link: "/projects/avium-tunja",
    },
    {
      id: 5,
      name: "Cerasus Sexta Entrada",
      category: "Categoría B",
      city: "Malambo",
      type: "vip",
      logo: logoCerasusSextaEntrada,
      fachada: fachadaCerasusSextaEntrada,
      fachadaAlt: "Fachada Cerasus Sexta Entrada",
      logoAlt: "Logo Cerasus Sexta Entrada",
      link: "/projects/cerasus-sexta-entrada",
    },
    {
      id: 6,
      name: "Prunus Sexta Entrada",
      category: "Categoría C",
      city: "Malambo",
      type: "vis",
      logo: logoPrunusSextaEntrada,
      fachada: fachadaPrunusSextaEntrada,
      fachadaAlt: "Fachada Prunus Sexta Entrada",
      logoAlt: "Logo Prunus Sexta Entrada",
      link: "/projects/prunus-sexta-entrada",
    },
  ];

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
            className=" bg-shark-300 w-full md:w-auto px-4 py-2 my-2 rounded-xl text-white ring-0 mr-5"
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
            className=" bg-shark-300 w-full md:w-auto px-4 py-2 my-2 rounded-xl text-white ring-0 mr-5"
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
            className="bg-amber-500 hover:bg-amber-600 transition text-white text-base font-bold rounded-lg p-2 my-2"
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
                <div className="absolute top-0 left-0 flex flex-col justify-start items-start m-2 px-4 py-2 text-white bg-amber-500/70 rounded-md">
                  <span className="text-base md:text-xl font-semibold">
                    {project.type.toLocaleUpperCase()}
                  </span>
                </div>
                <div className="absolute bottom-0 right-0 flex flex-col justify-end items-end m-2 px-4 py-2 text-white bg-amber-500/70 rounded-md">
                  <span className="text-base md:text-xl font-semibold">
                    {project.city}
                  </span>
                </div>
              </figure>
              <div className="flex flex-col md:flex-row p-4">
                <div className="flex justify-center items-center">
                  <Image
                    src={project.logo}
                    loading="lazy"
                    alt={project.logoAlt}
                    className="h-20 w-20 md:h-40 md:w-48"
                  />
                </div>
                <div className="flex flex-col items-center w-full">
                  <Link
                    href={project.link}
                    className="text-base md:text-xl font-semibold"
                  >
                    {project.name}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
