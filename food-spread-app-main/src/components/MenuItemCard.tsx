import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Plus, Minus, ShoppingCart } from 'lucide-react';
import { MenuItem } from '@/types/menu';
import { useCart } from '@/contexts/CartContext';
import { toast } from 'sonner';

interface MenuItemCardProps {
  item: MenuItem;
}

const MenuItemCard = ({ item }: MenuItemCardProps) => {
  const { addToCart } = useCart();
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>(item.defaultIngredients);
  const [quantity, setQuantity] = useState(1);

  const toggleIngredient = (ingredientId: string) => {
    setSelectedIngredients((prev) =>
      prev.includes(ingredientId)
        ? prev.filter((id) => id !== ingredientId)
        : [...prev, ingredientId]
    );
  };

  const calculatePrice = () => {
    const ingredientsPrice = item.ingredients
      .filter((ing) => selectedIngredients.includes(ing.id))
      .reduce((sum, ing) => sum + ing.price, 0);
    return (item.basePrice + ingredientsPrice) * quantity;
  };

  const handleAddToCart = () => {
    const totalPrice = calculatePrice();
    addToCart({
      menuItem: item,
      selectedIngredients,
      quantity,
      totalPrice,
    });
    toast.success(`${item.name} adicionado ao carrinho!`);
    setQuantity(1);
  };

  return (
    <Card className="overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 animate-fade-in bg-gradient-card">
      <div className="aspect-square overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2 text-foreground">{item.name}</h3>
        <p className="text-muted-foreground mb-4">{item.description}</p>
        
        <div className="mb-4">
          <h4 className="font-semibold mb-3 text-foreground">Ingredientes:</h4>
          <div className="space-y-2 max-h-48 overflow-y-auto">
            {item.ingredients.map((ingredient) => (
              <div key={ingredient.id} className="flex items-center space-x-2">
                <Checkbox
                  checked={selectedIngredients.includes(ingredient.id)}
                  onCheckedChange={() => toggleIngredient(ingredient.id)}
                  id={`${item.id}-${ingredient.id}`}
                />
                <label
                  htmlFor={`${item.id}-${ingredient.id}`}
                  className="text-sm cursor-pointer flex-1"
                >
                  {ingredient.name}
                  {ingredient.price > 0 && (
                    <span className="text-primary ml-2">
                      +R$ {ingredient.price.toFixed(2)}
                    </span>
                  )}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
            >
              <Minus className="h-4 w-4" />
            </Button>
            <span className="font-semibold text-lg w-8 text-center">{quantity}</span>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setQuantity(quantity + 1)}
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold text-primary">
              R$ {calculatePrice().toFixed(2)}
            </p>
          </div>
        </div>

        <Button
          className="w-full bg-primary hover:bg-primary-hover text-white"
          onClick={handleAddToCart}
        >
          <ShoppingCart className="mr-2 h-5 w-5" />
          Adicionar ao Carrinho
        </Button>
      </div>
    </Card>
  );
};

export default MenuItemCard;
