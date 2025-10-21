import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import Icon from "@/components/ui/icon";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const hotels = [
  {
    id: 1,
    name: "Grand Hotel Plaza",
    location: "Москва, Центр",
    price: 12500,
    oldPrice: 18000,
    discount: 30,
    rating: 4.8,
    reviews: 234,
    image: "https://cdn.poehali.dev/projects/d3d2ebf7-2b8a-4e72-9821-edc1997dc600/files/c7dfaa0f-6c10-4d7e-b8e0-3721d641344f.jpg",
    amenities: ["WiFi", "Бассейн", "Парковка", "Ресторан"],
    description: "Роскошный отель в самом сердце столицы с панорамным видом на город"
  },
  {
    id: 2,
    name: "Sky View Resort",
    location: "Сочи, Побережье",
    price: 15000,
    oldPrice: 22000,
    discount: 32,
    rating: 4.9,
    reviews: 189,
    image: "https://cdn.poehali.dev/projects/d3d2ebf7-2b8a-4e72-9821-edc1997dc600/files/dd27dfa9-e80f-4343-bb1b-3f671c97e2f9.jpg",
    amenities: ["WiFi", "Спа", "Фитнес", "Пляж"],
    description: "Современный курортный отель с собственным пляжем и спа-центром"
  },
  {
    id: 3,
    name: "City Business Hotel",
    location: "Санкт-Петербург, Невский",
    price: 8900,
    oldPrice: 13500,
    discount: 34,
    rating: 4.6,
    reviews: 312,
    image: "https://cdn.poehali.dev/projects/d3d2ebf7-2b8a-4e72-9821-edc1997dc600/files/db7c4e11-0edf-4d40-99d5-62fa6db3796c.jpg",
    amenities: ["WiFi", "Конференц-зал", "Парковка"],
    description: "Удобный бизнес-отель рядом с основными достопримечательностями"
  }
];

const faqs = [
  {
    question: "Как забронировать номер?",
    answer: "Выберите понравившийся отель, укажите даты заезда и выезда, количество гостей и нажмите кнопку 'Забронировать'. Следуйте инструкциям для завершения бронирования."
  },
  {
    question: "Можно ли отменить бронирование?",
    answer: "Да, вы можете отменить бронирование бесплатно за 48 часов до даты заезда. Условия отмены могут отличаться в зависимости от выбранного тарифа."
  },
  {
    question: "Какие способы оплаты доступны?",
    answer: "Мы принимаем оплату банковскими картами (Visa, MasterCard, МИР), электронными кошельками и банковскими переводами."
  },
  {
    question: "Есть ли программа лояльности?",
    answer: "Да, при регистрации вы автоматически становитесь участником нашей программы лояльности и получаете бонусы за каждое бронирование."
  }
];

