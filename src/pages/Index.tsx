
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-champagne via-background to-champagne">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-slate-blue mb-6">
              AKOUNAMATATA
            </h1>
            <p className="text-xl md:text-2xl text-emerald-green font-medium mb-4">
              "Oublie tes soucis"
            </p>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Découvrez une expérience culinaire digitale unique qui célèbre les saveurs authentiques 
              de l'Afrique dans un cadre moderne et convivial.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                onClick={simulateQRScan}
                className="bg-emerald-green hover:bg-emerald-green/90 text-white px-8 py-6 text-lg"
              >
                <QrCode className="mr-2 h-6 w-6" />
                Scanner QR Code
              </Button>
              
              <Link to="/menu">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-slate-blue text-slate-blue hover:bg-slate-blue hover:text-white px-8 py-6 text-lg"
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
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-lg text-center">
              <div className="w-64 h-64 border-4 border-emerald-green rounded-lg mb-4 flex items-center justify-center">
                <div className="animate-pulse text-emerald-green">
                  <QrCode className="h-24 w-24" />
                </div>
              </div>
              <p className="text-lg font-medium">Scan en cours...</p>
            </div>
          </div>
        )}
      </section>

      {/* Special Dishes */}
      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-blue mb-12">
            Plats du Jour
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {specialDishes.map((dish) => (
              <Card key={dish.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-royal-gold text-slate-blue px-2 py-1 rounded-full text-sm font-medium">
                    <Star className="h-4 w-4 inline mr-1" />
                    Spécial
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-slate-blue mb-2">
                    {dish.name}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {dish.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-emerald-green">
                      {dish.price.toFixed(2)}€
                    </span>
                    <Button className="bg-emerald-green hover:bg-emerald-green/90">
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
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-green rounded-full flex items-center justify-center mx-auto mb-4">
                <QrCode className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-blue mb-2">
                Sans Contact
              </h3>
              <p className="text-muted-foreground">
                Scannez le QR code de votre table pour commander instantanément
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-royal-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-slate-blue" />
              </div>
              <h3 className="text-xl font-semibold text-slate-blue mb-2">
                Saveurs Authentiques
              </h3>
              <p className="text-muted-foreground">
                Découvrez les histoires culturelles de chaque plat traditionnel
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-green rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-blue mb-2">
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
      <section className="py-16 px-4 bg-slate-blue">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Prêt pour une expérience unique ?
          </h2>
          <p className="text-champagne mb-8 max-w-2xl mx-auto">
            Rejoignez-nous pour un voyage culinaire qui éveillera tous vos sens 
            et vous fera découvrir les trésors de la gastronomie africaine.
          </p>
          <Button
            size="lg"
            onClick={handleReservation}
            className="bg-emerald-green hover:bg-emerald-green/90 text-white px-8 py-6 text-lg"
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
