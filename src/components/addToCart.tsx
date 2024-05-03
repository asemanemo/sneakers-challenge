import React, { useEffect, useRef } from 'react';
import { IoCartOutline } from 'react-icons/io5';
import minus from '../images/icon-minus.svg';
import plus from '../images/icon-plus.svg';
import { useDispatch, useSelector } from 'react-redux';
import { CounterState, RootState } from '../types';
import { decrement, increment, cartUpdate } from '../store';

// باید آپدیت شدن عدد روی سبد فقط با کلیک کردن دکمه رخ بده

const AddToCart: React.FC = () => {
  const selectCounter = (state: RootState) => state.counter.value;
  const counter = useSelector(selectCounter);

  const dispatch = useDispatch();
  const incrementHandler = () => {
    dispatch(increment());
  };
  const decrementHandler = () => {
    dispatch(decrement());
  };

  const formHandler = (event: React.FormEvent) => {
    event.preventDefault();
    dispatch(cartUpdate());
  };

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

      <div className="flex flex-col lg:flex-row lg:justify-between">
        <div className="bg-gray-100 rounded-md flex justify-between py-4 items-center lg:mr-10 ">
          <img
            onClick={decrementHandler}
            className="h-1 px-6 lg:px-12"
            src={minus}
            alt="A minus icon"
          />
          <h1 className="">{counter}</h1>
          <img
            onClick={incrementHandler}
            className="px-6 lg:px-12"
            src={plus}
            alt="A plus icon"
          />
        </div>
        <form>
          <button
            onClick={formHandler}
            className="bg-orange-500 text-white w-full rounded-md mt-4 h-14 flex items-center justify-center lg:w-72"
          >
            <div className="mr-4 text-xl">
              <IoCartOutline />
            </div>
            Add to cart
          </button>
        </form>
      </div>
    </>
  );
};

export default AddToCart;
