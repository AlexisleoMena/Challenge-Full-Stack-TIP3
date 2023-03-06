import React, { useEffect } from 'react'
import Card from '../components/Card/Card';
import { applyFilter, asyncGetProducts, setFilter } from '../context/shopping/actions';
import { useDispatch, useStore } from '../context/shopping/Provider';

const Home = () => {
  const dispatch = useDispatch();
  const { products, filter } = useStore();

  useEffect(() => {
    if (!products.length) {
      (async () => dispatch(await asyncGetProducts()))()
    }
  }, [dispatch, products.length]);

  return (
    <div className="h-full w-full">
            <div className='flex gap-3 justify-end m-3 mr-6 items-center'>
        <h2>ORDER BY: </h2>
        <select 
          className="rounded-md border-1 border-neutral-100 shadow-md"
          onChange={(e) => {dispatch(setFilter(e.target.value)); dispatch(applyFilter())}}
          value={filter}
        >
          <option value=""> --- </option>
          <option value="Price asc.">Price asc. </option>
          <option value="Price desc.">Price desc. </option>
        </select>
      </div>
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