import Hero from '@/components/Hero';
import Header from '@/components/Header';
import MenuItemCard from '@/components/MenuItemCard';
import FloatingCart from '@/components/FloatingCart';
import { menuItems } from '@/data/menuData';

const Menu = () => {
  const burgers = menuItems.filter((item) => item.category === 'burger');
  const pizzas = menuItems.filter((item) => item.category === 'pizza');

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      
      <main id="menu" className="container mx-auto px-4 py-16">
        {/* Seção de Lanches */}
        {burgers.length > 0 && (
          <section className="mb-16">
            <h2 className="text-4xl font-bold mb-8 text-center text-primary">
              🍔 Lanches
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {burgers.map((item) => (
                <MenuItemCard key={item.id} item={item} />
              ))}
            </div>
          </section>
        )}

        {/* Seção de Pizzas */}
        {pizzas.length > 0 && (
          <section className="mb-16">
            <h2 className="text-4xl font-bold mb-8 text-center text-primary">
              🍕 Pizzas
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pizzas.map((item) => (
                <MenuItemCard key={item.id} item={item} />
              ))}
            </div>
          </section>
        )}
      </main>

      <FloatingCart />
    </div>
  );
};

export default Menu;
