import { useState } from "react";
import { Menu, X, Search, User, BellRing, Moon, SunMoon } from "lucide-react"; // Icons for mobile menu, search, and profile
import AvatarMenu from "../common/AvatarMenu";
import { useTheme } from "@emotion/react";

const Header = ({ toggleSidebar }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isDarkmode, setIsDarkmode] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <header className="border-b-[1px] bg-white dark:text-white dark:bg-surface-300 border-secondary dark:border-surface-400">
      <div className="containe mx-auto flex justify-between items-center p-4">
        <div className="flex justify-between w-full align-middle items-center">
          <div className="hidden relative w-2 md:w-full md:flex end-0">
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <Search className="w-5 h-5 text-gray-400 " size={13} />
            </span>
            <input
              type="text"
              className="block pl-10 dark:bg-transparent text-[14px] p-[5px] bg-secondary rounded-md focus:outline-none text-black dark:text-white ring-[0.5px]   ring-gray-300 dark:bg-surface-300   text-greycolor placeholder-gray-400  focus-visible:none"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>
          <div className="flex">
            <AvatarMenu />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
