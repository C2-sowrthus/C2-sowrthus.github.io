
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass py-3 shadow-sm' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link 
          to="/" 
          className="text-xl font-medium tracking-tight transition-colors hover:text-primary"
        >
          <span className="text-primary font-semibold">Memory</span>Garden
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink to="/">Trang chủ</NavLink>
          <NavLink to="/memories">Kỷ niệm</NavLink>
          <NavLink to="/gallery">Bộ sưu tập</NavLink>
          <NavLink to="/friends">Bạn bè</NavLink>
          <Button 
            asChild 
            className="bg-primary/90 hover:bg-primary text-foreground rounded-full px-6"
          >
            <Link to="/add-memory">Thêm kỷ niệm</Link>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-foreground"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`md:hidden absolute top-full left-0 right-0 glass shadow-md transition-all duration-300 ease-in-out overflow-hidden ${
          isMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          <MobileNavLink to="/" onClick={() => setIsMenuOpen(false)}>Trang chủ</MobileNavLink>
          <MobileNavLink to="/memories" onClick={() => setIsMenuOpen(false)}>Kỷ niệm</MobileNavLink>
          <MobileNavLink to="/gallery" onClick={() => setIsMenuOpen(false)}>Bộ sưu tập</MobileNavLink>
          <MobileNavLink to="/friends" onClick={() => setIsMenuOpen(false)}>Bạn bè</MobileNavLink>
          <Button 
            asChild 
            className="bg-primary/90 hover:bg-primary text-foreground rounded-full"
          >
            <Link to="/add-memory" onClick={() => setIsMenuOpen(false)}>Thêm kỷ niệm</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => {
  return (
    <Link 
      to={to} 
      className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors relative after:absolute after:left-0 after:right-0 after:bottom-0 after:h-0.5 after:bg-primary after:scale-x-0 after:origin-right after:transition-transform hover:after:scale-x-100 hover:after:origin-left"
    >
      {children}
    </Link>
  );
};

const MobileNavLink = ({ to, children, onClick }: { to: string; children: React.ReactNode; onClick?: () => void }) => {
  return (
    <Link 
      to={to} 
      className="text-base font-medium py-2 text-foreground/80 hover:text-foreground transition-colors"
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default Navbar;
