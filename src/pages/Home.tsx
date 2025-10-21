import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export default function Home() {
  const navigate = useNavigate();
  const [destination, setDestination] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('2');

  const handleSearch = () => {
    navigate('/hotels');
  };

  const features = [
    {
      icon: 'Search',
      title: 'Широкий выбор',
      description: 'Более 10,000 отелей по всему миру',
    },
    {
      icon: 'Shield',
      title: 'Безопасность',
      description: 'Гарантия лучшей цены и защита данных',
    },
    {
      icon: 'Clock',
      title: 'Поддержка 24/7',
      description: 'Круглосуточная помощь в любое время',
    },
    {
      icon: 'Star',
      title: 'Отзывы гостей',
      description: 'Реальные отзывы от проверенных гостей',
    },
  ];

  const popularDestinations = [
    {
      name: 'Москва',
      hotels: 250,
      image: 'https://cdn.poehali.dev/projects/d3d2ebf7-2b8a-4e72-9821-edc1997dc600/files/88260247-0de5-42d4-b3b0-85ae87c1bff7.jpg',
    },
    {
      name: 'Сочи',
      hotels: 180,
      image: 'https://cdn.poehali.dev/projects/d3d2ebf7-2b8a-4e72-9821-edc1997dc600/files/fa804dfb-fa6e-4a9e-9f42-e9e968f0d0d3.jpg',
    },
    {
      name: 'Санкт-Петербург',
      hotels: 220,
      image: 'https://cdn.poehali.dev/projects/d3d2ebf7-2b8a-4e72-9821-edc1997dc600/files/f99045da-c191-47fe-9e3e-905aa21f1497.jpg',
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-primary via-secondary to-accent py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 animate-fade-in">
              Найдите идеальный отель
            </h1>
            <p className="text-xl text-white/90 animate-fade-in">
              Бронируйте лучшие номера по выгодным ценам
            </p>
          </div>

          <Card className="max-w-4xl mx-auto shadow-2xl animate-scale-in">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                <div className="space-y-2">
                  <Label htmlFor="destination">Куда едем?</Label>
                  <div className="relative">
                    <Icon name="MapPin" className="absolute left-3 top-3 text-muted-foreground" size={18} />
                    <Input
                      id="destination"
                      placeholder="Город или отель"
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="checkIn">Заезд</Label>
                  <div className="relative">
                    <Icon name="Calendar" className="absolute left-3 top-3 text-muted-foreground" size={18} />
                    <Input
                      id="checkIn"
                      type="date"
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="checkOut">Выезд</Label>
                  <div className="relative">
                    <Icon name="Calendar" className="absolute left-3 top-3 text-muted-foreground" size={18} />
                    <Input
                      id="checkOut"
                      type="date"
                      value={checkOut}
                      onChange={(e) => setCheckOut(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="guests">Гостей</Label>
                  <Select value={guests} onValueChange={setGuests}>
                    <SelectTrigger id="guests">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 гость</SelectItem>
                      <SelectItem value="2">2 гостя</SelectItem>
                      <SelectItem value="3">3 гостя</SelectItem>
                      <SelectItem value="4">4 гостя</SelectItem>
                      <SelectItem value="5">5+ гостей</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Button
                onClick={handleSearch}
                className="w-full bg-gradient-to-r from-primary to-secondary text-white font-semibold py-6 text-lg"
                size="lg"
              >
                <Icon name="Search" className="mr-2" size={20} />
                Найти отель
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Почему выбирают нас
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow border-2 hover:border-primary/20">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={feature.icon as any} className="text-white" size={28} />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Популярные направления
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {popularDestinations.map((dest, index) => (
              <Card key={index} className="overflow-hidden group cursor-pointer hover:shadow-xl transition-all">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-1">{dest.name}</h3>
                    <p className="text-white/90 text-sm">{dest.hotels} отелей</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Готовы к незабываемому путешествию?
          </h2>
          <p className="text-white/90 mb-8 text-lg">
            Забронируйте отель прямо сейчас и получите специальное предложение
          </p>
          <Button
            onClick={handleSearch}
            size="lg"
            className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-6 text-lg"
          >
            Начать поиск
            <Icon name="ArrowRight" className="ml-2" size={20} />
          </Button>
        </div>
      </section>
    </div>
  );
}
