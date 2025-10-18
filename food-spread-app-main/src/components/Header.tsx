import { ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { useNavigate, useLocation } from 'react-router-dom';
import { RESTAURANT_NAME } from '@/data/menuData';

const Header = () => {
  const { totalItems } = useCart();
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <header className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-sm shadow-md z-40">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <h1 
          className="text-2xl md:text-3xl font-bold text-primary cursor-pointer"
          onClick={() => navigate('/')}
        >
          {RESTAURANT_NAME}
        </h1>
        
        {!isHome && (
          <Button
            variant="ghost"
            className="relative"
            onClick={() => navigate('/')}
          >
            Voltar ao Cardápio
          </Button>
        )}

        {totalItems > 0 && (
          <Button
            variant="outline"
            className="relative"
            onClick={() => navigate('/checkout')}
          >
            <ShoppingCart className="h-5 w-5 mr-2" />
            Carrinho
            <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
              {totalItems}
            </span>
          </Button>
        )}
      </div>
    </header>
  );
};

export default Header;
