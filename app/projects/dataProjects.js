import IconGimnasio from "/app/assets/Gimnasio-apartamento.png";
import IconParqueInfantil from "/app/assets/Salon-de-ninos-apartamento.png";
import IconSalonSocial from "/app/assets/Salon-social-apartamento.png";
import IconBusinessCenter from "/app/assets/Business-center-apartamento.png";
import IconLudoteca from "/app/assets/Ludoteca-apartamento.png";
import IconPiscina from "/app/assets/Piscina-apartamento.png";
import IconTerrazaComunal from "/app/assets/Terraza-comunal-apartamento.png";
import IconFogata from "/app/assets/Zona-de-fogatas-apartamento.png";
import IconCoffeeWork from "/app/assets/Coffee-Work-apartamento.png";
import IconZonaTrote from "/app/assets/Zona-de-trote-apartamento.png";
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

const projects = [
  {
    id: 1,
    name: "Cerasus Monteblanco",
    price: "Desde $191.400.000",
    area: "Desde 44 m2",
    city: "Bogotá",
    type: "vis",
    descriptionType: "Vivienda de interés social",
    logo: logoMonteblanco,
    fachada: fachadaMonteblanco,
    fachadaAlt: "Fachada Cerasus Monteblanco",
    logoAlt: "Logo Cerasus Monteblanco",
    link: "/projects/cerasus-monteblanco",
    note: "*Precio de 150 SMMLV proyectado al año de escrituración",
    features: [
      {
        name: "Gimnasio",
        icon: IconGimnasio,
      },
      {
        name: "Parque infantil",
        icon: IconParqueInfantil,
      },
      {
        name: "Salón social",
        icon: IconSalonSocial,
      },
      {
        name: "Centro de negocios",
        icon: IconBusinessCenter,
      },
      {
        name: "Luoteca",
        icon: IconLudoteca,
      },
    ],
  },
  {
    id: 2,
    name: "Cerasus Danubio",
    price: "Desde $191.400.000",
    area: "Desde 33 m2",
    city: "Bogotá",
    type: "vis",
    descriptionType: "Vivienda de interés social",
    logo: logoDanubio,
    fachada: fachadaDanubio,
    fachadaAlt: "Fachada Cerasus Danubio",
    logoAlt: "Logo Cerasus Danubio",
    link: "/projects/cerasus-danubio",
    note: "*Precio de 150 SMMLV proyectado al año de escrituración.",
    features: [
      {
        name: "Zona de Fogata",
        icon: IconFogata,
      },
      {
        name: "Coffee Work",
        icon: IconCoffeeWork,
      },
      {
        name: "Parque infantil",
        icon: IconParqueInfantil,
      },
      {
        name: "Salón social",
        icon: IconSalonSocial,
      },
      {
        name: "Terraza comunal",
        icon: IconTerrazaComunal,
      },
      {
        name: "Luoteca",
        icon: IconLudoteca,
      },
    ],
  },
  {
    id: 3,
    name: "Cerasus Usme",
    price: "Desde $104.400.000",
    area: "Desde 41 m2",
    city: "Bogotá",
    type: "vip",
    descriptionType: "Vivienda de interés prioritario",
    logo: logoUsme,
    fachada: fachadaUsme,
    fachadaAlt: "Fachada Cerasus Usme",
    logoAlt: "Logo Cerasus Usme",
    link: "/projects/cerasus-usme",
    note: "*Precio de 90 SMMLV proyectado al año de escrituración.",
    features: [
      {
        name: "Parque infantil",
        icon: IconParqueInfantil,
      },
      {
        name: "Zona de Fogata",
        icon: IconFogata,
      },
      {
        name: "Salón social",
        icon: IconSalonSocial,
      },
      {
        name: "Zona de trote",
        icon: IconZonaTrote,
      },
    ],
  },
  {
    id: 4,
    name: "Avium Tunja",
    price: "Desde $200.000.000",
    area: "Desde 45 m2",
    city: "Tunja",
    type: "no vis",
    descriptionType: "Vivienda no VIS",
    logo: logoTunja,
    fachada: fachadaTunja,
    fachadaAlt: "Fachada Avium Tunja",
    logoAlt: "Logo Avium Tunja",
    link: "/projects/avium-tunja",
    note: "*Precio sujeto a cambios",
    features: [
      {
        name: "Piscina",
        icon: IconPiscina,
      },
      {
        name: "Gimnasio",
        icon: IconGimnasio,
      },
      {
        name: "Parque infantil",
        icon: IconParqueInfantil,
      },
      {
        name: "Salón social",
        icon: IconSalonSocial,
      },
      {
        name: "Terraza comunal",
        icon: IconTerrazaComunal,
      },
    ],
  },
  {
    id: 5,
    name: "Cerasus Sexta Entrada",
    price: "Desde $99.200.000",
    area: "Desde 46 m2",
    city: "Malambo",
    type: "vip",
    descriptionType: "Vivienda de interés prioritario",
    logo: logoCerasusSextaEntrada,
    fachada: fachadaCerasusSextaEntrada,
    fachadaAlt: "Fachada Cerasus Sexta Entrada",
    logoAlt: "Logo Cerasus Sexta Entrada",
    link: "/projects/cerasus-sexta-entrada",
    note: "*Precio de 90 SMMLV proyectado al año de escrituración.",
    features: [
      {
        name: "Piscina",
        icon: IconPiscina,
      },
      {
        name: "Gimnasio",
        icon: IconGimnasio,
      },
      {
        name: "Parque infantil",
        icon: IconParqueInfantil,
      },
      {
        name: "Salón social",
        icon: IconSalonSocial,
      },
    ],
  },
  {
    id: 6,
    name: "Prunus Sexta Entrada",
    price: "Desde $132.250.000",
    area: "Desde 53 m2",
    city: "Malambo",
    type: "vis",
    descriptionType: "Vivienda de interés social",
    logo: logoPrunusSextaEntrada,
    fachada: fachadaPrunusSextaEntrada,
    fachadaAlt: "Fachada Prunus Sexta Entrada",
    logoAlt: "Logo Prunus Sexta Entrada",
    link: "/projects/prunus-sexta-entrada",
    note: "*Precio de 115 SMMLV proyectado al año de escrituración.",
    features: [
      {
        name: "Piscina",
        icon: IconPiscina,
      },
      {
        name: "Gimnasio",
        icon: IconGimnasio,
      },
      {
        name: "Parque infantil",
        icon: IconParqueInfantil,
      },
      {
        name: "Salón social",
        icon: IconSalonSocial,
      },
    ],
  },
];

export default projects;
