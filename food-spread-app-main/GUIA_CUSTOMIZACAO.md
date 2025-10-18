# 🍔 Guia de Customização do Site de Cardápio

Este guia explica como adaptar o site para seu restaurante. O código está organizado e comentado para facilitar as modificações.

---

## 📝 **1. DADOS BÁSICOS DO RESTAURANTE**

Edite o arquivo: `src/data/menuData.ts`

```typescript
export const RESTAURANT_NAME = "Sabor & Arte"; // EDITE: Nome do seu restaurante
export const WHATSAPP_NUMBER = "5511999999999"; // EDITE: Seu número com código do país (Ex: 5511999999999)
```

---

## 🍽️ **2. PRODUTOS DO CARDÁPIO**

No mesmo arquivo `src/data/menuData.ts`, você encontrará a lista de produtos:

### Adicionar novo produto:

```typescript
{
  id: 'produto-id-unico',
  name: 'Nome do Produto',
  description: 'Descrição apetitosa do produto',
  basePrice: 29.90,
  image: imagemProduto, // Importado no topo do arquivo
  category: 'burger', // Opções: 'burger' ou 'pizza'
  ingredients: [
    { id: 'ing1', name: 'Ingrediente Incluído', price: 0 },
    { id: 'ing2', name: 'Adicional', price: 5.00 },
  ],
  defaultIngredients: ['ing1'], // IDs dos incluídos por padrão
}
```

### Modificar produto existente:
- Altere `name`, `description`, `basePrice` conforme necessário
- Adicione ou remova ingredientes da lista `ingredients`
- Defina quais ingredientes vêm por padrão em `defaultIngredients`

---

## 🖼️ **3. TROCAR IMAGENS**

### Opção 1: Usar imagens existentes do projeto
As imagens atuais estão em `src/assets/`:
- `hero-bg.jpg` - Imagem de fundo da página inicial
- `burger-classic.jpg` - Hambúrguer clássico
- `burger-bacon.jpg` - Hambúrguer com bacon
- `pizza-margherita.jpg` - Pizza margherita
- `pizza-pepperoni.jpg` - Pizza pepperoni

**Para trocar:** Substitua o arquivo mantendo o mesmo nome, ou adicione uma nova imagem e altere o import no arquivo `menuData.ts`:

```typescript
// No topo do arquivo menuData.ts
import minhaNovaImagem from '@/assets/minha-nova-imagem.jpg';

// Depois use no produto
image: minhaNovaImagem,
```

### Opção 2: Adicionar novas imagens
1. Coloque sua imagem na pasta `src/assets/`
2. Importe no arquivo `menuData.ts`
3. Use na propriedade `image` do produto

---

## 🎨 **4. CORES E DESIGN**

Edite o arquivo: `src/index.css`

### Cores principais (use valores HSL):

```css
:root {
  /* Cor laranja principal - Botões e destaques */
  --primary: 16 100% 60%;
  
  /* Cor vermelha secundária - Botão do carrinho */
  --secondary: 4 90% 58%;
  
  /* Cor amarela de destaque */
  --accent: 38 92% 50%;
}
```

**Dica:** Use um conversor HSL online para transformar cores hexadecimais (#FF6B35) em HSL.

---

## ✍️ **5. TEXTOS DA PÁGINA INICIAL**

Edite o arquivo: `src/components/Hero.tsx`

```typescript
<h1>
  {RESTAURANT_NAME} {/* Nome vem do menuData.ts */}
</h1>

<p>
  Sabores autênticos que fazem a diferença... {/* EDITE AQUI o subtítulo */}
</p>
```

---

## 📋 **6. ADICIONAR NOVA CATEGORIA**

Se quiser adicionar mais categorias além de Lanches e Pizzas:

### 6.1. Edite o tipo em `src/types/menu.ts`:
```typescript
category: 'burger' | 'pizza' | 'bebida' | 'sobremesa'; // Adicione novas opções
```

### 6.2. Adicione produtos com a nova categoria em `menuData.ts`

### 6.3. Adicione a seção na página `src/pages/Menu.tsx`:
```typescript
const bebidas = menuItems.filter((item) => item.category === 'bebida');

// Depois, adicione a seção no JSX:
{bebidas.length > 0 && (
  <section className="mb-16">
    <h2 className="text-4xl font-bold mb-8 text-center text-primary">
      🥤 Bebidas
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {bebidas.map((item) => (
        <MenuItemCard key={item.id} item={item} />
      ))}
    </div>
  </section>
)}
```

---

## 📱 **7. SEO - OTIMIZAÇÃO PARA BUSCADORES**

Edite o arquivo: `index.html`

```html
<title>Nome do Restaurante - Delivery de Comida</title>
<meta name="description" content="Descrição do seu restaurante..." />
```

---

## 🚀 **8. TESTAR O SITE**

1. Abra o site no navegador
2. Adicione produtos ao carrinho
3. Teste a customização de ingredientes
4. Finalize um pedido e veja se o WhatsApp abre corretamente
5. Teste em diferentes tamanhos de tela (mobile, tablet, desktop)

---

## ❓ **PERGUNTAS FREQUENTES**

### Como adicionar mais ingredientes a um produto?
Adicione no array `ingredients` do produto em `menuData.ts`:
```typescript
{ id: 'novo-id', name: 'Nome do Ingrediente', price: 3.00 }
```

### Como mudar o preço de um produto?
Altere o valor de `basePrice` no produto em `menuData.ts`.

### Como remover um produto?
Simplesmente delete ou comente o objeto do produto no array `menuItems` em `menuData.ts`.

### O número do WhatsApp não funciona?
Certifique-se de incluir o código do país sem espaços ou caracteres especiais. Exemplo: `5511999999999` (55 = Brasil, 11 = DDD, 999999999 = número).

---

## 📚 **ESTRUTURA DE ARQUIVOS**

```
src/
├── assets/              # Imagens do site
├── components/          # Componentes reutilizáveis
│   ├── Hero.tsx         # Seção inicial da página
│   ├── Header.tsx       # Cabeçalho do site
│   ├── MenuItemCard.tsx # Card de produto
│   └── FloatingCart.tsx # Botão flutuante do carrinho
├── contexts/            # Gerenciamento de estado
│   └── CartContext.tsx  # Controla o carrinho de compras
├── data/                # Dados configuráveis
│   └── menuData.ts      # ⭐ PRINCIPAL: Produtos e config
├── pages/               # Páginas do site
│   ├── Menu.tsx         # Página inicial com cardápio
│   └── Checkout.tsx     # Página de finalização
└── types/               # Definições TypeScript
    └── menu.ts          # Tipos dos produtos
```

---

## 💡 **DICAS FINAIS**

1. **Sempre teste após cada mudança** para garantir que tudo funciona
2. **Comece pelas mudanças simples**: nome, preços, descrições
3. **Depois vá para as imagens** e cores
4. **Use o comentário "EDITE"** no código para encontrar rapidamente o que mudar
5. **Mantenha backups** antes de fazer grandes alterações

---

**Bom trabalho! 🎉**

Se tiver dúvidas, revise os comentários no código - eles indicam exatamente onde fazer cada tipo de customização.
