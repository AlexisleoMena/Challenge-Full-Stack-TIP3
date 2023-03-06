import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { addToCart, asyncGetProducts, deleteToCart } from '../context/shopping/actions';
import { useDispatch, useStore } from '../context/shopping/Provider';

const Detail = () => {
  const dispatch = useDispatch();
  const { productsInCart, products } = useStore();
  const { id } = useParams()

  const [quantity, setQuantity] = useState(productsInCart[id] || 1);
  const [product, setProduct] = useState({});

  useEffect(() => {
    if (!products.length) {
      (async () => dispatch(await asyncGetProducts()))()
    }
  }, [products.length, dispatch])

  useEffect(() => {
    setProduct(products.find((p) => p.id === Number(id)))
  }, [id, products])

  return (
    <div className='flex flex-col  min-h-[70vh] p-6 justify-evenly lg:flex-row-reverse items-center '>
      <img className="object-scale-down w-80 self-center" src={product?.image} alt="" />
      <div className='p-6 max-w-xl flex flex-col gap-4'>
        <h4 className="w-full text-2xl leading-none uppercase font-Oswald lg:text-3xl">
          {product?.title}
        </h4>
        <h3> <strong>Description:</strong> {product?.description}</h3>
        <h3> <strong>Category:</strong> {product?.category}</h3>
        <p className="mb-2 p-1 text-2xl font-medium">
          {quantity}  x  ${(product?.price * quantity).toFixed(2)}
        </p>
        <div className='flex gap-1 md:gap-2'>
          <button
            className='px-4 py-2 bg-blue-500 text-blue-100 rounded shadow'
            onClick={() => { setQuantity(quantity - 1) }}
            disabled={quantity <= 1}
          >
            -
          </button>
          <p className='px-3 py-2 align-baseline'>{quantity}</p>
          <button
            className='px-4 py-2 bg-blue-500 text-blue-100 rounded shadow'
            onClick={() => { setQuantity(quantity + 1) }}
          >
            +
          </button>
          {
            (productsInCart[id] && quantity !== productsInCart[id])
              ? <button
                className="px-3 py-1 text-blue-100 bg-blue-500 rounded shadow"
                onClick={() => { dispatch(addToCart(id, quantity)) }}
              >
                APPLY
              </button>
              : null
          }
          {
            productsInCart[id]
              ? <button
                className="ml-auto px-4 py-2 text-red-100 bg-red-500 rounded shadow"
                onClick={() => { dispatch(deleteToCart(id)); setQuantity(1) }}
              >
                REMOVE
              </button>
              : <button
                className="ml-auto px-4 py-2 text-blue-100 bg-blue-500 rounded shadow"
                onClick={() => { dispatch(addToCart(id, quantity)) }}
              >
                ADD TO CART
              </button>
          }
        </div>
      </div>
    </div>
  )
}

export default Detail
