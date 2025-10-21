import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

export default function HotelCard() {
  const navigate = useNavigate();
  const [selectedRoom, setSelectedRoom] = useState<number | null>(null);

  const hotel = {
    name: 'Гранд Отель Империал',
    rating: 4.8,
    reviews: 342,
    location: 'Москва, Центральный район',
    description:
      'Роскошный отель в самом центре города с видом на исторические достопримечательности. Современные номера, отличный сервис и удобное расположение для деловых и туристических поездок.',
    images: [
      'https://cdn.poehali.dev/projects/d3d2ebf7-2b8a-4e72-9821-edc1997dc600/files/f99045da-c191-47fe-9e3e-905aa21f1497.jpg',
      'https://cdn.poehali.dev/projects/d3d2ebf7-2b8a-4e72-9821-edc1997dc600/files/fa804dfb-fa6e-4a9e-9f42-e9e968f0d0d3.jpg',
      'https://cdn.poehali.dev/projects/d3d2ebf7-2b8a-4e72-9821-edc1997dc600/files/88260247-0de5-42d4-b3b0-85ae87c1bff7.jpg',
    ],
    amenities: [
      { icon: 'Wifi', name: 'Wi-Fi' },
      { icon: 'Car', name: 'Парковка' },
      { icon: 'UtensilsCrossed', name: 'Ресторан' },
      { icon: 'Dumbbell', name: 'Фитнес-центр' },
      { icon: 'Waves', name: 'Бассейн' },
      { icon: 'Plane', name: 'Трансфер' },
    ],
  };

  const rooms = [
    {
      id: 1,
      name: 'Стандартный номер',
      price: 5500,
      size: 25,
      guests: 2,
      features: ['Двуспальная кровать', 'Ванная комната', 'Wi-Fi', 'Телевизор'],
    },
    {
      id: 2,
      name: 'Делюкс номер',
      price: 8500,
      size: 35,
      guests: 2,
      features: ['Кровать King-size', 'Ванна и душ', 'Мини-бар', 'Балкон'],
    },
    {
      id: 3,
      name: 'Семейный люкс',
      price: 12500,
      size: 50,
      guests: 4,
      features: ['2 спальни', 'Гостиная', 'Кухня', 'Панорамный вид'],
    },
  ];

  const handleBooking = (roomId: number) => {
    setSelectedRoom(roomId);
    navigate('/booking');
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        <Button
          variant="ghost"
          onClick={() => navigate('/hotels')}
          className="mb-6"
        >
          <Icon name="ArrowLeft" className="mr-2" size={18} />
          Назад к поиску
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardContent className="p-0">
                <Carousel className="w-full">
                  <CarouselContent>
                    {hotel.images.map((image, index) => (
                      <CarouselItem key={index}>
                        <div className="relative h-96 rounded-t-lg overflow-hidden">
                          <img
                            src={image}
                            alt={`${hotel.name} - фото ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-4" />
                  <CarouselNext className="right-4" />
                </Carousel>

                <div className="p-6 space-y-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h1 className="text-3xl font-bold mb-2">{hotel.name}</h1>
                      <div className="flex items-center space-x-2 text-muted-foreground mb-2">
                        <Icon name="MapPin" size={16} />
                        <span>{hotel.location}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center space-x-1">
                        <Icon name="Star" className="text-accent fill-accent" size={20} />
                        <span className="text-2xl font-bold">{hotel.rating}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{hotel.reviews} отзывов</p>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    {hotel.description}
                  </p>

                  <div>
                    <h3 className="font-semibold text-lg mb-3">Удобства</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {hotel.amenities.map((amenity, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                            <Icon name={amenity.icon as any} className="text-primary" size={20} />
                          </div>
                          <span className="text-sm">{amenity.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div>
              <h2 className="text-2xl font-bold mb-4">Доступные номера</h2>
              <div className="space-y-4">
                {rooms.map((room) => (
                  <Card key={room.id} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row justify-between gap-4">
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold mb-2">{room.name}</h3>
                          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-3">
                            <div className="flex items-center">
                              <Icon name="Maximize" className="mr-1" size={16} />
                              {room.size} м²
                            </div>
                            <div className="flex items-center">
                              <Icon name="Users" className="mr-1" size={16} />
                              До {room.guests} гостей
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {room.features.map((feature, index) => (
                              <Badge key={index} variant="secondary">
                                {feature}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div className="flex flex-col items-end justify-between md:min-w-[200px]">
                          <div className="text-right mb-4">
                            <p className="text-sm text-muted-foreground">За ночь от</p>
                            <p className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                              {room.price.toLocaleString()} ₽
                            </p>
                          </div>
                          <Button
                            onClick={() => handleBooking(room.id)}
                            className="w-full bg-gradient-to-r from-primary to-secondary"
                          >
                            Забронировать
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-4">Расположение</h3>
                <div className="aspect-video bg-muted rounded-lg mb-4 flex items-center justify-center">
                  <Icon name="Map" className="text-muted-foreground" size={48} />
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  {hotel.location}
                </p>
                <div className="space-y-3">
                  <div className="flex items-start space-x-2 text-sm">
                    <Icon name="Train" className="text-primary mt-0.5" size={16} />
                    <span>5 мин до метро</span>
                  </div>
                  <div className="flex items-start space-x-2 text-sm">
                    <Icon name="Plane" className="text-primary mt-0.5" size={16} />
                    <span>30 мин до аэропорта</span>
                  </div>
                  <div className="flex items-start space-x-2 text-sm">
                    <Icon name="Building" className="text-primary mt-0.5" size={16} />
                    <span>В центре города</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
