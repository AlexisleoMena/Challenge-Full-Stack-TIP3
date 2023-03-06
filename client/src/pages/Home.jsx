import React, { useEffect } from 'react'
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
    <div>
      Home
    </div>
  )
}

export default Home;