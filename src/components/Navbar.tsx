import React, { useEffect, useState } from 'react';
import { IoMenu } from 'react-icons/io5';
import { IoCartOutline } from 'react-icons/io5';
import imgAvr from '../images/image-avatar.png';
import logo from '../images/logo.svg';
import close from '../images/icon-close.svg';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../types';
import CartList from './CartList';
import { cartClicked } from '../store';

const navItems = (
  <div>
    <ul className="mb-4">Collection</ul>
    <ul className="mb-4">Men</ul>
    <ul className="mb-4">Women</ul>
    <ul className="mb-4">About</ul>
    <ul className="mb-4">Contact</ul>
  </div>
);

const Navbar: React.FC = () => {
  const [isDroped, setDroped] = useState(false);
  const [modalShowing, setModalShowing] = useState(false);

  const selectCounter = (state: RootState) => state.counter.value;
  const count = useSelector(selectCounter);

  const selectCartClicked = (state: RootState) => state.cart.cartUpdate;
  const cartUpdateSelect = useSelector(selectCartClicked);

  const cartListSelect = (state: RootState) => state.cartList.cartListValue;
  const cartList = useSelector(cartListSelect);

  const [cartNumber, setCartNumber] = useState<number>(() => {
    const storedCartNumber = localStorage.getItem('cart');
    return storedCartNumber ? parseInt(storedCartNumber, 10) : 0;
  });

  const dispatch = useDispatch();
  useEffect(() => {
    setCartNumber(count);
  }, [cartUpdateSelect]);

  useEffect(() => {
    localStorage.setItem('cart', cartNumber.toString());
  }, [cartNumber]);

  useEffect(() => {
    const storedCartNumber = localStorage.getItem('cart');
    if (storedCartNumber) {
      setCartNumber(parseInt(storedCartNumber, 10));
    }
  }, []);

  const handleClick = () => {
    setDroped(true);
    setModalShowing(true);
  };

  const handleClose = () => {
    setDroped(false);
    setModalShowing(false);
  };

  const handleCartListClick = () => {
    dispatch(cartClicked());
  };

  return (
    <div className="flex p-2 items-center justify-between h-full">
      <div className="flex justify-between items-center">
        <div className="lg:hidden text-2xl">
          <div onClick={handleClick}>
            <IoMenu />
          </div>
        </div>
        <div className="px-6">
          <img alt="This is logo" src={logo} />
        </div>

        <div className="hidden lg:block ml-12 mt-1">
          <ul className="flex">
            <li className="mr-16 hover:underline">Collection</li>
            <li className="mr-16 hover:underline">Men</li>
            <li className="mr-16 hover:underline">Women</li>
            <li className="mr-16 hover:underline">About</li>
            <li className="mr-16 hover:underline">Contact</li>
          </ul>
        </div>
      </div>
      <div className="flex items-center">
        <div
          onMouseEnter={handleCartListClick}
          onMouseLeave={handleCartListClick}
          className="relative text-4xl px-4 mb-4 mr-4"
        >
          <div className="absolute z-20">
            {cartList && <CartList cartNumber={cartNumber} />}
          </div>
          <IoCartOutline />

          <div className="absolute text-xl size-7 bg-yellow-500 px-2 rounded-full -mt-4  z-20">
            {cartNumber}
          </div>
        </div>
        <img className="w-10" alt="This is an avatar" src={imgAvr} />
      </div>

      {/* This is mobile Navbar Modal */}
      {isDroped && (
        <div className="lg:hidden fixed bg-white top-0 h-full px-6 py-6 z-20 left-0">
          <div className="left-0 ml-4 mr-52 overflow-hidden">
            <ul>
              <img onClick={handleClose} src={close} alt="Close button" />
            </ul>
            <div className="py-16 font-bold">{navItems}</div>
          </div>
        </div>
      )}

      {modalShowing && (
        <div
          onClick={handleClose}
          className="fixed inset-0 z-10 bg-gray-900 bg-opacity-50 transition-opacity duration-300 ease-in-out "
        ></div>
      )}
    </div>
  );
};

export default Navbar;
