import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { buttonVariants } from "./ui/button";
import { Menu } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import { LanguageToggle } from "./mode-toggle-lenguage";
import RosslerComponent from "./rossler/RosslerAttractor";
import MessengerHover from "./MessengerHover"; // Importa el componente MessengerHover
import { useTranslation } from "react-i18next";

interface RouteProps {
  href: string;
  label: string;
  icon?: JSX.Element;
}

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { t } = useTranslation("global");
  const routeList: RouteProps[] = [
    {
      href: "#servicios",
      label: t("navbar.services"),
    },
    {
      href: "#proyectos",
      label: t("navbar.projects"),
    },
    {
      href: "#cotiza",
      label: t("navbar.price"),
    },
    {
      href: "#contacto",
      label: t("navbar.contact"),
    }
  ];
  return (
    <header className="bg-alison sticky border-b-[1px] top-0 z-40 w-full dark:border-b-slate-700 dark:bg-background">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container h-14 px-4 w-screen flex justify-between">
          <NavigationMenuItem className="font-bold flex">
            <a href="/" className="font-bold text-xl flex">
              <RosslerComponent />
            </a>
          </NavigationMenuItem>

          {/* mobile */}
          <span className="flex md:hidden">
          <LanguageToggle />
            <ModeToggle />

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger className="px-2">
                <Menu
                  className="flex md:hidden h-5 w-5"
                  onClick={() => setIsOpen(true)}
                >
                  <span className="sr-only">Menu Icon</span>
                </Menu>
              </SheetTrigger>

              <SheetContent side={"left"}>
                <SheetHeader>
                  <SheetTitle className="font-bold text-xl">
                    Shadcn/React
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col justify-center items-center gap-2 mt-4">
                  {routeList.map(({ href, label, icon }: RouteProps, i) => (
                    <a
                      key={label}
                      href={href}
                      onClick={() => setIsOpen(false)}
                      className={buttonVariants({ variant: "ghost" })}
                    >
                      <MessengerHover
                        text={label}
                        isHovered={hoveredIndex === i}
                      />
                      {icon && <span className="ml-1">{icon}</span>}
                    </a>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
         
          </span>

          {/* desktop */}
          <nav className="hidden md:flex gap-2">
            {routeList.map((route: RouteProps, i) => (
              <a
                href={route.href}
                key={i}
                className={`text-[17px] ${buttonVariants({
                  variant: "ghost",
                })}`}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <MessengerHover
                  text={route.label}
                  isHovered={hoveredIndex === i}
                />
                {route.icon && <span className="ml-1">{route.icon}</span>}
              </a>
            ))}
          </nav>
          
          <div className="hidden md:flex gap-2">
          <LanguageToggle />
            <ModeToggle />
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};
