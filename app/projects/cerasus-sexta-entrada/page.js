"use client";
import projects from "/app/projects/dataProjects";

import { Tooltip } from "flowbite-react";
import Ubication from "@/app/components/Ubication";
import ContactForm from "@/app/components/ContactForm";
import Iframe from "react-iframe";
import iconWaze from "/app/assets/iconWaze.png";
import iconMaps from "/app/assets/iconMaps.png";
import logoPrunusSextaEntrada from "/app/assets/Cerasus_Sexta_Entrada/Logo_Cerasus_Sexta_Entrada.png";
import fachadaPrunusSextaEntrada from "/app/assets/Cerasus_Sexta_Entrada/Fachada_Cerasus_Sexta_Entrada.png";
import Image from "next/image";

export default function PrunusSextaEntrada() {
  const salaDeVentas = {
    nameUbication: "Sala de Ventas Sexta Entrada",
    linkDirection: "https://goo.gl/maps/9LRaz5mjESsz9zKw6",
    direction: "Via a Caracolí, sentido  Malambo-Caracolí.",
    city: "Malambo, Atlántico.",
    refPhone: "tel:+573022809143",
    phone: "(302) 280 9143",
    textWhatsApp: "WhatsApp: ",
    refWhatsApp: "https://wa.me/573022809143",
    whatsapp: "(302) 280 9143",
    textEmail: "Email: ",
    refEmail: "mailto:cerasus6entrada@impulsacolombia.com.co",
    email: "cerasus6entrada@impulsacolombia.com.co",
    imageWaze: iconWaze,
    refWaze:
      "https://www.waze.com/en/live-map/directions?latlng=10.861145102620632%2C-74.79620933532716",
    textWaze: "Llega con Waze",
    imageMaps: iconMaps,
    refMaps: "https://goo.gl/maps/9LRaz5mjESsz9zKw6",
    textMaps: "Llega con Maps",
    iframe: (
      <Iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3918.348191988198!2d-74.79686113214434!3d10.861099405156592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sco!4v1680731599145!5m2!1ses!2sco"
        title="Sala de Ventas Prunus Sexta Entrada"
        className="w-full h-full rounded-md"
        frameBorder="0"
        loading="lazy"
        allowFullScreen
      />
    ),
  };

  return (
    <div>
      <div className="max-w-7xl mx-auto py-10 px-4 xl:px-6">
        <Image
          src={fachadaPrunusSextaEntrada}
          alt="Fachada Conjunto Residencial Prunus Sexta Entrada apartamentos VIP en Barranquilla"
          className="w-full h-96 object-cover rounded-lg shadow "
        />
        <div className="flex justify-center items-center -mt-28 relative z-10 pb-6">
          <Image
            src={logoPrunusSextaEntrada}
            alt="Logo Conjunto Residencial Prunus Sexta Entrada apartamentos VIP en Barranquilla"
            className=" w-52 h-52 rounded-full object-cover"
          />
        </div>
        <div className="flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-shark-900 pb-4">
            Cerasus Sexta Entrada
          </h1>
          <p className="text-lg md:text-xl font-medium text-shark-700">
            Vivienda de Interés Prioritario en Barranquilla.
          </p>
          <p className="text-lg md:text-xl font-medium text-shark-700">
            Proyecto de vivienda en Barranquilla.
          </p>
          <div className="w-full">
            <ul className="flex flex-wrap justify-around md:justify-center my-3">
              <li className="text-sm md:text-lg font-medium text-shark-700 mx-2 my-1">
                <span className="text-amber-500 pr-2">•</span>
                {projects[4].area}
              </li>
              <li className="text-sm md:text-lg font-medium text-shark-700 mx-2 my-1">
                <span className="text-amber-500 pr-2">•</span>
                {projects[4].price}
              </li>
              <li className="text-sm md:text-lg font-medium text-shark-700 mx-2 my-1">
                <span className="text-amber-500 pr-2">•</span>
                {projects[4].descriptionType}
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full h-1 bg-amber-300 rounded-sm mt-4 mb-10"></div>
        <h2 className=" text-2xl md:text-4xl font-bold text-amber-500 pt-4 text-center mb-10">
          Características
        </h2>
        <div>
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex flex-auto flex-wrap items-center justify-center w-full pb-2 md:pb-3 px-6"
            >
              {project.name === "Cerasus Sexta Entrada"
                ? project.features.map((feature, index) => (
                    <div key={index}>
                      <Tooltip
                        title={feature.name}
                        placement="top"
                        content={feature.name}
                      >
                        <Image
                          key={index}
                          src={feature.icon}
                          loading="lazy"
                          alt={index}
                          className="h-12 w-12 md:h-16 md:w-16 lg:h-20 lg:w-20 mx-8 my-4"
                        />
                      </Tooltip>
                    </div>
                  ))
                : null}
            </div>
          ))}
        </div>
        <div id="contact" className="max-w-7xl mx-auto">
          <p className=" text-lg md:text-xl font-bold text-amber-600">
            Hablemos
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-shark-900 -mt-2 -ml-0.5 mb-12">
            Es fácil contactarnos
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ContactForm />
            <Ubication
              nameUbication={salaDeVentas.nameUbication}
              linkDirection={salaDeVentas.linkDirection}
              direction={salaDeVentas.direction}
              city={salaDeVentas.city}
              refPhone={salaDeVentas.refPhone}
              phone={salaDeVentas.phone}
              textWhatsapp={salaDeVentas.textWhatsApp}
              refWhatsApp={salaDeVentas.refWhatsApp}
              whatsapp={salaDeVentas.whatsapp}
              refEmail={salaDeVentas.refEmail}
              textEmail={salaDeVentas.textEmail}
              email={salaDeVentas.email}
              iconWaze={salaDeVentas.imageWaze}
              wazeLink={salaDeVentas.refWaze}
              textWaze={salaDeVentas.textWaze}
              iconMaps={salaDeVentas.imageMaps}
              mapsLink={salaDeVentas.refMaps}
              textMaps={salaDeVentas.textMaps}
              iframe={salaDeVentas.iframe}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
