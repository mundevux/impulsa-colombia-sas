import Counter from "../components/Counter";
import construccionAvium from "../assets/Construccion_Avium_Tunja.jpg";
import imagenProyectos from "../assets/proyectos-entregados.png";
import imagenEntregadas from "../assets/viviendas-entregadas.png";
import imagenEnConstruccion from "../assets/viviendas-a-entregar.png";
import Image from "next/image";

export default function AboutUs() {
  return (
    <div>
      <div className="max-w-7xl mx-auto pt-32 px-4 xl:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-6">
          <div className="col-span-2 md:col-span-1">
            <p className=" text-lg md:text-xl font-bold text-amber-600">
              Sobre{" "}
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-shark-900 -mt-2 -ml-0.5 mb-12">
              Nosotros
            </h1>
            <p className="text-base md:text-lg font-medium text-shark-900 pb-4 text-justify">
              Somos una promotora inmobiliaria Colombia con más de 10 años de
              experiencia en el mercado. Contamos con el respaldo{" "}
              <a
                href="http://impulsaproyectos.com/"
                target="_blank"
                className="text-base md:text-lg font-bold text-amber-500 "
              >
                Impulsa Proyectos Inmobiliarios
              </a>
              . Nos especializamos en la construcción de viviendas de alta
              calidad y en la satisfacción de las necesidades de nuestros
              clientes.
            </p>
            <p className="text-base md:text-lg font-medium text-shark-900 pb-4 text-justify">
              Nos esforzamos por ser originales e innovadores, y siempre
              buscamos nuevas formas de mejorar nuestros servicios. Nuestro
              objetivo es ofrecer a nuestros clientes una experiencia única y
              satisfactoria en la compra de su hogar.
            </p>
          </div>
          <div className="col-span-2 md:col-span-1">
            <Image
              src={construccionAvium}
              alt="About Us"
              loading="lazy"
              className="w-full h-full object-cover rounded-md shadow-md"
            />
          </div>
        </div>
        <p className="text-base md:text-lg font-medium text-shark-900 pb-4 text-justify">
          En nuestra empresa, valoramos la honestidad, la transparencia y la
          calidad en todo lo que hacemos. Nos esforzamos por mantener una
          comunicación abierta y honesta con nuestros clientes, y siempre
          estamos dispuestos a escuchar sus necesidades y sugerencias.
        </p>
        <p className="text-base md:text-lg font-medium text-shark-900 pb-4 text-justify">
          Nuestro equipo está formado por expertos en el campo de la
          construcción y la inmobiliaria, y trabajamos juntos para ofrecer a
          nuestros clientes los mejores resultados. Nos enorgullece nuestro
          trabajo y estamos comprometidos con la excelencia en todo lo que
          hacemos.
        </p>
        <p className="text-base md:text-lg font-medium text-shark-900 pb-4 text-justify">
          Todo esto no sería posible sin la solidez que proporciona la
          experticia, otorgada por años de trabajo; esto nos permite adaptarnos
          a los nuevos contextos y sobre todo a las necesidades del sector. La
          entrega de más de 16.000 viviendas avala nuestra compañía y nos otorga
          suficiente crédito para continuar desarrollando una labor con sentido.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 pb-6">
          <div className="flex flex-col justify-center items-center col-span-2 md:col-span-1">
            <Image
              src={imagenProyectos}
              alt="Proyectos Entregados"
              loading="lazy"
              className="w-20 h-20 md:w-32 md:h-32 object-fill rounded-md"
            />
            <Counter end={16} />
            <p className="text-xl md:text-2xl font-bold text-shark-800 pb-4">
              Proyectos Entregados
            </p>
          </div>
          <div className="flex flex-col justify-center items-center col-span-2 md:col-span-1">
            <Image
              src={imagenEnConstruccion}
              alt="Viviendas en Construcción"
              loading="lazy"
              className="w-20 h-20 md:w-32 md:h-32 object-fill rounded-md"
            />
            <Counter end={802} />
            <p className="text-xl md:text-2xl font-bold text-shark-800 pb-4">
              Viviendas en Construcción
            </p>
          </div>
          <div className="flex flex-col justify-center items-center col-span-2 md:col-span-1">
            <Image
              src={imagenEntregadas}
              alt="Vivientas Entregadas"
              loading="lazy"
              className="w-20 h-20 md:w-32 md:h-32 object-fill rounded-md"
            />
            <Counter end={866} />
            <p className="text-xl md:text-2xl font-bold text-shark-800 pb-4">
              Viviendas Entregadas
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
