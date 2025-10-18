import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Trash2, Plus, Minus, Send } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { RESTAURANT_NAME, WHATSAPP_NUMBER } from '@/data/menuData';
import { toast } from 'sonner';
import Header from '@/components/Header';

const Checkout = () => {
  const { cart, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [customerName, setCustomerName] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');

  const generateWhatsAppMessage = () => {
    let message = `🍔 *Novo Pedido - ${RESTAURANT_NAME}*\n\n`;
    message += `*Cliente:* ${customerName}\n`;
    message += `*Endereço:* ${customerAddress}\n\n`;
    message += `*Itens do Pedido:*\n`;
    
    cart.forEach((item, index) => {
      message += `\n${index + 1}. *${item.menuItem.name}* (${item.quantity}x)\n`;
      const ingredients = item.menuItem.ingredients
        .filter(ing => item.selectedIngredients.includes(ing.id))
        .map(ing => ing.name)
        .join(', ');
      message += `   Ingredientes: ${ingredients}\n`;
      message += `   Subtotal: R$ ${item.totalPrice.toFixed(2)}\n`;
    });

    message += `\n*TOTAL: R$ ${totalPrice.toFixed(2)}*`;
    
    return encodeURIComponent(message);
  };

  const handleSendOrder = () => {
    if (!customerName.trim()) {
      toast.error('Por favor, informe seu nome');
      return;
    }
    if (!customerAddress.trim()) {
      toast.error('Por favor, informe seu endereço');
      return;
    }

    const generateWhatsAppMessage = () => {
  let message = `🍔 *Novo Pedido - ${RESTAURANT_NAME}*\n\n`;
  message += `*Cliente:* ${customerName}\n`;
  message += `*Endereço:* ${customerAddress}\n\n`;
  message += `*Itens do Pedido:*\n`;
  
  cart.forEach((item, index) => {
    message += `\n${index + 1}. *${item.menuItem.name}* (${item.quantity}x)\n`;
    const ingredients = item.menuItem.ingredients
      .filter(ing => item.selectedIngredients.includes(ing.id))
      .map(ing => ing.name)
      .join(', ');
    message += `   Ingredientes: ${ingredients}\n`;
    message += `   Subtotal: R$ ${item.totalPrice.toFixed(2)}\n`;
  });

  message += `\n*TOTAL: R$ ${totalPrice.toFixed(2)}*`;

  // Aqui você coloca a sua mensagem personalizada
  message += `\n\nAguardo a confirmação 😊`;

  return encodeURIComponent(message);
};

    const whatsappUrl = `https://wa.me/${51997652633}?text=${whatsappMessage}`;
    
    window.open(whatsappUrl, '_blank');
    toast.success('Redirecionando para o WhatsApp...');
    
    // Limpar carrinho após 2 segundos
    setTimeout(() => {
      clearCart();
      navigate('/');
    }, 2000);
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 pt-32 pb-16">
          <Card className="max-w-md mx-auto p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Carrinho Vazio</h2>
            <p className="text-muted-foreground mb-6">
              Adicione itens ao carrinho para continuar
            </p>
            <Button onClick={() => navigate('/')} className="bg-primary hover:bg-primary-hover">
              Ver Cardápio
            </Button>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 pt-32 pb-16">
        <h1 className="text-4xl font-bold mb-8 text-center text-primary">
          Finalizar Pedido
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Itens do Carrinho */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item, index) => (
              <Card key={index} className="p-6 shadow-card">
                <div className="flex gap-4">
                  <img
                    src={item.menuItem.image}
                    alt={item.menuItem.name}
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{item.menuItem.name}</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      Ingredientes: {item.menuItem.ingredients
                        .filter(ing => item.selectedIngredients.includes(ing.id))
                        .map(ing => ing.name)
                        .join(', ')}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => updateQuantity(index, item.quantity - 1)}
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="font-semibold w-8 text-center">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => updateQuantity(index, item.quantity + 1)}
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-xl font-bold text-primary">
                          R$ {item.totalPrice.toFixed(2)}
                        </span>
                        <Button
                          variant="destructive"
                          size="icon"
                          onClick={() => removeFromCart(index)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Resumo e Dados do Cliente */}
          <div className="space-y-6">
            <Card className="p-6 shadow-card sticky top-24">
              <h2 className="text-2xl font-bold mb-6">Seus Dados</h2>
              
              <div className="space-y-4 mb-6">
                <div>
                  <Label htmlFor="name">Nome Completo</Label>
                  <Input
                    id="name"
                    placeholder="Digite seu nome"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="address">Endereço de Entrega</Label>
                  <Input
                    id="address"
                    placeholder="Rua, número, bairro"
                    value={customerAddress}
                    onChange={(e) => setCustomerAddress(e.target.value)}
                  />
                </div>
              </div>

              <div className="border-t pt-4 mb-6">
                <div className="flex justify-between text-lg mb-2">
                  <span>Subtotal:</span>
                  <span>R$ {totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-2xl font-bold text-primary">
                  <span>Total:</span>
                  <span>R$ {totalPrice.toFixed(2)}</span>
                </div>
              </div>

              <Button
                className="w-full bg-secondary hover:bg-secondary/90 text-white"
                size="lg"
                onClick={handleSendOrder}
              >
                <Send className="mr-2 h-5 w-5" />
                Enviar Pedido via WhatsApp
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