export default function Index() {
  const [priceRange, setPriceRange] = useState([5000, 20000]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-accent/10 py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold">
              Найдите идеальный отель для вашего отдыха
            </h1>
            <p className="text-lg text-muted-foreground">
              Тысячи отелей по всему миру. Лучшие цены и удобное бронирование
            </p>
            <div className="flex items-center justify-center gap-6 flex-wrap">
              <div className="flex items-center gap-2 bg-primary/10 px-6 py-3 rounded-full">
                <Icon name="TrendingDown" className="h-5 w-5 text-primary" />
                <span className="font-semibold text-primary">Цены ниже на 30-40%</span>
              </div>
              <div className="flex items-center gap-2 bg-accent/10 px-6 py-3 rounded-full">
                <Icon name="DollarSign" className="h-5 w-5 text-accent" />
                <span className="font-semibold text-accent">Без скрытых комиссий</span>
              </div>
            </div>

            <Card className="mt-8">
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="space-y-2">
                    <Label>Город или отель</Label>
                    <Input placeholder="Куда едем?" />
                  </div>
                  <div className="space-y-2">
                    <Label>Заезд</Label>
                    <Input type="date" />
                  </div>
                  <div className="space-y-2">
                    <Label>Выезд</Label>
                    <Input type="date" />
                  </div>
                  <div className="space-y-2">
                    <Label>Гостей</Label>
                    <Select defaultValue="2">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 гость</SelectItem>
                        <SelectItem value="2">2 гостя</SelectItem>
                        <SelectItem value="3">3 гостя</SelectItem>
                        <SelectItem value="4">4 гостя</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <Button className="w-full mt-6" size="lg">
                  <Icon name="Search" className="mr-2 h-5 w-5" />
                  Найти отели
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-8">
            <aside className="lg:w-80 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Фильтры</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    <Label>Цена за ночь: {priceRange[0]} - {priceRange[1]} ₽</Label>
                    <Slider
                      value={priceRange}
                      onValueChange={setPriceRange}
                      min={1000}
                      max={50000}
                      step={1000}
                      className="mt-2"
                    />
                  </div>

                  <div className="space-y-3">
                    <Label>Рейтинг</Label>
                    <Select defaultValue="all">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Любой</SelectItem>
                        <SelectItem value="4.5">4.5+ звезд</SelectItem>
                        <SelectItem value="4.0">4.0+ звезд</SelectItem>
                        <SelectItem value="3.5">3.5+ звезд</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-3">
                    <Label>Удобства</Label>
                    <div className="space-y-2">
                      {["Бассейн", "Спа", "Ресторан", "Wi-Fi", "Парковка"].map((amenity) => (
                        <label key={amenity} className="flex items-center gap-2 cursor-pointer">
                          <input type="checkbox" className="rounded border-gray-300" />
                          <span className="text-sm">{amenity}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <Button className="w-full" variant="outline">
                    Сбросить фильтры
                  </Button>
                </CardContent>
              </Card>
            </aside>

            <div className="flex-1">
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-2xl font-bold">Найдено {hotels.length} отелей</h2>
                <Select defaultValue="popular">
                  <SelectTrigger className="w-48">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="popular">Популярные</SelectItem>
                    <SelectItem value="price-low">Сначала дешевле</SelectItem>
                    <SelectItem value="price-high">Сначала дороже</SelectItem>
                    <SelectItem value="rating">По рейтингу</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid gap-6" id="hotels">
                {hotels.map((hotel) => (
                  <Card key={hotel.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in">
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-80 h-64 md:h-auto overflow-hidden">
                        <img
                          src={hotel.image}
                          alt={hotel.name}
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                        />
                      </div>
                      <div className="flex-1 flex flex-col">
                        <CardHeader>
                          <div className="flex items-start justify-between">
                            <div>
                              <CardTitle className="text-xl font-heading">{hotel.name}</CardTitle>
                              <CardDescription className="flex items-center gap-1 mt-1">
                                <Icon name="MapPin" className="h-4 w-4" />
                                {hotel.location}
                              </CardDescription>
                            </div>
                            <div className="flex items-center gap-1 bg-primary text-primary-foreground px-3 py-1 rounded-full">
                              <Icon name="Star" className="h-4 w-4 fill-current" />
                              <span className="font-semibold">{hotel.rating}</span>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent className="flex-1">
                          <p className="text-sm text-muted-foreground mb-4">{hotel.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {hotel.amenities.map((amenity) => (
                              <span
                                key={amenity}
                                className="px-3 py-1 bg-secondary rounded-full text-sm"
                              >
                                {amenity}
                              </span>
                            ))}
                          </div>
                        </CardContent>
                        <CardFooter className="flex items-center justify-between border-t pt-4">
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-sm text-muted-foreground line-through">
                                {hotel.oldPrice.toLocaleString()} ₽
                              </span>
                              <span className="bg-destructive text-destructive-foreground text-xs font-bold px-2 py-1 rounded">
                                -{hotel.discount}%
                              </span>
                            </div>
                            <div className="text-2xl font-bold text-primary font-heading">
                              {hotel.price.toLocaleString()} ₽
                            </div>
                            <div className="text-sm text-muted-foreground">
                              за ночь · <Icon name="MessageCircle" className="inline h-3 w-3 mr-1" />{hotel.reviews} отзывов
                            </div>
                          </div>
                          <Button size="lg">
                            <Icon name="Calendar" className="mr-2 h-4 w-4" />
                            Забронировать
                          </Button>
                        </CardFooter>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="py-16 bg-muted/30">
        <div className="container max-w-3xl">
          <h2 className="text-4xl font-bold font-heading text-center mb-12">Часто задаваемые вопросы</h2>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg px-6 border-0 shadow-sm">
                <AccordionTrigger className="text-left font-heading hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="contact" className="py-16">
        <div className="container max-w-2xl">
          <h2 className="text-4xl font-bold font-heading text-center mb-4">Остались вопросы?</h2>
          <p className="text-center text-muted-foreground mb-8">
            Свяжитесь с нами, и мы поможем подобрать идеальный вариант
          </p>
          
          <Card>
            <CardHeader>
              <CardTitle className="font-heading">Форма обратной связи</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="contact-name">Ваше имя</Label>
                <Input id="contact-name" placeholder="Иван Иванов" className="mt-2" />
              </div>
              <div>
                <Label htmlFor="contact-email">Email</Label>
                <Input id="contact-email" type="email" placeholder="ivan@example.com" className="mt-2" />
              </div>
              <div>
                <Label htmlFor="contact-message">Сообщение</Label>
                <Input id="contact-message" placeholder="Ваш вопрос..." className="mt-2" />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full" size="lg">
                <Icon name="Send" size={18} className="mr-2" />
                Отправить сообщение
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}