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
import RosslerComponent from "./rossler/RosslerAttractor";

interface RouteProps {
  href: string;
  label: string;
  icon?: JSX.Element;
}

const routeList: RouteProps[] = [
  {
    href: "#servicios",
    label: "Servicios",
  },
  {
    href: "#portafolio",
    label: "Portafolio",
  },
  {
    href: "#cotiza",
    label: "Cotiza",
  },
  {
    href: "#contacto",
    label: "Contacto",
  },
  {
    href: "#English",
    label: "English",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
      >
        <path d="M12 16c-.3 0-.5-.1-.7-.3l-7-7c-.4-.4-.4-1 0-1.4s1-.4 1.4 0L12 13.6l6.3-6.3c.4-.4 1-.4 1.4 0s.4 1 0 1.4l-7 7c-.2.2-.4.3-.7.3z" />
      </svg>
    ),
  },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <header className=" sticky border-b-[1px] top-0 z-40 w-full dark:border-b-slate-700 dark:bg-background">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container h-14 px-4 w-screen flex justify-between">
          <NavigationMenuItem className="font-bold flex">
            <a href="/" className="font-bold text-xl flex">
              <RosslerComponent />
            </a>
          </NavigationMenuItem>

          {/* mobile */}
          <span className="flex md:hidden">
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
                  {routeList.map(({ href, label, icon }: RouteProps) => (
                    <a
                      key={label}
                      href={href}
                      onClick={() => setIsOpen(false)}
                      className={buttonVariants({ variant: "ghost" })}
                    >
                      {label}
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
              >
                {route.label}
                {route.icon && <span className="ml-1">{route.icon}</span>}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex gap-2">
            <ModeToggle />
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};
