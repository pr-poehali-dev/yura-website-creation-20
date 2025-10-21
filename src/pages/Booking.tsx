import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Icon from "@/components/ui/icon";
import { useToast } from "@/hooks/use-toast";

const hotelData: Record<string, any> = {
  "1": { name: "Luxury Beach Resort", price: 15000, location: "Мальдивы" },
  "2": { name: "Grand City Hotel", price: 8000, location: "Москва" },
  "3": { name: "Mountain View Resort", price: 12000, location: "Сочи" }
};

export default function Booking() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const hotel = hotelData[id || "1"];

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    guests: "2",
    roomType: "standard",
    specialRequests: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Бронирование успешно!",
      description: `Ваш номер в ${hotel.name} забронирован. Подтверждение отправлено на ${formData.email}`,
    });

    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const nights = formData.checkIn && formData.checkOut 
    ? Math.ceil((new Date(formData.checkOut).getTime() - new Date(formData.checkIn).getTime()) / (1000 * 60 * 60 * 24))
    : 1;

  const roomPrices: Record<string, number> = {
    standard: hotel.price,
    deluxe: hotel.price * 1.5,
    suite: hotel.price * 2
  };

  const totalPrice = roomPrices[formData.roomType] * nights;

  if (!hotel) {
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="container py-8">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Бронирование номера</h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Данные гостя</CardTitle>
                  <CardDescription>
                    Заполните информацию для бронирования
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">Имя *</Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                          placeholder="Иван"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Фамилия *</Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                          placeholder="Иванов"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="ivan@example.com"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Телефон *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          placeholder="+7 (900) 123-45-67"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="checkIn">Дата заезда *</Label>
                        <Input
                          id="checkIn"
                          name="checkIn"
                          type="date"
                          value={formData.checkIn}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="checkOut">Дата выезда *</Label>
                        <Input
                          id="checkOut"
                          name="checkOut"
                          type="date"
                          value={formData.checkOut}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="guests">Количество гостей *</Label>
                        <select
                          id="guests"
                          name="guests"
                          value={formData.guests}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border rounded-md"
                          required
                        >
                          <option value="1">1 гость</option>
                          <option value="2">2 гостя</option>
                          <option value="3">3 гостя</option>
                          <option value="4">4 гостя</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="roomType">Тип номера *</Label>
                        <select
                          id="roomType"
                          name="roomType"
                          value={formData.roomType}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border rounded-md"
                          required
                        >
                          <option value="standard">Стандартный</option>
                          <option value="deluxe">Делюкс</option>
                          <option value="suite">Люкс</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="specialRequests">Особые пожелания (необязательно)</Label>
                      <textarea
                        id="specialRequests"
                        name="specialRequests"
                        value={formData.specialRequests}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-3 py-2 border rounded-md resize-none"
                        placeholder="Укажите дополнительные пожелания к бронированию..."
                      />
                    </div>

                    <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
                      <Icon name="Info" className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div className="text-sm">
                        <p className="font-medium mb-1">Политика отмены</p>
                        <p className="text-muted-foreground">
                          Бесплатная отмена за 24 часа до заезда. При более поздней отмене взимается плата за 1 ночь.
                        </p>
                      </div>
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      <Icon name="Check" className="mr-2 h-5 w-5" />
                      Подтвердить бронирование
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle>Детали бронирования</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{hotel.name}</h3>
                    <p className="text-sm text-muted-foreground flex items-center gap-1">
                      <Icon name="MapPin" className="h-4 w-4" />
                      {hotel.location}
                    </p>
                  </div>

                  <div className="h-px bg-border" />

                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Тип номера:</span>
                      <span className="font-medium">
                        {formData.roomType === "standard" && "Стандартный"}
                        {formData.roomType === "deluxe" && "Делюкс"}
                        {formData.roomType === "suite" && "Люкс"}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Количество ночей:</span>
                      <span className="font-medium">{nights}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Гостей:</span>
                      <span className="font-medium">{formData.guests}</span>
                    </div>
                  </div>

                  <div className="h-px bg-border" />

                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Цена за ночь:</span>
                      <span>{roomPrices[formData.roomType].toLocaleString()} ₽</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Количество ночей:</span>
                      <span>× {nights}</span>
                    </div>
                  </div>

                  <div className="h-px bg-border" />

                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Итого к оплате:</span>
                    <span className="text-2xl font-bold text-primary">
                      {totalPrice.toLocaleString()} ₽
                    </span>
                  </div>

                  <div className="space-y-2 text-xs text-muted-foreground pt-4">
                    <div className="flex items-start gap-2">
                      <Icon name="Check" className="h-4 w-4 flex-shrink-0" />
                      <span>Бесплатная отмена за 24 часа</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Icon name="Check" className="h-4 w-4 flex-shrink-0" />
                      <span>Подтверждение мгновенно</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Icon name="Check" className="h-4 w-4 flex-shrink-0" />
                      <span>Оплата при заселении</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
