import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Icon name="Hotel" className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">HotelBook</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
            Главная
          </a>
          <a href="#hotels" className="text-sm font-medium hover:text-primary transition-colors">
            Отели
          </a>
          <a href="#faq" className="text-sm font-medium hover:text-primary transition-colors">
            FAQ
          </a>
          <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
            Контакты
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" className="hidden md:flex">
            <Icon name="User" className="h-4 w-4 mr-2" />
            Войти
          </Button>
          <Button size="sm">
            Забронировать
          </Button>
        </div>
      </div>
    </header>
  );
}