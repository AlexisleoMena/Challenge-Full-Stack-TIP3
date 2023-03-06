import React, { useState } from 'react'
import { addToCart, deleteToCart } from '../../context/shopping/actions';
import { useDispatch, useStore } from '../../context/shopping/Provider';

const CardCart = ({ product }) => {
  
  const dispatch = useDispatch()
  const { productsInCart } = useStore()
  const [quantity, setQuantity] = useState(productsInCart[product.id] || 1);

  return (
    <div className='flex items-center justify-between p-2 rounded-lg w-96 lg:w-128 h-36 lg:h-48 border-2 border-neutral-100 shadow-md'>
      <img src={product.image} alt="" className='object-scale-down w-2/12' />
      <div className='flex flex-col w-9/12'>
        <h4 className="h-7 w-full text-md font-Oswald line-clamp-1 lg:h-14 lg:text-lg lg:line-clamp-2">
          {product.title}
        </h4>
        <p className="mb-2 p-1 text-2xl font-medium">
          {quantity}  x  ${(product?.price * quantity).toFixed(2)}
        </p>
        <div className='flex justify-end gap-1 md:gap-2'>
          <button
            className='px-3 lg:px-4 lg:py-2 bg-blue-500 text-blue-100 rounded shadow'
            onClick={() => { setQuantity(quantity - 1) }}
            disabled={quantity <= 1}
          >
            -
          </button>
          <p className='px-1 py-2 align-baseline'>{quantity}</p>
          <button
            className='px-3 lg:px-4 lg:py-2 bg-blue-500 text-blue-100 rounded shadow'
            onClick={() => { setQuantity(quantity + 1) }}
          >
            +
          </button>
          {
            (productsInCart[product.id] && quantity !== productsInCart[product.id])
              ? <button
                className="px-2 lg:px-3 lg:py-1 text-blue-100 bg-blue-500 rounded shadow"
                onClick={() => { dispatch(addToCart(product.id, quantity)) }}
              >
                APPLY
              </button>
              : null
          }
          {
            productsInCart[product.id]
              ? <button
                className="ml-auto px-2 lg:px-4 lg:py-2 text-red-100 bg-red-500 rounded shadow"
                onClick={() => { dispatch(deleteToCart(product.id)); setQuantity(1) }}
              >
                REMOVE
              </button>
              : null
          }
        </div>
      </div>
    </div>
  )
}

export default CardCart
