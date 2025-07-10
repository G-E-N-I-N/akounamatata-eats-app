
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { QrCode, Utensils } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  onQRScan: () => void;
}

export const HeroSection = ({ onQRScan }: HeroSectionProps) => {
  // Éléments gastronomiques pour les animations
  const gastronomicElements = [
    { emoji: '🍽️', name: 'Plat traditionnel' },
    { emoji: '🥘', name: 'Tajine épicé' },
    { emoji: '🍖', name: 'Viande grillée' },
    { emoji: '🥗', name: 'Salade fraîche' },
    { emoji: '🍚', name: 'Riz parfumé' },
    { emoji: '🌶️', name: 'Épices africaines' },
    { emoji: '🥭', name: 'Mangue sucrée' },
    { emoji: '🍃', name: 'Herbes fraîches' },
  ];

  return (
    <section className="relative py-20 px-4 min-h-[80vh] flex items-center">
      {/* Floating Elements - Left Side */}
      <div className="absolute left-0 top-0 h-full w-32 pointer-events-none overflow-hidden">
        <div className="animate-[scroll-up_20s_linear_infinite] flex flex-col space-y-8">
          {[...gastronomicElements, ...gastronomicElements].map((element, index) => (
            <div
              key={`left-${index}`}
              className="flex flex-col items-center text-center p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 shadow-lg"
            >
              <span className="text-4xl mb-2">{element.emoji}</span>
              <span className="text-xs text-slate-blue font-medium">{element.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Elements - Right Side */}
      <div className="absolute right-0 top-0 h-full w-32 pointer-events-none overflow-hidden">
        <div className="animate-[scroll-down_25s_linear_infinite] flex flex-col space-y-8">
          {[...gastronomicElements.reverse(), ...gastronomicElements].map((element, index) => (
            <div
              key={`right-${index}`}
              className="flex flex-col items-center text-center p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 shadow-lg"
            >
              <span className="text-4xl mb-2">{element.emoji}</span>
              <span className="text-xs text-slate-blue font-medium">{element.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Main Hero Content */}
      <div className="container mx-auto text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Logo/Brand with floating animation */}
          <div className="mb-8 animate-[float_6s_ease-in-out_infinite]">
            <div className="inline-block p-8 bg-gradient-to-r from-emerald-green/20 to-royal-gold/20 rounded-full backdrop-blur-sm border border-white/30">
              <h1 className="text-5xl md:text-7xl font-bold text-slate-blue mb-2">
                AKOUNAMATATA
              </h1>
            </div>
          </div>
          
          <p className="text-xl md:text-2xl text-emerald-green font-medium mb-4 animate-fade-in">
            "Oublie tes soucis"
          </p>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in animation-delay-200">
            Découvrez une expérience culinaire digitale unique qui célèbre les saveurs authentiques 
            de l'Afrique dans un cadre moderne et convivial.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in animation-delay-400">
            <Button
              size="lg"
              onClick={onQRScan}
              className="bg-emerald-green hover:bg-emerald-green/90 text-white px-8 py-6 text-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <QrCode className="mr-2 h-6 w-6" />
              Scanner QR Code
            </Button>
            
            <Link to="/menu">
              <Button
                size="lg"
                variant="outline"
                className="border-slate-blue text-slate-blue hover:bg-slate-blue hover:text-white px-8 py-6 text-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Utensils className="mr-2 h-6 w-6" />
                Voir le Menu
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
