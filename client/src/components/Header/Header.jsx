import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { Link } from 'react-router-dom';
import { useStore } from '../../context/shopping/Provider';

const Header = () => {

  const { productsInCart } = useStore();

  return (
    <nav className="flex items-center justify-between bg-blue-500 p-6">
        <Link to="/" className='w-max text-sm'>
          <span className="text-2xl tracking-wider font-medium text-white ml-2">Fake Store</span>
        </Link>
      <div>
        <Link to="/cart" className='flex text-sm lg:flex-grow'>
          <AiOutlineShoppingCart size={30} className='text-white' />
          <p className='h-5 w-5 text-center font-medium rounded-xl bg-white'>
            {Object.values(productsInCart).length}
          </p>
        </Link>
      </div>
    </nav>
  )
}

export default Header