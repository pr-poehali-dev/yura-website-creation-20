import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";
import { useToast } from "@/hooks/use-toast";

export default function Booking() {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const bookingDetails = {
    hotel: 'Гранд Отель Империал',
    room: 'Делюкс номер',
    price: 8500,
  };

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    specialRequests: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Бронирование успешно!",
      description: 'Мы отправили подтверждение на вашу электронную почту.',
    });

    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const nights = formData.checkIn && formData.checkOut 
    ? Math.ceil((new Date(formData.checkOut).getTime() - new Date(formData.checkIn).getTime()) / (1000 * 60 * 60 * 24))
    : 3;

  const total = bookingDetails.price * nights;

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        <Button
          variant="ghost"
          onClick={() => navigate(-1)}
          className="mb-6"
        >
          <Icon name="ArrowLeft" className="mr-2" size={18} />
          Назад
        </Button>

        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Оформление бронирования
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Данные гостя</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">Имя *</Label>
                      <Input
                        id="firstName"
                        placeholder="Иван"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Фамилия *</Label>
                      <Input
                        id="lastName"
                        placeholder="Иванов"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <div className="relative">
                      <Icon name="Mail" className="absolute left-3 top-3 text-muted-foreground" size={18} />
                      <Input
                        id="email"
                        type="email"
                        placeholder="ivan@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Телефон *</Label>
                    <div className="relative">
                      <Icon name="Phone" className="absolute left-3 top-3 text-muted-foreground" size={18} />
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+7 (900) 123-45-67"
                        value={formData.phone}
                        onChange={handleChange}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <Separator />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="checkIn">Дата заезда *</Label>
                      <div className="relative">
                        <Icon name="Calendar" className="absolute left-3 top-3 text-muted-foreground" size={18} />
                        <Input
                          id="checkIn"
                          type="date"
                          value={formData.checkIn}
                          onChange={handleChange}
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="checkOut">Дата выезда *</Label>
                      <div className="relative">
                        <Icon name="Calendar" className="absolute left-3 top-3 text-muted-foreground" size={18} />
                        <Input
                          id="checkOut"
                          type="date"
                          value={formData.checkOut}
                          onChange={handleChange}
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="specialRequests">Особые пожелания</Label>
                    <textarea
                      id="specialRequests"
                      placeholder="Расскажите о ваших предпочтениях (опционально)"
                      value={formData.specialRequests}
                      onChange={handleChange}
                      className="w-full min-h-24 px-3 py-2 rounded-md border border-input bg-background text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary to-secondary text-lg py-6"
                    size="lg"
                  >
                    <Icon name="CreditCard" className="mr-2" size={20} />
                    Перейти к оплате
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
                    <h3 className="font-semibold text-lg mb-1">{bookingDetails.hotel}</h3>
                    <p className="text-sm text-muted-foreground flex items-center gap-1">
                      <Icon name="MapPin" className="h-4 w-4" />
                      Москва, Центр
                    </p>
                  </div>

                  <div className="h-px bg-border" />

                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Тип номера:</span>
                      <span className="font-medium">{bookingDetails.room}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Количество ночей:</span>
                      <span className="font-medium">{nights}</span>
                    </div>
                  </div>

                  <div className="h-px bg-border" />

                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Цена за ночь:</span>
                      <span>{bookingDetails.price.toLocaleString()} ₽</span>
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
                      {total.toLocaleString()} ₽
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
    </div>
  );
}