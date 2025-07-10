
import React from 'react';
import { QrCode, Heart, Calendar } from 'lucide-react';

export const FeaturesSection = () => {
  return (
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
  );
};
