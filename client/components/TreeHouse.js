import React from 'react'
import '../styles/treehouse.css'

const Treehouse = ({userId, isLoggedIn, house, addToCart}) => {
  return (
    <div className="tree-house">
      <h2 className="tree-house-name">{house.name}</h2>
      <p className="tree-house-price">${house.price}</p>
      <img className="tree-house-image" src={house.imageUrl} />
      <button
        className="add-to-cart"
        type="button"
        onClick={
          isLoggedIn ? () => addToCart(house, userId) : () => addToCart(house)
        }
      >
        Add To Cart
      </button>
    </div>
  )
}

export default Treehouse
