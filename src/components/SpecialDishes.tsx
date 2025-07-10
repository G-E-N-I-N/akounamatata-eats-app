
import React from 'react';
import { Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { dishes } from '@/data/dishes';

export const SpecialDishes = () => {
  const specialDishes = dishes.filter(dish => dish.isSpecialOfDay);

  return (
    <section className="py-16 px-4 bg-white/50 backdrop-blur-sm">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-slate-blue mb-12 animate-fade-in">
          Plats du Jour
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {specialDishes.map((dish, index) => (
            <Card key={dish.id} className="overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-fade-in group" style={{animationDelay: `${index * 150}ms`}}>
              <div className="relative overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-2 right-2 bg-royal-gold text-slate-blue px-3 py-1 rounded-full text-sm font-medium shadow-lg backdrop-blur-sm">
                  <Star className="h-4 w-4 inline mr-1" />
                  Spécial
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-slate-blue mb-2 group-hover:text-emerald-green transition-colors">
                  {dish.name}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {dish.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-emerald-green">
                    {dish.price.toFixed(2)}€
                  </span>
                  <Button className="bg-emerald-green hover:bg-emerald-green/90 hover:scale-105 transition-all duration-300 shadow-lg">
                    Commander
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
