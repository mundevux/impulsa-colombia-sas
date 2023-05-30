import Link from "next/link";

const ListOfProjects = ({ name, link }) => {
  return (
    <div>
      <Link
        href={link}
        className="block md:px-4 transition text-base text-white hover:text-amber-500"
      >
        {name}
      </Link>
    </div>
  );
};

export default ListOfProjects;
