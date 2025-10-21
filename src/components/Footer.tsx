import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-primary/5 to-secondary/5 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <Icon name="Hotel" className="text-white" size={24} />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                HotelBook
              </span>
            </Link>
            <p className="text-muted-foreground text-sm">
              Ваш надежный партнер в поиске идеального отеля для незабываемого отдыха
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Главная
                </Link>
              </li>
              <li>
                <Link to="/hotels" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Отели
                </Link>
              </li>
              <li>
                <Link to="/booking" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Бронирование
                </Link>
              </li>
              <li>
                <Link to="/contacts" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Icon name="Phone" size={16} className="text-primary" />
                <span>+7 (495) 123-45-67</span>
              </li>
              <li className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Icon name="Mail" size={16} className="text-primary" />
                <span>info@hotelbook.ru</span>
              </li>
              <li className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Icon name="MapPin" size={16} className="text-primary" />
                <span>Москва, ул. Примерная, 123</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Социальные сети</h3>
            <div className="flex space-x-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center hover:scale-110 transition-transform"
              >
                <Icon name="Facebook" size={18} className="text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center hover:scale-110 transition-transform"
              >
                <Icon name="Instagram" size={18} className="text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center hover:scale-110 transition-transform"
              >
                <Icon name="Twitter" size={18} className="text-white" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} HotelBook. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}
