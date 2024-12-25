import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { X, Menu } from "lucide-react";
import logo from "../assets/img/logo_text.svg";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const [navbarBg, setNavbarBg] = useState("bg-transparent");

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth < 1024) {
        const sections = document.querySelectorAll("section");
        let activeColor = "bg-transparent";

        sections.forEach((section) => {
          const rect = section.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            activeColor = section.dataset.navbarColor || "bg-transparent";
          }
        });

        setNavbarBg(activeColor);
      } else {
        setNavbarBg("bg-transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      id="navbar"
      className={`lg:pb-0 lg:fixed top-0 left-0 right-0 w-full z-50 ${navbarBg}`}
    >
      <div className="w-full flex justify-center bg-transparent">
        <div className="w-full max-w-[1700px] rounded-3xl bg-[#F5F5F5]/50 flex justify-between items-center my-8 py-3 px-6 lg:py-4 mx-4 lg:mx-32">
          <a className="flex items-center" href="/">
            <img className="h-12" src={logo} alt="Logo" />
          </a>
          <div className="w-auto lg:w-full flex justify-between lg:justify-center items-center z-50">
            <NavigationMenu className="hidden lg:block">
              <NavigationMenuList className="flex justify-between gap-16">
                <NavigationMenuItem className="p-[14px] hover:bg-[#0366FF] hover:rounded-[10px] hover:text-white">
                  <NavigationMenuLink className="text-sm xl:text-base" href="/">
                    Home
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem className="p-[14px] hover:bg-[#0366FF] hover:rounded-[10px] hover:text-white">
                  <NavigationMenuLink
                    className="text-sm xl:text-base"
                    href="/about"
                  >
                    Tentang
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem className="p-[14px] hover:bg-[#0366FF] hover:rounded-[10px] hover:text-white">
                  <NavigationMenuLink
                    className="text-sm xl:text-base"
                    href="/contact"
                  >
                    Kontak
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Button
              onClick={() => setOpenMenu(!openMenu)}
              className="p-0 block lg:hidden items-center text-sm bg-transparent text-black hover:bg-transparent focus:bg-inherit"
            >
              <Menu style={{ width: "24px", height: "24px" }} />
            </Button>
          </div>

          <div
            onClick={() => setOpenMenu(false)}
            className={`duration-500 fixed inset-0 bg-black z-40 ${
              openMenu
                ? "opacity-50 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            }`}
          ></div>

          <div
            className={`duration-500 w-full fixed right-0 top-0 z-50 bg-[#F5F5F5] px-6 shadow-2xl ${
              openMenu ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="pt-9 pb-6 flex justify-between items-center">
              <Link to={"/"}>
                <img className="h-12" src={logo} alt="TuntasinAja" />
              </Link>
              <X
                className="cursor-pointer"
                onClick={() => setOpenMenu(false)}
              />
            </div>
            <ul className="pb-8 flex flex-col gap-2 text-sm">
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/about"}>Tentang</Link>
              </li>
              <li>
                <Link to={"/contact"}>Kontak</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
