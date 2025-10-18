import { ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { useNavigate } from 'react-router-dom';

const FloatingCart = () => {
  const { totalItems, totalPrice } = useCart();
  const navigate = useNavigate();

  if (totalItems === 0) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-scale-in">
      <Button
        size="lg"
        className="bg-secondary hover:bg-secondary/90 text-white shadow-elevated rounded-full px-6 py-6 flex items-center space-x-3"
        onClick={() => navigate('/checkout')}
      >
        <div className="relative">
          <ShoppingCart className="h-6 w-6" />
          <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
            {totalItems}
          </span>
        </div>
        <div className="text-left">
          <p className="text-xs opacity-90">Ver Carrinho</p>
          <p className="font-bold">R$ {totalPrice.toFixed(2)}</p>
        </div>
      </Button>
    </div>
  );
};

export default FloatingCart;
