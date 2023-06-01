"use client";
import { useState } from "react";

export default function PageProjects() {
  const projects = [
    // Aquí deberías tener un arreglo de objetos con información sobre tus proyectos de vivienda
    // Ejemplo:
    {
      id: 1,
      name: "Proyecto 1",
      category: "Categoría A",
      city: "Bogotá",
      type: "vis",
    },
    {
      id: 2,
      name: "Proyecto 2",
      category: "Categoría B",
      city: "Barranquilla",
      type: "vip",
    },
    // ...
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
        <div>
          {/* Lista desplegable para el tipo de vivienda */}
          <select
            value={selectedType}
            onChange={handleTypeChange}
            className=" bg-shark-300 px-4 py-2 rounded-xl text-white ring-0 mr-5"
          >
            <option value="">Tipo de vivienda</option>
            <option value="vis">VIS</option>
            <option value="vip">VIP</option>
          </select>
          {/* Lista desplegable para la ciudad */}
          <select
            value={selectedCity}
            onChange={handleCityChange}
            className=" bg-shark-300 px-4 py-2 rounded-xl text-white ring-0 mr-5"
          >
            <option value="">Ciudad</option>
            <option value="Bogotá">Bogotá</option>
            <option value="Tunja">Tunja</option>
            <option value="Barranquilla">Barranquilla</option>
          </select>
          {/* Botón de filtrar */}
          <button
            onClick={handleFilter}
            className="bg-amber-500 hover:bg-amber-600 transition text-white text-base font-bold rounded-lg p-2"
          >
            Filtrar
          </button>
        </div>

        <div>
          {/* Aquí se muestran los proyectos filtrados */}
          {filteredProjects.map((project) => (
            <div key={project.id}>
              <h3>{project.name}</h3>
              <p>{project.category}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
