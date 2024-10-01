import { useState } from "react";
import { Menu, X, Search, User, BellRing, Moon, SunMoon } from "lucide-react"; // Icons for mobile menu, search, and profile

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
    <header>
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="hidden md:flex flex-grow mx-4">
          <div className="relative w-2 md:w-full">
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <Search className="w-5 h-5 text-gray-400" />
            </span>
            <input
              type="text"
              className="block pl-10 p-2 rounded-md text-greyColor ring-1 ring-inset ring-gray-300   text-greycolor placeholder-gray-400  focus-visible:none"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>
        </div>
        <div className="px-3 flex gap-5 text-black ">
          <BellRing />
          {!isDarkmode ? <Moon /> : <SunMoon />}
        </div>
        <div className="ring-1 rounded-full ">
          <img
            className="rounded-full w-10 h-10 object-cover"
            src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="d"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
