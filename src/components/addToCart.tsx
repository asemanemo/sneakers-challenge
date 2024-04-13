import React from 'react';
import { IoCartOutline } from 'react-icons/io5';
import minus from '../images/icon-minus.svg';
import plus from '../images/icon-plus.svg';
import { useSelector } from 'react-redux';
import { CounterState } from '../types';

const AddToCart: React.FC = () => {
  const selectCounter = (state: CounterState) => state.count;
  const counter = useSelector(selectCounter);

  return (
    <>
      <div className="flex justify-between mt-8 mb-8 items-center">
        <div className="flex items-center ">
          <h1 className="font-bold text-2xl mr-6">$125.00</h1>
          <div className="bg-orange-100 rounded-md">
            <h2 className="text-orange-500 px-2 font-bold">50%</h2>
          </div>
        </div>
        <h3 className="text-gray-500 font-bold line-through">$250.00</h3>
      </div>
      {/* Adding Item */}
      <div className="bg-gray-100 rounded-md flex justify-between py-4 items-center">
        <img className="h-1 px-6" src={minus} alt="A minus icon" />
        <h1>{counter}</h1>
        <img className="px-6" src={plus} alt="A plus icon" />
      </div>
      <button className="bg-orange-500 text-white w-full rounded-md mt-4 h-14 flex items-center justify-center ">
        <div className="mr-4 text-xl">
          <IoCartOutline />
        </div>
        Add to cart
      </button>
    </>
  );
};

export default AddToCart;
