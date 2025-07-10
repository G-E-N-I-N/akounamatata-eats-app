
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { QrCode, Utensils, Calendar, Heart, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Header } from '@/components/Header';
import { useAuth } from '@/contexts/AuthContext';
import { AuthModal } from '@/components/AuthModal';
import { dishes } from '@/data/dishes';

const Index = () => {
  const { isAuthenticated } = useAuth();
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showQRScanner, setShowQRScanner] = useState(false);

  const specialDishes = dishes.filter(dish => dish.isSpecialOfDay);

  const handleReservation = () => {
    if (!isAuthenticated) {
      setShowAuthModal(true);
    } else {
      // Simulate reservation
      alert('Réservation en cours...');
    }
  };

  const simulateQRScan = () => {
    setShowQRScanner(true);
    setTimeout(() => {
      setShowQRScanner(false);
      alert('Table #5 détectée ! Vous pouvez maintenant commander.');
    }, 2000);
  };

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
    <div className="min-h-screen bg-gradient-to-br from-champagne via-background to-champagne overflow-hidden">
      <Header />
      
      {/* Hero Section with Floating Elements */}
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
                onClick={simulateQRScan}
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

        {/* QR Scanner Simulation */}
        {showQRScanner && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 backdrop-blur-sm">
            <div className="bg-white p-8 rounded-2xl text-center shadow-2xl border border-white/20">
              <div className="w-64 h-64 border-4 border-emerald-green rounded-2xl mb-4 flex items-center justify-center bg-gradient-to-br from-emerald-green/10 to-royal-gold/10">
                <div className="animate-pulse text-emerald-green">
                  <QrCode className="h-24 w-24" />
                </div>
              </div>
              <p className="text-lg font-medium text-slate-blue">Scan en cours...</p>
              <div className="flex justify-center mt-4">
                <div className="w-8 h-8 border-2 border-emerald-green border-t-transparent rounded-full animate-spin"></div>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Special Dishes */}
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

      {/* Features */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center group hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-green to-emerald-green/80 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300">
                <QrCode className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-blue mb-2 group-hover:text-emerald-green transition-colors">
                Sans Contact
              </h3>
              <p className="text-muted-foreground">
                Scannez le QR code de votre table pour commander instantanément
              </p>
            </div>
            
            <div className="text-center group hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-royal-gold to-royal-gold/80 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300">
                <Heart className="h-8 w-8 text-slate-blue" />
              </div>
              <h3 className="text-xl font-semibold text-slate-blue mb-2 group-hover:text-royal-gold transition-colors">
                Saveurs Authentiques
              </h3>
              <p className="text-muted-foreground">
                Découvrez les histoires culturelles de chaque plat traditionnel
              </p>
            </div>
            
            <div className="text-center group hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-green to-emerald-green/80 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300">
                <Calendar className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-blue mb-2 group-hover:text-emerald-green transition-colors">
                Réservation Facile
              </h3>
              <p className="text-muted-foreground">
                Réservez votre table en quelques clics depuis l'application
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-slate-blue to-slate-blue/90 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-3xl font-bold text-white mb-6 animate-fade-in">
            Prêt pour une expérience unique ?
          </h2>
          <p className="text-champagne mb-8 max-w-2xl mx-auto animate-fade-in animation-delay-200">
            Rejoignez-nous pour un voyage culinaire qui éveillera tous vos sens 
            et vous fera découvrir les trésors de la gastronomie africaine.
          </p>
          <Button
            size="lg"
            onClick={handleReservation}
            className="bg-emerald-green hover:bg-emerald-green/90 text-white px-8 py-6 text-lg hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-emerald-green/25 animate-fade-in animation-delay-400"
          >
            <Calendar className="mr-2 h-6 w-6" />
            Réserver une Table
          </Button>
        </div>
      </section>

      <AuthModal open={showAuthModal} onOpenChange={setShowAuthModal} />
    </div>
  );
};

export default Index;
