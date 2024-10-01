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
    { title: "Dashboard", link: "home", icon: <LayoutGrid /> },
    { title: "Profile", link: "profile", icon: <UserPen /> },
    {
      title: "Settings",
      link: "#",
      icon: <Settings />,
      submenu: [
        { title: "General", link: "#" },
        { title: "Security", link: "#" },
      ],
    },
    {
      title: "Reports",
      link: "#",
      icon: <FileChartColumnIncreasing />,
      submenu: [
        { title: "Daily Reports", link: "#" },
        { title: "Monthly Reports", link: "#" },
      ],
    },
    { title: "Billing", link: "#", icon: <FileText /> },
    { title: "Attendance", link: "#", icon: <CalendarDays /> },
    { title: "Invoices", link: "#", icon: <NotebookTabs /> },
    { title: "Paupee", link: "#", icon: <CreditCard /> },
  ];

  return (
    <div
      className={`h-screen text-white duration-300 relative border-r-[1px] border-greyColor ${
        isOpen ? "w-16" : "w-72"
      }`}
    >
      <div className="flex py-2  align-middle justify-between items-center mx-2 mt-2">
        <h4 className="font-extrabold text-[20px] text-black px-3">
          {!isOpen ? "Xdfk" : ""}
        </h4>
        <div>
          <button className=" text-black outline-none" onClick={toggleSidebar}>
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
            <li key={index} className="mb-5 px-3 relative group">
              {item.submenu ? (
                <>
                  <div
                    role="button"
                    className={`flex items-center justify-between w-full p-2 rounded text-black font-medium hover:bg-primary hover:text-white ${
                      active === index ? "bg-primary text-white" : ""
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

                  {/* Submenu handling for both collapsed and expanded sidebar */}
                  {activeSubmenuIndex === index && (
                    <ul
                      className={`${
                        isOpen
                          ? "absolute left-16 top-0 bg-white py-3 px-2 shadow-lg rounded-md  w-max group-hover:block hidden"
                          : "ml-4 m-2 p-2 "
                      }`}
                    >
                      {item.submenu.map((subItem, subIndex) => (
                        <li key={subIndex} className="">
                          <Link
                            href={subItem.link}
                            className={`block text-sm rounded-lg text-black font-medium hover:text-blue-600 ${
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
                <a
                  href={item.link}
                  onClick={() => handleSelected(index)}
                  className={`flex gap-2 p-2 rounded text-black font-medium hover:bg-primary hover:text-white ${
                    active === index ? "bg-primary text-white" : ""
                  }`}
                >
                  <i className="text-[10px]">{item.icon}</i>
                  {!isOpen && item.title}
                </a>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
