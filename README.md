# 🍕 Pizza Palace - Ordering Kiosk

A self-service pizza ordering kiosk built with React. Think of the touchscreens you see at fast-food restaurants — this is a modern web version!

## 🚀 Getting Started

### Prerequisites
- Node.js (v14+)
- npm or yarn

### Installation

```bash
npm install
npm run dev
```

The app will open at `http://localhost:5173`

## 📋 Features

### Core Features ✅
- **Menu**: Browse 6 delicious pizza options with descriptions
- **Customization**: Select pizza size (Small/Medium/Large) and add toppings
- **Dynamic Pricing**: Prices update based on size and topping selections
- **Shopping Cart**: Add/remove items, view total price
- **Checkout**: Place orders with confirmation screen and order number
- **Empty State**: Friendly message when cart is empty

### Stretch Goals Implemented 🎯
- ✅ **Tax Calculation** - 10% tax included in checkout
- ✅ **Responsive Design** - Works on mobile, tablet, and desktop
- ✅ **Smooth Animations** - Fade, slide, and scale transitions
- ✅ **Modern UI** - Gradient colors, emojis, and polished styling

## 🏗️ Project Structure

```
src/
├── App.jsx                 # Main app component with state
├── App.css                 # App styling
├── index.css               # Global styles
├── main.jsx                # React entry point
├── data/
│   └── pizzas.js          # Menu data (pizzas, toppings, sizes)
└── components/
    ├── Menu.jsx           # Menu display
    ├── Menu.css
    ├── PizzaCard.jsx      # Individual pizza card
    ├── PizzaCard.css
    ├── Customizer.jsx     # Size & topping selection modal
    ├── Customizer.css
    ├── Cart.jsx           # Shopping cart view
    ├── Cart.css
    ├── CartItem.jsx       # Individual cart item
    ├── CartItem.css
    ├── Checkout.jsx       # Order confirmation
    └── Checkout.css
```

## 🎨 Component Breakdown

- **App**: Manages global state (cart, current screen)
- **Menu**: Displays all available pizzas
- **PizzaCard**: Individual pizza with "Add to Order" button
- **Customizer**: Modal for selecting size and toppings
- **Cart**: Shows cart items and total price
- **CartItem**: Individual cart item with remove button
- **Checkout**: Order confirmation with order number

## 🛠️ Technologies Used

- **React 18** - UI library
- **Vite** - Build tool
- **CSS3** - Styling with Flexbox/Grid
- **Hooks** - useState for state management

## 📱 Features by Section

### Menu Page
- 6 different pizzas with names, descriptions, and base prices
- Pizza emojis for visual appeal
- "View Cart" button shows item count
- Responsive grid layout

### Customization
- Select from Small/Medium/Large sizes
- Add up to 8 different toppings
- Real-time price calculation
- Modal interface for focused user experience

### Shopping Cart
- Display all items with sizes and toppings
- Individual item removal
- Running total calculation
- Empty cart state with friendly message

### Checkout
- Order summary with breakdown
- Tax calculation (10%)
- Random 6-digit order number
- Confirmation animation
- "Place Another Order" button

## 🎯 What Made This Tricky

**State Management**: Keeping track of:
- Current screen (menu/cart/checkout)
- Cart items with their customizations
- Unique item IDs for removal

**Solution**: Used `Date.now()` to generate unique IDs for each cart item, making removal reliable even with duplicate pizzas.

**Price Calculations**: Different pricing models:
- Base price varies by pizza
- Size affects price (multiplier + addition)
- Toppings add individual prices

**Solution**: Created a `calculatePrice()` function that combines all factors and is called whenever customizer state changes.

## 🚀 Future Enhancements

- [ ] localStorage persistence
- [ ] Dark mode toggle
- [ ] Promo codes (e.g., PIZZA10 for 10% off)
- [ ] Category filtering
- [ ] Quantity increment/decrement
- [ ] Payment integration
- [ ] Order history
- [ ] Special deals/combos

## 📝 License

MIT

## 🍕 Bon Appétit!

Enjoy your pizza ordering experience!