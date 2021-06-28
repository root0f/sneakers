import React from 'react';
import  { Link } from 'react-router-dom'

export const Header = (props) => {
  return (
    <header className='d-flex justify-between align-center p-40'>
        <Link to='/'>
      <div className='d-flex align-center'>
        <img width={50} height={50} src="/img/logo.png" alt="Logo"/>
        <div>
          <h3 className='text-uppercase'>Sneakers</h3>
          <p className='opacity-5'>Магазин лучших кроссовок</p>
        </div>
      </div>
        </Link>
      <ul className='d-flex'>
        <li onClick={props.onClickCart} className='mr-30 cu-p'>
          <img width={18} height={18} src="/img/cart.svg" alt="Cart"/>
          <span>1200 руб.</span>
        </li>
        
        <li className='mr-20 cu-p'>
        <Link to='/favorites'>
          <img width={18} height={18} src="/img/heart.svg" alt="Favorite"/>
        </Link>
        </li>
        <li>
          <img width={18} height={18} src="/img/user.svg" alt="User"/>
        </li>
      </ul>
    </header>
  );
}