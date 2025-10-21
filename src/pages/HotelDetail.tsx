import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const hotelData: Record<string, any> = {
  "1": {
    name: "Luxury Beach Resort",
    location: "Мальдивы",
    price: 15000,
    rating: 4.9,
    reviews: 234,
    description: "Роскошный пляжный курорт на Мальдивах с невероятным видом на океан. Идеальное место для романтического отдыха и незабываемого отпуска.",
    images: [
      "https://cdn.poehali.dev/projects/d3d2ebf7-2b8a-4e72-9821-edc1997dc600/files/616927a1-f325-460b-bd73-44d399bed96c.jpg",
      "https://cdn.poehali.dev/projects/d3d2ebf7-2b8a-4e72-9821-edc1997dc600/files/8b111cd2-e9e2-468d-9816-dd7436d4f387.jpg",
      "https://cdn.poehali.dev/projects/d3d2ebf7-2b8a-4e72-9821-edc1997dc600/files/80c1c74c-5193-4b2e-ae92-01ab5c45e637.jpg"
    ],
    amenities: [
      { icon: "Waves", name: "Частный пляж" },
      { icon: "Dumbbell", name: "Фитнес-центр" },
      { icon: "Wifi", name: "Бесплатный Wi-Fi" },
      { icon: "UtensilsCrossed", name: "Ресторан" },
      { icon: "Sparkles", name: "Спа-центр" },
      { icon: "Car", name: "Парковка" },
      { icon: "Wind", name: "Кондиционер" },
      { icon: "Coffee", name: "Бар" }
    ],
    rooms: [
      {
        type: "Стандартный номер",
        price: 15000,
        size: "32 м²",
        guests: 2,
        features: ["Двуспальная кровать", "Балкон", "Вид на море"]
      },
      {
        type: "Люкс",
        price: 25000,
        size: "55 м²",
        guests: 3,
        features: ["Гостиная зона", "Джакузи", "Панорамный вид"]
      },
      {
        type: "Вилла",
        price: 45000,
        size: "120 м²",
        guests: 4,
        features: ["Частный бассейн", "Кухня", "Терраса"]
      }
    ]
  },
  "2": {
    name: "Grand City Hotel",
    location: "Москва",
    price: 8000,
    rating: 4.7,
    reviews: 187,
    description: "Элегантный отель в центре Москвы. Отличное расположение для деловых поездок и туризма.",
    images: [
      "https://cdn.poehali.dev/projects/d3d2ebf7-2b8a-4e72-9821-edc1997dc600/files/80c1c74c-5193-4b2e-ae92-01ab5c45e637.jpg",
      "https://cdn.poehali.dev/projects/d3d2ebf7-2b8a-4e72-9821-edc1997dc600/files/8b111cd2-e9e2-468d-9816-dd7436d4f387.jpg",
      "https://cdn.poehali.dev/projects/d3d2ebf7-2b8a-4e72-9821-edc1997dc600/files/616927a1-f325-460b-bd73-44d399bed96c.jpg"
    ],
    amenities: [
      { icon: "Wifi", name: "Бесплатный Wi-Fi" },
      { icon: "Dumbbell", name: "Фитнес-центр" },
      { icon: "UtensilsCrossed", name: "Ресторан" },
      { icon: "Car", name: "Парковка" },
      { icon: "Briefcase", name: "Конференц-зал" },
      { icon: "Wind", name: "Кондиционер" }
    ],
    rooms: [
      {
        type: "Стандартный номер",
        price: 8000,
        size: "28 м²",
        guests: 2,
        features: ["Двуспальная кровать", "Рабочая зона", "Вид на город"]
      },
      {
        type: "Делюкс",
        price: 12000,
        size: "40 м²",
        guests: 2,
        features: ["King-size кровать", "Гостиная", "Мини-бар"]
      }
    ]
  },
  "3": {
    name: "Mountain View Resort",
    location: "Сочи",
    price: 12000,
    rating: 4.8,
    reviews: 156,
    description: "Горный курорт с потрясающим видом на Кавказские горы. Идеально для активного отдыха.",
    images: [
      "https://cdn.poehali.dev/projects/d3d2ebf7-2b8a-4e72-9821-edc1997dc600/files/8b111cd2-e9e2-468d-9816-dd7436d4f387.jpg",
      "https://cdn.poehali.dev/projects/d3d2ebf7-2b8a-4e72-9821-edc1997dc600/files/616927a1-f325-460b-bd73-44d399bed96c.jpg",
      "https://cdn.poehali.dev/projects/d3d2ebf7-2b8a-4e72-9821-edc1997dc600/files/80c1c74c-5193-4b2e-ae92-01ab5c45e637.jpg"
    ],
    amenities: [
      { icon: "Sparkles", name: "Спа-центр" },
      { icon: "Dumbbell", name: "Фитнес-центр" },
      { icon: "Coffee", name: "Бар" },
      { icon: "UtensilsCrossed", name: "Ресторан" },
      { icon: "Mountain", name: "Подъемник" },
      { icon: "Car", name: "Парковка" }
    ],
    rooms: [
      {
        type: "Стандартный номер",
        price: 12000,
        size: "35 м²",
        guests: 2,
        features: ["Двуспальная кровать", "Балкон", "Вид на горы"]
      },
      {
        type: "Семейный номер",
        price: 18000,
        size: "50 м²",
        guests: 4,
        features: ["Две спальни", "Кухня", "Терраса"]
      }
    ]
  }
};

