import { useState } from 'react'
import Customizer from './Customizer'
import './ItemCard.css'

export default function ItemCard({ item, onAddToCart, category }) {
  const [showCustomizer, setShowCustomizer] = useState(false)

  const handleAddClick = () => {
    setShowCustomizer(true)
  }

  const handleQuickAdd = () => {
    onAddToCart({
      ...item,
      price: item.basePrice,
      size: 'Regular',
      itemType: category,
    })
  }

  const isPizza = category === 'pizzas'

  return (
    <>
      <div className="item-card">
        <div className="item-image-container">
          {item.image ? (
            <img 
              src={item.image} 
              alt={item.name}
              className="item-image"
              onError={(e) => {
                e.target.style.display = 'none'
                e.target.nextElementSibling.style.display = 'flex'
              }}
            />
          ) : null}
          <div className="item-emoji-fallback">{item.emoji}</div>
        </div>
        <h3>{item.name}</h3>
        <p className="description">{item.description}</p>
        <p className="base-price">${item.basePrice.toFixed(2)}</p>
        <button 
          className="add-btn" 
          onClick={isPizza ? handleAddClick : handleQuickAdd}
        >
          {isPizza ? 'Customize 🛒' : 'Add to Cart 🛒'}
        </button>
      </div>

      {showCustomizer && isPizza && (
        <Customizer
          item={item}
          onClose={() => setShowCustomizer(false)}
          onConfirm={(addedItem) => {
            onAddToCart(addedItem)
            setShowCustomizer(false)
          }}
        />
      )}
    </>
  )
}