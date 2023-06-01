import ContactForm from "/app/components/ContactForm";
import Link from "next/link";
import bannerMiCasaYa from "/app/assets/Blog/Blog_Mi_Casa_Ya/Subsidio-de-Mi-casa-ya-2022.jpg";
import bannerRequisitos from "/app/assets/Blog/Blog_Mi_Casa_Ya/Requisitos-Subsidio-de-Mi-casa-ya.jpg";
import Iframe from "react-iframe";
import Ubication from "/app/components/Ubication";
import iconWaze from "/app/assets/iconWaze.png";
import iconMaps from "/app/assets/iconMaps.png";
import Image from "next/image";

export default function BlogMiCasaYa() {
  const oficinaPrincipal = {
    nameUbication: "Oficina Principal",
    linkDirection: "https://goo.gl/maps/Txs3cUnbB4SzWqb58",
    direction: "Calle 98 # 8- 37",
    city: "Bogotá, Colombia",
    refPhone: "tel:+576017942134",
    phone: "(601) 794 2134",
    textWhatsapp: "WhatsApp: ",
    refWhatsApp: "https://wa.me/573176676375",
    whatsapp: "(317) 667 6375",
    textEmail: "Email: ",
    refEmail: "mailto:info@impulsacolombia.com.co",
    email: "info@impulsacolombia.com.co",
    imageWaze: iconWaze,
    refWaze:
      "https://www.waze.com/en/live-map/directions/co/bogota/cl.-98-8-37?place=ChIJDXldaZqaP44RJNHVPhzOm4w",
    textWaze: "Llega con Waze",
    imageMaps: iconMaps,
    refMaps: "https://goo.gl/maps/h9A4sjJeCFWT8QP79",
    textMaps: "Llega con Maps",
    iframe: (
      <Iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.520035040723!2d-74.0428268846926!3d4.679286043144424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9a9a695d790d%3A0x8c9bce1c3ed5d124!2sCl.%2098%20%238-37%2C%20Localidad%20de%20Chapinero%2C%20Bogot%C3%A1!5e0!3m2!1ses!2sco!4v1680636132338!5m2!1ses!2sco"
        title="Oficina Principal"
        className="w-full h-full rounded-md"
        frameBorder="0"
        loading="lazy"
        allowFullScreen
      />
    ),
  };

  return (
    <div>
      <div className="max-w-7xl mx-auto pt-32 px-4 xl:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center mb-10">
          <div className="text-justify">
            <h1 className="text-4xl md:text-5xl font-bold text-shark-900 -mt-2 -ml-0.5 mb-12">
              Subsidio de Mi casa ya en 2022
            </h1>
            <p className="text-lg md:text-xl font-bold text-shark-900">
              Hablaremos sobre el programa del gobierno colombiano llamado Mi
              Casa Ya, una excelente oportunidad para aquellos que buscan tener
              su propia casa.
            </p>
          </div>
          <Image
            src={bannerMiCasaYa}
            className="w-auto mx-auto rounded-lg shadow-md "
            loading="lazy"
            alt="Banner Subsidio de vivienda Mi casa Ya"
          ></Image>
        </div>
        <div>
          <h2 className=" text-xl md:text-2xl font-bold text-amber-500 pb-4">
            ¿Qué es Mi casa ya?
          </h2>
          <p className="text-base md:text-lg font-medium text-shark-900 pb-5">
            Mi Casa Ya es un programa que busca brindar acceso a la vivienda
            propia a los hogares colombianos, especialmente a aquellos que
            tienen ingresos medios y bajos. Este programa otorga subsidios a la
            tasa de interés y al valor de la vivienda, lo que hace que sea más
            fácil para las personas obtener una casa propia.
          </p>
          <p className="text-base md:text-lg font-medium text-shark-900 pb-5">
            El programa está dirigido a la compra de viviendas nuevas o usadas,
            en proyectos urbanos o rurales. El subsidio de la tasa de interés se
            otorga a través de una entidad financiera que tenga convenio con el
            programa y puede ser de hasta el 4% del valor de la vivienda. El
            subsidio a la cuota inicial se otorga directamente al hogar
            beneficiario y puede ser de hasta 30 salarios mínimos legales
            vigentes.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center mb-6">
            <Image
              src={bannerRequisitos}
              className="w-auto mx-auto rounded-lg shadow-md "
              loading="lazy"
              alt="Banner Subsidio de vivienda Mi casa Ya"
            ></Image>
            <div className="text-justify">
              <h2 className=" text-xl md:text-2xl font-bold text-amber-500 pb-4">
                ¿Qué requisitos necesito para acceder al subsidio de Mi casa ya?
              </h2>
              <p className="text-base md:text-lg font-medium text-shark-900 pb-5">
                Para acceder al programa, se deben cumplir con ciertos
                requisitos. En primer lugar, es necesario tener un ingreso
                mensual de entre 1 y 8 salarios mínimos legales vigentes.
                Además, se debe tener capacidad de pago y no haber sido
                propietario de una vivienda en los últimos 3 años. Para obtener
                mas informcaión puedes visitar el sitio oficial del programa{" "}
                <a
                  href="https://minvivienda.gov.co/viceministerio-de-vivienda/mi-casa-ya"
                  target="_blank"
                  className="text-amber-500 hover:text-amber-500 underline  underline-offset-4"
                >
                  Mi Casa Ya
                </a>
                .
              </p>
              <h2 className=" text-xl md:text-2xl font-bold text-amber-500 pb-4">
                ¿Qué vivienda puedo comprar?
              </h2>
              <p className="text-base md:text-lg font-medium text-shark-900 pb-5">
                Los hogares podrán comprar la vivienda nueva urbana que deseen,
                cuyo valor no exceda los 135 salarios mínimos ($135.000.000) y
                para las viviendas ubicadas en los municipios y distritos
                definidos en el artículo 2.1.9.1 del Decreto 1077 de 2015, hasta
                150 salarios mínimos ($150.000.000).
              </p>
              <p className="text-base md:text-lg font-medium text-shark-900 pb-5">
                Esta modalidad aplica para hogares con ingresos inferiores a 2
                SMMLV ($2.000.000), quienes recibirán un subsidio a la cuota
                inicial hasta de 50 SMMLV ($50.000.000), más el beneficio de
                cobertura a la tasa de interés.
              </p>
            </div>
          </div>
          <h2 className=" text-xl md:text-2xl font-bold text-amber-500 pb-4">
            ¿Cuál es el trámite para acceder al subsidio mi casa ya?
          </h2>
          <p className="text-base md:text-lg font-medium text-shark-900 pb-5">
            Los hogares deben seleccionar la vivienda de su preferencia, que se
            ajuste a sus capacidades económicas y dirigirse al establecimiento
            de crédito de su elección o al Fondo Nacional del Ahorro.
          </p>
          <p className="text-base md:text-lg font-medium text-shark-900 pb-5">
            Allí se verificarán las características de los hogares y se les
            informará si pueden ser beneficiarios o no, sin postulaciones
            previas, a través de una consulta en línea que hace el
            establecimiento en un aplicativo diseñado para tal fin.
          </p>
          <p className="text-base md:text-lg font-medium text-shark-900 pb-5">
            En caso de obtener una respuesta positiva, el hogar debe continuar
            con el trámite que tenga el establecimiento de crédito para la
            aprobación de un crédito hipotecario.
          </p>
          <p className="text-base md:text-lg font-medium text-shark-900 pb-5">
            Una vez aprobado el crédito por parte del establecimiento de
            crédito, este se encargará de solicitar la asignación del subsidio y
            del trámite del desembolso del crédito.
          </p>
          <h2 className=" text-xl md:text-2xl font-bold text-amber-500 pb-4">
            Proyectos de vivienda que aplican a mi casa ya
          </h2>
          <p className="text-base md:text-lg font-medium text-shark-900 pb-5">
            <Link
              href={"/cerasus-monteblanco"}
              className="text-base md:text-lg font-bold text-amber-500 "
            >
              Cerasus Monteblanco
            </Link>
            : Proyecto de vivienda VIS en Bogotá, es un proyecto vis
            recientemente lanzado, proyecto ideal para invertir y aprovechar los
            cómodos plazos de pago, ya que son proyectos de vivienda de interés
            social. Ubicado en Usme, cuenta con espacios desde 40 mt2 hasta los
            45 mt2, dos torres de 10 pisos desde $143 millones.
          </p>
        </div>
        <div
          id="contact"
          className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10"
        >
          <ContactForm />
          <Ubication
            nameUbication={oficinaPrincipal.nameUbication}
            linkDirection={oficinaPrincipal.linkDirection}
            direction={oficinaPrincipal.direction}
            city={oficinaPrincipal.city}
            refPhone={oficinaPrincipal.refPhone}
            textWhatsapp={oficinaPrincipal.textWhatsapp}
            phone={oficinaPrincipal.phone}
            refWhatsApp={oficinaPrincipal.refWhatsApp}
            whatsapp={oficinaPrincipal.whatsapp}
            textEmail={oficinaPrincipal.textEmail}
            refEmail={oficinaPrincipal.refEmail}
            email={oficinaPrincipal.email}
            iconWaze={oficinaPrincipal.imageWaze}
            wazeLink={oficinaPrincipal.refWaze}
            textWaze={oficinaPrincipal.textWaze}
            iconMaps={oficinaPrincipal.imageMaps}
            mapsLink={oficinaPrincipal.refMaps}
            textMaps={oficinaPrincipal.textMaps}
            iframe={oficinaPrincipal.iframe}
          />
        </div>
      </div>
    </div>
  );
}
