import React, { useCallback, useEffect, useState } from 'react'
import CardCart from '../components/CardCart/CardCart';
import { useStore } from '../context/shopping/Provider';

const Cart = () => {
  
  const { productsInCart, products } = useStore();
  const [total, setTotal] = useState(0);

  let getTotal = useCallback(() => {
    return products
      .filter(p => productsInCart[p.id])
      .reduce((acc, curr) => acc + curr.price * productsInCart[curr.id], 0)
      .toFixed(2)
  }, [productsInCart, products])

  useEffect(() => {
    setTotal(getTotal())
  }, [getTotal]);

  return (
    <div className='flex flex-col min-h-[70vh] p-6 justify-evenly font-Oswald lg:flex-row items-center'>
      <div className='flex flex-col gap-2'>
        {
          products.map((product) => (
            productsInCart[product.id]
              ? <CardCart product={product} key={product.id} />
              : null
          ))
        }
        {
          !Object.values(productsInCart).length
            ? <h1 className='text-3xl text-center'>Empty shopping cart!</h1>
            : null
        }
      </div>
      <div className='h-40 w-60 gap-10 lg:self-start flex flex-col justify-center items-center'>
        <h1 className='text-2xl'><strong>ORDER TOTAL:</strong> ${total}</h1>
        {
          total > 0
            ?
            <button className='px-4 py-2 bg-green-500 text-green-100 rounded shadow'>
              CHECKOUT
            </button>
            : null
        }
      </div>
    </div>
  )
}

export default Cart
