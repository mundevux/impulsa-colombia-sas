import Slider from "react-slick";
import CardProjects from "./CardProjects";

import logoMonteblanco from "../assets/Cerasus_Monteblanco/Logo_Cerasus_Monteblanco.png";
import fachadaMonteblanco from "../assets/Cerasus_Monteblanco/Fachada_Cerasus_Monteblanco.jpg";
import logoDanubio from "../assets/Cerasus_Danubio/Logo_Cerasus_Danubio.png";
import fachadaDanubio from "../assets/Cerasus_Danubio/Fachada_Cerasus_Danubio.png";
import logoUsme from "../assets/Cerasus_Usme/Logo_Cerasus_Usme.png";
import fachadaUsme from "../assets/Cerasus_Usme/Fachada_Cerasus_Usme.jpg";
import logoTunja from "../assets/Avium_Tunja/Logo_Avium_Tunja.png";
import fachadaTunja from "../assets/Avium_Tunja/Fachada_Avium_Tunja.jpg";
import logoCerasusSextaEntrada from "../assets/Cerasus_Sexta_Entrada/Logo_Cerasus_Sexta_Entrada.png";
import fachadaCerasusSextaEntrada from "../assets/Cerasus_Sexta_Entrada/Fachada_Cerasus_Sexta_Entrada.png";
import logoPrunusSextaEntrada from "../assets/Prunus_Sexta_Entrada/Logo_Prunus_Sexta_Entrada.png";
import fachadaPrunusSextaEntrada from "../assets/Prunus_Sexta_Entrada/Fachada_Prunus_Sexta_Entrada.png";

export function CarouselProjects() {
  const projectsData = [
    {
      image: fachadaMonteblanco,
      logo: logoMonteblanco,
      title: "Cerasus Monteblanco",
      text: "Un nuevo Proyecto de Vivienda de Interés Social en Bogotá, un proyecto VIS A OTRO NIVEL.",
      link: "cerasus-monteblanco",
    },
    {
      image: fachadaDanubio,
      logo: logoDanubio,
      title: "Cerasus Danubio",
      text: "Un nuevo concepto de construcción enfocado en dirigir el proyecto hacia un factor humano mas que monetario.",
      link: "cerasus-danubio",
    },
    {
      image: fachadaUsme,
      logo: logoUsme,
      title: "Cerasus Usme",
      text: "Unn proyecto de vivienda VIP (interés prioritario) construido en la Calle 110 A Sur No 3 A- 40 en la Localidad de Usme.",
      link: "cerasus-usme",
    },
    {
      image: fachadaPrunusSextaEntrada,
      logo: logoPrunusSextaEntrada,
      title: "Prunus Sexta Entrada",
      text: "Un nuevo Proyecto de Vivienda de Interés Social en Barranquilla.",
      link: "prunus-sexta-entrada",
    },
    {
      image: fachadaTunja,
      logo: logoTunja,
      title: "Avium Tunja",
      text: "Es proyecto de vivienda de estrato 3 constrido en la calle 18 No. 1-140 del sector del Rodeo en la ciudad de Tunja.",
      link: "avium-tunja",
    },
    {
      image: fachadaCerasusSextaEntrada,
      logo: logoCerasusSextaEntrada,
      title: "Cerasus Sexta Entrada",
      text: "Un nuevo Proyecto de Vivienda de Interés Prioritario en Barranquilla.",
      link: "cerasus-sexta-entrada",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    centerMode: true,
    centerPadding: "60px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "0px",
        },
      },
    ],
  };

  return (
    <div className="max-w-screen-xl mx-auto">
      <Slider {...settings}>
        {projectsData.map((projectsData, index) => (
          <div key={index} className="px-2 my-4">
            <CardProjects
              image={projectsData.image}
              logo={projectsData.logo}
              title={projectsData.title}
              text={projectsData.text}
              link={projectsData.link}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
