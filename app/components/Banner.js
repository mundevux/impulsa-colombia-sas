import Link from "next/link";
import bannerDanubio from "../assets/Cerasus_Danubio/Banner_Cerasus_Danubio_Proyecto_VIS_en_Bogota.png";
import Image from "next/image";

const Banner = ({ onClose }) => {
  return (
    <div className="hidden md:block md:fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 bg-white rounded-lg shadow-lg">
        <Link href="/projects/cerasus-danubio" className="w-full h-full">
          <Image src={bannerDanubio} alt="Banner Cerasus Danubio" />
        </Link>
        <button
          onClick={onClose}
          aria-label="Cerrar"
          className="bg-shark-700 text-white rounded-full w-10 h-10 flex justify-center items-center absolute top-0 right-0 mt-2 mr-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Banner;
