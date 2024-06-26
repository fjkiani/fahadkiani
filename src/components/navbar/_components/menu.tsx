"use client";

import ContentMenu from "./content-menu";

import React, { useState } from "react";

import {
  AlignJustify,
  BarChart,
  Building2,
  Camera,
  ChevronDown,
  Code,
  Code2Icon,
  DollarSign,
  Download,
  GraduationCap,
  Headphones,
  Home,
  Info,
  LibrarySquare,
  LifeBuoy,
  Lock,
  Newspaper,
  PaintBucket,
  Settings,
  Smile,
  Sparkles,
  UserCircle2,
  UserPlus,
} from "lucide-react";

interface MenuItem {
  title: string;
  menu: string;
  options: { label: string; emoji: React.ReactElement; href: string }[];
}

export const items: MenuItem[] = [
  {
    title: "Use Cases",
    menu: "use-cases",
    options: [
      {
        label: "Forecasting",
        emoji: <UserPlus className="text-orange-500" />,
        href: "/healthhive",
      },
      {
        label: "Healthcare",
        emoji: <Code className="text-green-500" />,
        href: "/medicalai",
      },
      {
        label: "Dashboards",
        emoji: <Sparkles className="text-blue-500" />,
        href: "/datadashboard",
      },
      // {
      //   label: "Ecommerce",
      //   emoji: <UserPlus className="text-orange-500" />,
      //   href: "/ecommerce",
      // },
      {
        label: "Generative AI",
        emoji: <GraduationCap className="text-green-500" />,
        href: "/RDChat",
      },
    ],
  },

  {
    title: "For Business",
    menu: "for-business",
    options: [
      {
        label: "Contact",
        emoji: <Sparkles className="text-indigo-500" />,
        href: "/Contact",
      },
      
    ],
  },
  {
    title: "Resources",
    menu: "resources",
    options: [
      {
        label: "Projects",
        emoji: <AlignJustify className="text-orange-500" />,
        href: "/projectspage",
      },
      // {
      //   label: "Help & Support",
      //   emoji: <LifeBuoy className="text-green-500" />,
      //   href: "/",
      // },
      // {
      //   label: "Download",
      //   emoji: <Download className="text-blue-500" />,
      //   href: "/",
      // },
      // {
      //   label: "BirdSDK",
      //   emoji: <Code2Icon className="text-rose-500" />,
      //   href: "/",
      // },
      // {
      //   label: "Screen Recorder",
      //   emoji: <Headphones className="text-orange-500" />,
      //   href: "/screen-recorder",
      // },
      // {
      //   label: "Community",
      //   emoji: <GraduationCap className="text-green-500" />,
      //   href: "/",
      // },
    ],
  },
  // {
  //   title: "Company",
  //   menu: "company",
  //   options: [
  //     {
  //       label: "Team",
  //       emoji: <Info className="text-red-500" />,
  //       href: "/projectspage",
  //     },
  //     {
  //       label: "Careers",
  //       emoji: <UserCircle2 className="text-green-500" />,
  //       href: "/careers",
  //     },
  //     {
  //       label: "Newsroom",
  //       emoji: <Newspaper className="text-blue-500" />,
  //       href: "/newsroom",
  //     },
  //   ],
  // },
];

export function NavigationMenuBar() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const handleMouseEnter = (menu: string) => {
    setActiveMenu(menu);
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
  };

  const renderMenu = (item: MenuItem) => {
    const { title, menu, options } = item;

    return (
      <div
        className="
         flex
         items-center
         relative
         "
        onMouseEnter={() => handleMouseEnter(menu)}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex items-center">
          <div className="w-34">{title}</div>
          <div>
            <ChevronDown className="relative top-[1px] h-3 w-3" />
          </div>
          <div className="mt-20">
            {activeMenu === menu && (
              <ContentMenu
                options={options.map((option, index) => ({
                  ...option,
                  href: option.href,
                }))}
              />
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div
      className="
        // hidden
        text-md
        font-light
        space-x-4
        w-full 
        items-center
        xl:flex
        h-24
        
        "
    >
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <div className="cursor-pointer hidden xl:block">
            {renderMenu(item)}
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}
