import React from 'react'
import AddToCart from '../AddToCart'
//import styles from './ProductCard.module.css';

const ProductCard = () => {
  return (
    <div className='p-5 my-5 bg-sky-400 text-xl text-white hover:bg-sky-500'>
        <AddToCart/>
    </div>
  )
}

export default ProductCard