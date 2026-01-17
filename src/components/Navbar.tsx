import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Organizers', href: '#organizers' },
    { name: 'Call for Papers', href: '#call-for-papers' },
    { name: 'Schedule', href: '#schedule' },
    { name: 'Travel', href: '#travel' },
    { name: 'Registration', href: '#registration' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <div className="kk-header-wrapper">
      <nav className={`kk-navbar transition-all duration-300 ${
        isScrolled ? 'bg-[#091F4E] shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="bg-white rounded-lg p-2 flex items-center">
            <img src='/logo.png' className="w-20 text-white"/>
          </div>

          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-white hover:text-[#E56B46] transition-colors duration-200 font-medium"
              >
                {link.name}
              </button>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white p-2"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-[#091F4E] border-t border-[#E56B46]/20">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="block w-full text-left px-4 py-3 text-white hover:bg-[#E56B46]/10 rounded-lg transition-colors duration-200"
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
      )}
      </nav>
      
      {/* Announcement Ticker */}
      <div className="kk-announcement-ticker" role="banner" aria-label="Important announcement">
        <div className="kk-ticker-content">
          <span className="kk-ticker-text">
            Proceedings of 10th International Engineering Symposium will be published with ISBN Number : 978-93-5525-122-0
          </span>
          <span className="kk-ticker-text">
            Proceedings of 10th International Engineering Symposium will be published with ISBN Number : 978-93-5525-122-0
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
