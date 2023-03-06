import React from 'react'
import { Link } from 'react-router-dom';
import { addToCart, deleteToCart } from '../../context/shopping/actions'

import { useDispatch, useStore } from '../../context/shopping/Provider';

const Card = ({ id, image, title, price }) => {

  const dispatch = useDispatch();
  const { productsInCart } = useStore();

  return (
    <div className="h-80  w-40 flex flex-col justify-between p-2 rounded-lg border-2 border-neutral-100 shadow-md lg:w-56 lg:max-w-sm lg:h-96">
      <Link to={"/detail/"+id} className="h-1/2 flex justify-center">
        <img className="object-scale-down h-full" src={image} alt="" />
      </Link>
      <h4 className="h-12 w-full text-md text-center line-clamp-2 lg:h-20 lg:text-lg lg:line-clamp-3">  {title}  </h4>
      <p className="mb-2 p-1 text-2xl font-medium">${price} </p>
      {
        productsInCart[id] 
        ?
          <button 
            className="px-4 py-2 text-sm text-blue-100 bg-red-500 rounded shadow"
            onClick={() => { dispatch(deleteToCart(id)) }}
          >
            REMOVE
          </button>
        :
          <button 
            className="px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow"
            onClick={() => { dispatch(addToCart(id, productsInCart[id] || 1 )) }}
          >
            ADD TO CART
          </button>
      }

    </div>
  )
}

export default Card
