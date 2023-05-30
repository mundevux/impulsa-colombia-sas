import Image from "next/image";

const Ubication = ({
  nameUbication,
  linkDirection,
  direction,
  city,
  refPhone,
  phone,
  textWhatsapp,
  refWhatsApp,
  whatsapp,
  textEmail,
  refEmail,
  email,
  iconWaze,
  wazeLink,
  textWaze,
  iconMaps,
  mapsLink,
  textMaps,
  iframe,
}) => {
  return (
    <div className="flex flex-col justify-center bg-shark-900 shadow-md rounded-md px-8 py-4">
      <h2 className=" text-amber-400 text-3xl font-bold mb-2">
        {nameUbication}
      </h2>
      <a
        href={linkDirection}
        className="text-shark-50 text-lg md:text-xl font-normal"
        target="_blank"
      >
        {direction}
      </a>
      <p className="text-shark-300 text-base font-normal -mt-2 pb-2">{city}</p>
      <div className="flex items-center pb-2">
        <h3 className="text-shark-100 font-semibold text-base md:text-xl">
          Teléfono:{" "}
        </h3>
        <a
          href={refPhone}
          className="text-shark-50 text-sm md:text-base font-normal pl-2"
        >
          {phone}
        </a>
      </div>
      <div className="flex items-center pb-2">
        <h3 className="text-shark-100 font-semibold text-base md:text-xl">
          {textWhatsapp}
        </h3>
        <a
          href={refWhatsApp}
          className="text-shark-50 text-sm md:text-base font-normal pl-2"
        >
          {whatsapp}
        </a>
      </div>
      <div className="flex items-center pb-4">
        <h3 className="text-shark-100 font-semibold text-base md:text-xl">
          {textEmail}
        </h3>
        <a
          href={refEmail}
          className="text-shark-50 text-sm md:text-base font-normal pl-2"
        >
          {email}
        </a>
      </div>
      <div className="grid grid-cols-2 gap-4 my-4">
        <a
          className="flex flex-col justify-center items-center"
          target="_blank"
          href={wazeLink}
        >
          <p className="text-shark-300 text-base font-normal -mt-2 pb-2">
            {textWaze}
          </p>
          <Image
            src={iconWaze}
            alt="iconWaze"
            className="w-12 h-12 mb-2 rounded-full"
          />
        </a>
        <a
          className="flex flex-col justify-center items-center"
          target="_blank"
          href={mapsLink}
        >
          <p className="text-shark-300 text-base font-normal -mt-2 pb-2">
            {textMaps}
          </p>
          <Image src={iconMaps} alt="iconMaps" className="w-12 h-12 mb-2" />
        </a>
      </div>
      {iframe}
    </div>
  );
};

export default Ubication;
