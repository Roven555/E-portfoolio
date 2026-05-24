import { useState } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Avaleht" },
    { path: "/experience", label: "Kogemus" },
    { path: "/contact", label: "Kontakt" },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:block border-b" style={{ borderColor: '#FFB000' }}>
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
      <nav className="md:hidden border-b" style={{ borderColor: '#FFB000' }}>
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