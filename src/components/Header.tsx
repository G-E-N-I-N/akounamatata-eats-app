
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, User, Menu, QrCode, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import { useCart } from '@/contexts/CartContext';
import { AuthModal } from './AuthModal';
import { CartModal } from './CartModal';

export const Header: React.FC = () => {
  const { user, logout } = useAuth();
  const { itemCount } = useCart();
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showCartModal, setShowCartModal] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-full afro-gradient"></div>
            <span className="text-xl font-bold text-slate-blue">AKOUNAMATATA</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/menu" className="text-sm font-medium hover:text-emerald-green transition-colors">
              Menu
            </Link>
            <Button variant="ghost" size="sm" className="text-sm font-medium">
              <QrCode className="h-4 w-4 mr-2" />
              Scanner QR
            </Button>
          </nav>

          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setShowCartModal(true)}
              className="relative"
            >
              <ShoppingCart className="h-5 w-5" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-emerald-green text-white text-xs flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Button>

            {user ? (
              <div className="flex items-center space-x-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => navigate(user.isAdmin ? '/admin' : '/dashboard')}
                >
                  <User className="h-4 w-4 mr-2" />
                  {user.name}
                </Button>
                <Button variant="ghost" size="sm" onClick={handleLogout}>
                  Déconnexion
                </Button>
              </div>
            ) : (
              <Button onClick={() => setShowAuthModal(true)}>
                Connexion
              </Button>
            )}
          </div>
        </div>
      </header>

      <AuthModal open={showAuthModal} onOpenChange={setShowAuthModal} />
      <CartModal open={showCartModal} onOpenChange={setShowCartModal} />
    </>
  );
};
