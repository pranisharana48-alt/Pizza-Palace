import CartItem from './CartItem'
import './Cart.css'

export default function Cart({ items, total, onRemoveItem, onBackToMenu, onCheckout }) {
  const subtotal = total
  const tax = subtotal * 0.10
  const grandTotal = subtotal + tax

  if (items.length === 0) {
    return (
      <div className="cart-screen empty-cart">
        <div className="empty-state">
          <p className="empty-emoji">🛒</p>
          <h2>Your Cart is Empty!</h2>
          <p>Add some delicious pizzas or drinks to get started.</p>
          <button className="back-btn" onClick={onBackToMenu}>
            ← Continue Shopping
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="cart-screen">
      <div className="cart-header">
        <button className="back-btn" onClick={onBackToMenu}>← Continue Shopping</button>
        <h2>🛒 Your Order</h2>
        <div style={{ width: '140px' }} />
      </div>

      <div className="cart-items">
        {items.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            onRemove={() => onRemoveItem(item.id)}
          />
        ))}
      </div>

      <div className="cart-summary">
        <div className="summary-section">
          <div className="summary-row">
            <span>Subtotal:</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="summary-row">
            <span>Tax (10%):</span>
            <span>${tax.toFixed(2)}</span>
          </div>
          <div className="summary-row total-row">
            <span>Grand Total:</span>
            <span className="total-price">${grandTotal.toFixed(2)}</span>
          </div>
        </div>
        
        <button className="checkout-btn" onClick={onCheckout}>
          Place Order 🎉
        </button>
      </div>
    </div>
  )
}