import React from "react";
import CardBlog from "./CardBlog";
import Link from "next/link";

import bannerMiCasaYa from "../assets/Blog/Blog_Mi_Casa_Ya/Subsidio-de-Mi-casa-ya-2022.jpg";
import bannerConsejos from "../assets/Blog/Consejos_Vivienda_Nueva/consejos-para-comprar-vivienda-nueva.jpg";

export function BlogSection() {
  const blogs = [
    {
      image: bannerMiCasaYa,
      title: "Subsidio de Mi casa ya en 2022",
      description:
        "¿Qué es Mi casa ya? Es un programa del gobierno nacional que facilita el acceso a la compra de una primera vivienda para […]",
      link: "/blog/subsidio-mi-casa-ya",
    },
    {
      image: bannerConsejos,
      title: "Consejos para comprar vivienda nueva",
      description:
        "Actualmente la oferta de vivienda se ha ampliado en el territorio nacional, sin embargo, en muchos casos no se está seguro de la […]",
      link: "/blog/consejos-para-comprar-vivienda",
    },
  ];

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center pb-12">
        {blogs.map((blog, index) => (
          <div key={index}>
            <CardBlog
              image={blog.image}
              title={blog.title}
              description={blog.description}
            />
            <Link
              href={blog.link}
              className="bg-amber-400 hover:bg-amber-500 transition text-white text-base font-bold rounded-lg p-2"
            >
              Leer más
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
