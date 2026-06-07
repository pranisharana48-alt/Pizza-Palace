import { useState } from 'react'
import './Checkout.css'

export default function Checkout({ total, onNewOrder }) {
  const [orderNumber] = useState(Math.floor(Math.random() * 1000000))
  const [confirmed, setConfirmed] = useState(false)

  const subtotal = total
  const tax = subtotal * 0.10
  const grandTotal = subtotal + tax

  const handleNewOrder = () => {
    onNewOrder()
  }

  return (
    <div className="checkout-screen">
      <div className="confirmation-card">
        {!confirmed ? (
          <>
            <div className="confirmation-icon">🎉</div>
            <h2>Order Summary</h2>
            <div className="order-details">
              <div className="detail-row">
                <span>Subtotal:</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="detail-row">
                <span>Tax (10%):</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="detail-row total">
                <span>Grand Total:</span>
                <span>${grandTotal.toFixed(2)}</span>
              </div>
            </div>
            <button className="confirm-btn" onClick={() => setConfirmed(true)}>
              Confirm Order ✓
            </button>
          </>
        ) : (
          <>
            <div className="success-icon">✓</div>
            <h2>Order Placed Successfully!</h2>
            <p className="thank-you">Thank you for your order!</p>
            <div className="order-number">
              <p>Order #</p>
              <p className="big-number">{orderNumber.toString().padStart(7, '0')}</p>
            </div>
            <p className="order-details-text">
              Total: <span>${grandTotal.toFixed(2)}</span>
            </p>
            <p className="wait-time">⏱️ Ready in 20-25 minutes</p>
            <p className="pickup-info">🏪 Please pick up at the counter</p>
            <button className="new-order-btn" onClick={handleNewOrder}>
              Place Another Order 🍕
            </button>
          </>
        )}
      </div>
    </div>
  )
}