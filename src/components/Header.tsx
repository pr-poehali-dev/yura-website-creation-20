import { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <Icon name="Hotel" className="text-white" size={24} />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              HotelBook
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-foreground hover:text-primary transition-colors font-medium">
              Главная
            </Link>
            <Link to="/hotels" className="text-foreground hover:text-primary transition-colors font-medium">
              Отели
            </Link>
            <Link to="/contacts" className="text-foreground hover:text-primary transition-colors font-medium">
              Контакты
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <Icon name="User" className="mr-2" size={18} />
              Войти
            </Button>
            <Button size="sm" className="bg-gradient-to-r from-primary to-secondary">
              Забронировать
            </Button>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Icon name={mobileMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4 animate-fade-in">
            <Link
              to="/"
              className="block py-2 text-foreground hover:text-primary transition-colors font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Главная
            </Link>
            <Link
              to="/hotels"
              className="block py-2 text-foreground hover:text-primary transition-colors font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Отели
            </Link>
            <Link
              to="/contacts"
              className="block py-2 text-foreground hover:text-primary transition-colors font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Контакты
            </Link>
            <div className="pt-4 space-y-2">
              <Button variant="ghost" className="w-full">
                <Icon name="User" className="mr-2" size={18} />
                Войти
              </Button>
              <Button className="w-full bg-gradient-to-r from-primary to-secondary">
                Забронировать
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
