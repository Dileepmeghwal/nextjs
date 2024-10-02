import { useState } from "react";
import {
  ChevronUp,
  ChevronDown,
  PanelRightClose,
  PanelRightOpen,
  LayoutGrid,
  UserPen,
  Settings,
  FileText,
  CalendarDays,
  NotebookTabs,
  CreditCard,
  FileChartColumnIncreasing,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../assets/logoipsum-245.svg";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenuIndex, setActiveSubmenuIndex] = useState(null);
  const [active, setActive] = useState(null);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const toggleSubmenu = (index) => {
    // If the same submenu is clicked again, close it
    if (activeSubmenuIndex === index) {
      setActiveSubmenuIndex(null);
    } else {
      setActiveSubmenuIndex(index); // Open the new submenu
    }
    setActive(index); // Set the clicked menu item as active
  };

  const handleSelected = (index) => {
    setActive(index);
    setActiveSubmenuIndex(null); // Close any open submenu when clicking a main menu item
  };

  const menuItems = [
    { title: "Dashboard", link: "/", icon: <LayoutGrid /> },

    { title: "Activity", link: "home", icon: <NotebookTabs /> },
    {
      title: "Products",
      link: "#",
      icon: <Settings />,
      submenu: [
        { title: "General", link: "home" },
        { title: "Security", link: "home" },
      ],
    },
    {
      title: "Categories",
      link: "home",
      icon: <Settings />,
      submenu: [
        { title: "Accessories", link: "home" },
        { title: "Technology", link: "home" },
        { title: "Fashion", link: "home" },
      ],
    },
    {
      title: "Reports",
      link: "home",
      icon: <FileChartColumnIncreasing />,
      submenu: [
        { title: "Daily Reports", link: "home" },
        { title: "Monthly Reports", link: "home" },
      ],
    },
    { title: "Order", link: "home", icon: <FileText /> },
    { title: "Documentaton", link: "home", icon: <CalendarDays /> },
  ];

  return (
    <div
      className={`h-screen dark:bg-surface-300   duration-300 relative border-r-[1px] border-secondary dark:border-surface-400 ${
        isOpen ? "w-20" : "w-72"
      }`}
    >
      <div className="flex py-2  align-middle justify-between items-center mx-2 mt-2">
        <h4 className="font-extrabold text-[20px] text-black px-3">
          <Image src={Logo} />
        </h4>
        <div>
          <button
            className=" text-black outline-none dark:text-white"
            onClick={toggleSidebar}
          >
            {isOpen ? (
              <PanelRightClose className="absolute" />
            ) : (
              <PanelRightOpen />
            )}
          </button>
        </div>
      </div>

      <nav className="mt-5">
        <ul className="">
          {menuItems.map((item, index) => (
            <li key={index} className="mb-5  px-3 relative group ">
              {item.submenu ? (
                <>
                  <div
                    role="button"
                    className={`flex  items-center dark:text-white text-[15px] justify-between w-full  px-4 py-3  rounded-lg text-black font-medium hover:bg-primary dark:hover:bg-surface-400  hover:text-white ${
                      active === index
                        ? "bg-primary dark:bg-surface-400 text-white"
                        : ""
                    }`}
                    onClick={() => toggleSubmenu(index)}
                  >
                    <span className="flex gap-2">
                      <i>{item.icon}</i>
                      {!isOpen && item.title}
                    </span>
                    {activeSubmenuIndex === index ? (
                      <ChevronUp className="w-5 h-5" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </div>

                  {activeSubmenuIndex === index && (
                    <ul
                      className={`${
                        isOpen
                          ? "absolute    left-16 top-0 dark:bg-white  py-3 px-2 shadow-lg rounded-md  w-max group-hover:block hidden"
                          : "ml-7 py-2 "
                      }`}
                    >
                      {item.submenu.map((subItem, subIndex) => (
                        <li key={subIndex} className="">
                          <Link
                            href={subItem.link}
                            className={`block my-4    duration-300 text-[15px]    text-black font-medium hover:text-blue-600  ${
                              active === subIndex ? "text-primary" : ""
                            }`}
                          >
                            {subItem.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <Link
                  href={item.link}
                  onClick={() => handleSelected(index)}
                  className={`flex items-center gap-2 px-4   py-3 text-[15px] dark:text-white rounded-lg text-black font-medium hover:bg-primary hover:text-white dark:hover:bg-surface-400 ${
                    active === index
                      ? "bg-primary dark:bg-surface-400 text-white"
                      : ""
                  }`}
                >
                  <i className="text-[10px]">{item.icon}</i>
                  {!isOpen && item.title}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
