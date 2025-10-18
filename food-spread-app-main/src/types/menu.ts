// TIPOS DO CARDÁPIO - Configure aqui a estrutura dos dados

export interface Ingredient {
  id: string;
  name: string;
  price: number; // Preço adicional (0 se incluído por padrão)
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  basePrice: number; // Preço base do item
  image: string;
  category: 'burger' | 'pizza'; // EDITE: adicione mais categorias aqui
  ingredients: Ingredient[];
  defaultIngredients: string[]; // IDs dos ingredientes incluídos por padrão
}

export interface CartItem {
  menuItem: MenuItem;
  selectedIngredients: string[]; // IDs dos ingredientes selecionados
  quantity: number;
  totalPrice: number;
}
