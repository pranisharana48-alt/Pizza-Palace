import './Menu.css'
import PizzaCard from './PizzaCard'

export default function Menu({ pizzas, onAddToCart, onViewCart, cartCount }) {
  return (
    <div className="menu-screen">
      <div className="menu-header">
        <h2>Our Menu</h2>
        {cartCount > 0 && (
          <button className="view-cart-btn" onClick={onViewCart}>
            🛒 View Cart ({cartCount})
          </button>
        )}
      </div>

      <div className="pizza-grid">
        {pizzas.map((pizza) => (
          <PizzaCard
            key={pizza.id}
            pizza={pizza}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </div>
  )
}