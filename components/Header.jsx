import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const Header = () => {
  let { systemTheme, theme, setTheme } = useState();
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  let [open, setOpen] = useState(false);
  const router = useRouter().asPath;
  const touchRef = useRef();
  let Links = [
    { name: "work", link: "/work" },
    { name: "about", link: "/about" },
    { name: "tech", link: "/link" },
  ];
  const clickHandler = (link) => {
    if (router !== link) {
      setTimeout(() => {
        setOpen(false);
      }, 700);
    }
  };

  const useOutsideAlerter = (ref) => {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setOpen(false);
        }
      }
      document.addEventListener("mousedown", handleClickOutside);

      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  };
  useOutsideAlerter();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 70) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    setMounted(true);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!mounted) {
    return null;
  }

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <nav
      ref={touchRef}
      className={`${
        isScrolled && "bg-opacity-[0.7] shadow-md drop-shadow-lg"
      } font-medium duration-500 bg-opacity-90 transition-all linear z-40 dark:text-white w-[75%] sm:w-[75%] md:w-[70%] lg-w-[55%] xl:w-[50%] max-w-6xl mx-auto bg-white dark:bg-[#353535] drop-shadow-xs backdrop-blur-sm top-4 stick rounded-2xl`}
    >
      <div className="flex justify-between md:space-x-10 lg:space-x-12 xl:space-x-16 md:flex items-center place-items-center md:justify-center py-3 md:px-10 px-8">
        <div className="select-none order-2 md:order-1 cursor-pointer flex items-center text-gray-800">
          <Link href={"/"}>
            {" "}
            <h3 className="bg-gradient-to-tl from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-space text-xl font-bold">
              pranjalshikhar{" "}
            </h3>{" "}
          </Link>
        </div>
        {currentTheme === " dark" ? (
          <button
            onClick={() => {
              setTheme("light");
            }}
            className="w-max md:order-8 fill-purple-600"
          >
            <MdLightMode className="h-5 w-5 lg:w-6 lg:h-6 fill-white" />{" "}
          </button>
        ) : (
          <button
            onClick={() => {
              setTheme("dark");
            }}
            className="w-max md:order-8 fill-purple-600"
          >
            <MdDarkMode className="h-5 w-5 lg:w-6 lg:h-6 fill-black" />{" "}
          </button>
        )}
        <div
          className="transition-all duration-500 ease-in order-3 text-lg flex flex-col space-y-[0.2rem] cursor-pointer items-center font-semibold md:hidden"
          onClick={() => setOpen(!open)}
        >
          <div
            className={`${
              open && "rotate-45 translate-y-[5px]"
            } relative rounded-xl origin-center transition-all duration-500 ease-in w-4 h-[0.1125rem] dark:bg-white/70 dark:text-white/70 fill-black text-black bg-black`}
          ></div>
          <div
            className={`${
              open && "opacity-0 translate-x-20"
            } relative rounded-xl origin-center transition-all duration-500 ease-in w-4 h-[0.1125rem] dark:bg-white/70 dark:text-white/70 fill-black text-black bg-black`}
          ></div>
          <div
            className={`${
              open && "-rotate-45 -translate-y-[5px]"
            } relative rounded-xl origin-center transition-all duration-500 ease-in w-4 h-[0.1125rem] dark:bg-white/70 dark:text-white/70 fill-black text-black bg-black`}
          ></div>
        </div>
        <ul
          className={` rounded-3xl md:rounded-none dark:bg-[#353535] bg-white  py-4 md:py-0 md:bg-inherit font-semibold order-4 md:flex md:items-center md:pb-0 pb-8 absolute md:static bg-light-blue md:bg-none md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 lg:transition-none transition-all duration-500 ease-in ${
            open ? "top-[3.5rem]" : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li
              key={link.name}
              className="md:ml-8 text-base lg:text-lg md:my-0 my-7"
            >
              <Link
                href={link.name}
                onClick={() => clickHandler(`${link.name}`)}
                className={`${
                  router === link.link
                    ? "text-purple-400 font-semibold"
                    : "text-gray-700 dark:text-white"
                } hover:text-purple-500 dark:hover:text-purple-500 duration-500`}
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li
            key={4}
            className="md:ml-8 text-base xl:text-[1.1rem] font-regular md:my-0 my-7"
          >
            <a
              href="#"
              target="blank"
              rel="noreferrer"
              className="text-gray-800 dark:text-white hover:text-purple-500 dark:hover:text-purple-500 duration-500"
            >
              resume
            </a>
          </li>
          <li
            key={5}
            className="md:ml-8 text-base xl:text-[1.1rem] font-regular md:my-0 my-7"
          >
            <a
              href="#"
              target="blank"
              rel="noreferrer"
              className="text-gray-800 dark:text-white hover:text-purple-500 dark:hover:text-purple-500 duration-500"
            >
              behance
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
