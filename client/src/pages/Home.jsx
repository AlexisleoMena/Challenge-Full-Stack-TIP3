import React, { useEffect } from 'react'
import Card from '../components/Card/Card';
import { asyncGetProducts } from '../context/shopping/actions';
import { useDispatch, useStore } from '../context/shopping/Provider';

const Home = () => {
  const dispatch = useDispatch();
  const { products } = useStore();

  useEffect(() => {
    if (!products.length) {
      (async () => dispatch(await asyncGetProducts()))()
    }
  }, [dispatch, products.length]);

  return (
    <div className="h-full w-full">
      <div className='mt-6 mb-6 grid justify-items-center gap-2 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-rows-3'>
        {
          products.map((product) => (
            <Card
              key={product.id}
              id={product.id}
              image={product.image}
              title={product.title}
              price={product.price}
            />
          ))
        }
      </div>
    </div>
  )
}

export default Home;