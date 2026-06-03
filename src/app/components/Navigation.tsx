import { useState } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/#projects", label: "Projects" },
    { path: "/experience", label: "Experience" },
    { path: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => {
    if (path.includes("#")) {
      const [pathname, hash] = path.split("#");
      return location.pathname === pathname && location.hash === `#${hash}`;
    }

    return location.pathname === path && !location.hash;
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="relative z-20 hidden md:block border-b backdrop-blur-md" style={{ borderColor: '#FFB000', backgroundColor: 'rgba(5, 6, 12, 0.72)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div style={{ fontFamily: 'Space Mono, monospace', color: '#FFB000' }} className="text-xl">
              {'<RP />'}
            </div>
            <div className="flex gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  style={{
                    color: isActive(item.path) ? '#FFB000' : '#FFFFFF',
                    fontFamily: 'Space Mono, monospace',
                  }}
                  className="hover:opacity-80 transition-opacity"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="relative z-20 md:hidden border-b backdrop-blur-md" style={{ borderColor: '#FFB000', backgroundColor: 'rgba(5, 6, 12, 0.72)' }}>
        <div className="px-4">
          <div className="flex justify-between items-center h-16">
            <div style={{ fontFamily: 'Space Mono, monospace', color: '#FFB000' }} className="text-lg">
              {'<RP />'}
            </div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              style={{ color: '#FFB000' }}
              className="p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div style={{ backgroundColor: '#1A1A1A', borderTop: '1px solid #FFB000' }} className="px-4 py-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                style={{
                  color: isActive(item.path) ? '#FFB000' : '#FFFFFF',
                  fontFamily: 'Space Mono, monospace',
                }}
                className="block hover:opacity-80 transition-opacity"
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </>
  );
}