export default function HotelDetail() {
  const { id } = useParams();
  const hotel = hotelData[id || "1"];
  const [selectedImage, setSelectedImage] = useState(0);

  if (!hotel) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Отель не найден</h1>
            <Link to="/">
              <Button>Вернуться на главную</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="container py-8">
        <Link to="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-6">
          <Icon name="ArrowLeft" className="mr-2 h-4 w-4" />
          Назад к поиску
        </Link>

        <div className="mb-8">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h1 className="text-4xl font-bold mb-2">{hotel.name}</h1>
              <div className="flex items-center gap-4 text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Icon name="MapPin" className="h-4 w-4" />
                  {hotel.location}
                </span>
                <span className="flex items-center gap-1">
                  <Icon name="Star" className="h-4 w-4 fill-current text-yellow-500" />
                  {hotel.rating} ({hotel.reviews} отзывов)
                </span>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm text-muted-foreground">От</div>
              <div className="text-3xl font-bold text-primary">
                {hotel.price.toLocaleString()} ₽
              </div>
              <div className="text-sm text-muted-foreground">за ночь</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-8">
          <div className="lg:col-span-2">
            <div className="rounded-lg overflow-hidden mb-4">
              <img
                src={hotel.images[selectedImage]}
                alt={hotel.name}
                className="w-full h-96 object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {hotel.images.map((image: string, index: number) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === index ? "border-primary" : "border-transparent"
                  }`}
                >
                  <img
                    src={image}
                    alt={`${hotel.name} ${index + 1}`}
                    className="w-full h-24 object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Забронировать номер</CardTitle>
              <CardDescription>Выберите даты и тип номера</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Заезд</label>
                <input type="date" className="w-full px-3 py-2 border rounded-md" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Выезд</label>
                <input type="date" className="w-full px-3 py-2 border rounded-md" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Гостей</label>
                <select className="w-full px-3 py-2 border rounded-md">
                  <option>1 гость</option>
                  <option>2 гостя</option>
                  <option>3 гостя</option>
                  <option>4 гостя</option>
                </select>
              </div>
              <Link to={`/booking/${id}`}>
                <Button className="w-full" size="lg">
                  Забронировать сейчас
                </Button>
              </Link>
              <p className="text-xs text-center text-muted-foreground">
                Бесплатная отмена за 24 часа до заезда
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">Описание</h2>
              <p className="text-muted-foreground leading-relaxed">
                {hotel.description}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Удобства</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {hotel.amenities.map((amenity: any, index: number) => (
                  <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                    <Icon name={amenity.icon} className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium">{amenity.name}</span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Доступные номера</h2>
              <div className="space-y-4">
                {hotel.rooms.map((room: any, index: number) => (
                  <Card key={index}>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-xl">{room.type}</CardTitle>
                          <CardDescription className="flex items-center gap-4 mt-2">
                            <span className="flex items-center gap-1">
                              <Icon name="Maximize2" className="h-4 w-4" />
                              {room.size}
                            </span>
                            <span className="flex items-center gap-1">
                              <Icon name="Users" className="h-4 w-4" />
                              До {room.guests} гостей
                            </span>
                          </CardDescription>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-primary">
                            {room.price.toLocaleString()} ₽
                          </div>
                          <div className="text-sm text-muted-foreground">за ночь</div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {room.features.map((feature: string, i: number) => (
                          <Badge key={i} variant="secondary">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </div>

          <div>
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle>Важная информация</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm">
                <div className="flex gap-3">
                  <Icon name="Clock" className="h-5 w-5 text-primary flex-shrink-0" />
                  <div>
                    <div className="font-medium">Время заезда</div>
                    <div className="text-muted-foreground">После 14:00</div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Icon name="Clock" className="h-5 w-5 text-primary flex-shrink-0" />
                  <div>
                    <div className="font-medium">Время выезда</div>
                    <div className="text-muted-foreground">До 12:00</div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Icon name="CreditCard" className="h-5 w-5 text-primary flex-shrink-0" />
                  <div>
                    <div className="font-medium">Оплата</div>
                    <div className="text-muted-foreground">Наличные, карты</div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Icon name="XCircle" className="h-5 w-5 text-primary flex-shrink-0" />
                  <div>
                    <div className="font-medium">Отмена</div>
                    <div className="text-muted-foreground">Бесплатно за 24 часа</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
