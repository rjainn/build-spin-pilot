import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <header className="fixed top-0 left-0 right-0 z-[100] bg-white/95 backdrop-blur-md border-b border-gray-200">
      <div className="w-full px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity -ml-2">
            <img 
              src="/simple-logo-black-white.png"
              alt="R&D Venture Studio" 
              className="h-12 w-auto"
            />
              <span className="text-lg font-semibold text-gray-900">
                R&D Venture Studio
              </span>
          </Link>
          
          {/* Navigation */}
          <nav className="flex items-center gap-8">
            <Link 
              to="/" 
              className={`text-base font-semibold tracking-wide transition-colors ${
                isActive('/') 
                  ? 'text-[#13224C]' 
                  : 'text-gray-700 hover:text-[#13224C]'
              }`}
            >
              HOME
            </Link>
            <Link 
              to="/team" 
              className={`text-base font-semibold tracking-wide transition-colors ${
                isActive('/team') 
                  ? 'text-[#13224C]' 
                  : 'text-gray-700 hover:text-[#13224C]'
              }`}
            >
              TEAM
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

