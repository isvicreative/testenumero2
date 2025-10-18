// DADOS DO CARDÁPIO - Edite aqui para mudar produtos, preços e ingredientes

import { MenuItem } from '@/types/menu';
import burgerClassic from '@/assets/burger-classic.jpg';
import burgerBacon from '@/assets/burger-bacon.jpg';
import pizzaMargherita from '@/assets/pizza-margherita.jpg';
import pizzaPepperoni from '@/assets/pizza-pepperoni.jpg';

export const RESTAURANT_NAME = "Sabor & Arte"; // EDITE: Nome do restaurante
export const WHATSAPP_NUMBER = "5511999999999"; // EDITE: Número do WhatsApp (com código do país)

export const menuItems: MenuItem[] = [
  // ========== LANCHES ==========
  {
    id: 'burger-classic',
    name: 'Burger Clássico', // EDITE: Nome do produto
    description: 'Hambúrguer suculento com os ingredientes tradicionais', // EDITE: Descrição
    basePrice: 25.90, // EDITE: Preço base
    image: burgerClassic, // EDITE: Troque a imagem se necessário
    category: 'burger',
    ingredients: [
      { id: 'meat', name: 'Carne (180g)', price: 0 },
      { id: 'cheese', name: 'Queijo', price: 0 },
      { id: 'lettuce', name: 'Alface', price: 0 },
      { id: 'tomato', name: 'Tomate', price: 0 },
      { id: 'onion', name: 'Cebola', price: 0 },
      { id: 'pickle', name: 'Picles', price: 0 },
      { id: 'bacon', name: 'Bacon', price: 5.00 }, // EDITE: Ingrediente adicional
      { id: 'egg', name: 'Ovo', price: 3.00 }, // EDITE: Ingrediente adicional
    ],
    defaultIngredients: ['meat', 'cheese', 'lettuce', 'tomato', 'onion', 'pickle'], // EDITE: Ingredientes incluídos
  },
  {
    id: 'burger-bacon',
    name: 'Burger Bacon Especial',
    description: 'Hambúrguer com muito bacon crocante e queijo derretido',
    basePrice: 32.90,
    image: burgerBacon,
    category: 'burger',
    ingredients: [
      { id: 'meat', name: 'Carne (180g)', price: 0 },
      { id: 'cheese', name: 'Queijo Cheddar', price: 0 },
      { id: 'bacon', name: 'Bacon', price: 0 },
      { id: 'lettuce', name: 'Alface', price: 0 },
      { id: 'tomato', name: 'Tomate', price: 0 },
      { id: 'onion', name: 'Cebola Caramelizada', price: 0 },
      { id: 'egg', name: 'Ovo', price: 3.00 },
      { id: 'extra-bacon', name: 'Bacon Extra', price: 6.00 },
    ],
    defaultIngredients: ['meat', 'cheese', 'bacon', 'lettuce', 'tomato', 'onion'],
  },
  
  // ========== PIZZAS ==========
  {
    id: 'pizza-margherita',
    name: 'Pizza Margherita',
    description: 'A clássica pizza italiana com molho de tomate, mussarela e manjericão',
    basePrice: 45.90,
    image: pizzaMargherita,
    category: 'pizza',
    ingredients: [
      { id: 'dough', name: 'Massa Artesanal', price: 0 },
      { id: 'sauce', name: 'Molho de Tomate', price: 0 },
      { id: 'mozzarella', name: 'Mussarela', price: 0 },
      { id: 'basil', name: 'Manjericão', price: 0 },
      { id: 'olive-oil', name: 'Azeite Extra Virgem', price: 0 },
      { id: 'oregano', name: 'Orégano', price: 0 },
      { id: 'olives', name: 'Azeitonas', price: 4.00 },
    ],
    defaultIngredients: ['dough', 'sauce', 'mozzarella', 'basil', 'olive-oil', 'oregano'],
  },
  {
    id: 'pizza-pepperoni',
    name: 'Pizza Pepperoni',
    description: 'Pizza com generosas fatias de pepperoni e queijo derretido',
    basePrice: 52.90,
    image: pizzaPepperoni,
    category: 'pizza',
    ingredients: [
      { id: 'dough', name: 'Massa Artesanal', price: 0 },
      { id: 'sauce', name: 'Molho de Tomate', price: 0 },
      { id: 'mozzarella', name: 'Mussarela', price: 0 },
      { id: 'pepperoni', name: 'Pepperoni', price: 0 },
      { id: 'oregano', name: 'Orégano', price: 0 },
      { id: 'extra-pepperoni', name: 'Pepperoni Extra', price: 8.00 },
      { id: 'olives', name: 'Azeitonas', price: 4.00 },
      { id: 'basil', name: 'Manjericão Fresco', price: 3.00 },
    ],
    defaultIngredients: ['dough', 'sauce', 'mozzarella', 'pepperoni', 'oregano'],
  },
];
