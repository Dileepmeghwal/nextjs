import { BsGrid } from "react-icons/bs";

const menuItems = [
  {
    title: "Deshboard",
    icon: <BsGrid />,
    path: "/",
  },
  {
    title: "Deshboard",
    icon: <BsGrid />,
    path: "/",
  },
  {
    title: "Deshboard",
    icon: <BsGrid />,
    path: "/",
  },
  {
    title: "Deshboard",
    icon: <BsGrid />,
    path: "/",
  },
  {
    title: "Deshboard",
    icon: <BsGrid />,
    path: "/",
  },
];

const Menu = () => {
  return (
    <div className="p-2 w-full ">
      {menuItems.map((menu, i) => (
        <div className="flex items-center gap-2 mb-5  p-2 rounded-md  hover:bg-primary hover:text-[#ddd]">
          <i>{menu.icon}</i>
          <span>{menu.title}</span>
        </div>
      ))}
    </div>
  );
};
export default Menu;
