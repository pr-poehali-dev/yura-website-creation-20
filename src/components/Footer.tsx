import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

export default function Footer() {
  return (
    <footer className="bg-primary/5 border-t">
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
              Ваш надежный партнер в поиске идеального размещения
            </p>
          </div>

          <div>
            <h3 className="font-semibold font-heading text-foreground mb-4">Компания</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  О нас
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Вакансии
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Блог
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold font-heading text-foreground mb-4">Поддержка</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Помощь
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Условия
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Конфиденциальность
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold font-heading text-foreground mb-4">Контакты</h3>
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
                <span>Москва, Тверская 1</span>
              </li>
            </ul>
            <div className="flex space-x-3 mt-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Facebook" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Instagram" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Twitter" size={20} />
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