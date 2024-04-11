import Image from "next/image";
import Link from "next/link";

import aizen from "@/public/work/aizen.jpg";
import kamui from "@/public/work/kamui.jpg";
import pokedex from "@/public/work/pokedex.jpg";
import portfolio from "@/public/work/portfolio.jpg";
import cryptohunter from "@/public/work/crypto-hunter.jpg";
import redeye from "@/public/work/red-eye.jpg";
import evo from "@/public/work/evo.jpg";
import notion from "@/public/work/notion.jpg";
import nike from "@/public/work/nike.jpg";
import mwell from "@/public/work/mwell.png";
import file_manager from "@/public/work/file_manager.png";
import aja_pos from "@/public/work/ajapos.png";
import scanner from "@/public/work/Scanner.png";
import vote from "@/public/work/doovote.png";
import netflix from "@/public/work/netflix.png";
import portfolios from "@/public/work/portfolioRJS.png";
import realmOF from "@/public/work/realmOF.png";

const ProjectCard = () => {
  const data = [
    {
      id: 1,
      image: mwell,
      title: "Mwell",
      description: "",
      link: "https://www.mwell.com.ph/",
      target: "_self",
    },
    {
      id: 2,
      image: aja_pos,
      title: "Inventory/POS",
      description: "Inventory System",
      link: "https://pos.bugtech.online/",
      target: "_self",
    },
    {
      id: 3,
      image: scanner,
      title: "Face Detector",
      description: "Application that store data individually",
      link: "https://cfc.bugtech.online/",
      target: "_self",
    },
    {
      id: 4,
      image: vote,
      title: "Doovote",
      description: "Beauty Pageant Voting Application",
      link: "https://www.doovote.com/",
      target: "_blank",
    },
    {
      id: 5,
      image: netflix,
      title: "Netflix",
      description: "Netflix Clone Application",
      link: "https://steven.bugtech.online/netflix/",
      target: "_blank",
    },
    {
      id: 6,
      image: portfolios,
      title: "Portfolio ReactJS",
      description: "Portfolio Web Application made using ReactJS",
      link: "https://steven.bugtech.online/profile",
      target: "_blank",
    },
    {
      id: 7,
      image: file_manager,
      title: "File Manager",
      description: "Securely backup your files and Access it from any devices.",
      link: "https://files.bugtech.online/",
      target: "",
    },
    {
      id: 8,
      image: realmOF,
      title: "Offline First App",
      description: "Offline First React native application that offer uninterrupted functioning without internet connection access",
      link: "https://steven.bugtech.online/profile",
      target: "_self",
    },
    /* {
      id: 9,
      image: redeye,
      title: "Red Eye",
      description: "Question based website to know your movie genre",
      link: "https://red-eye.netlify.app/",
      target: "_self",
    }, */
  ];

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
      {data.map((project) => {
        return (
          <div
            className="rounded-lg mb-12 flex flex-col items-center"
            key={project.id}
          >
            <Link
              href={project.link}
              target={project.target}
              onClick={() => {
                project.title === "Portfolio"
                  ? alert("You are already on this site! 🤩")
                  : project.title === "Pokedex"
                  ? alert(
                      "Ash Ketchum asked you to open in desktop browser.. 🚀"
                    )
                  : "";
              }}
            >
              <Image
                loading="lazy"
                src={project.image}
                alt={project.title}
                width="200"
                className="rounded-lg drop-shadow-2xl hover:scale-110"
              />
            </Link>
            <div className="flex flex-col items-center">
              <h1 className="font-semibold text-[1.5rem] mt-3 text-gray-700 dark:text-white">
                {project.title}
              </h1>
              <p className="max-w-[90%] text-gray-400 font-light text-center text-sm">
                {project.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectCard;
