import React from 'react';
import hero1 from '../images/image-product-1.jpg';
import { BsCartX } from 'react-icons/bs';

//If the cart is empty
// اگر کارت نامبر مساوی صفره چیزی رو نشون نده
// وقتی که بیشتر از صفره عکس + تعداد آیتم + قیمت + تخفیف رو نمایش بده

interface CartListProps {
  cartNumber: number;
}

// const cartValue = (cartNumber: Number) => {
//   if (cartNumber === 0) {
//     return false}

//     else {
//       return cartNumber
//     }
//   }

const emptyCart = (
  <div className="flex justify-center items-center text-2xl text-gray-500 ">
    <div className="mr-4">
      <BsCartX />
    </div>
    Cart is empty
  </div>
);

const CartList: React.FC<CartListProps> = ({ cartNumber }) => {
  return (
    <div
      className=" absolute shadow-2xl rounded-lg w-80 bg-white right-6 top-12 px-6 py-10"
      style={{ fontSize: '1rem' }}
    >
      {cartNumber === 0 ? (
        emptyCart
      ) : (
        <div>
          <div className="flex top-0 ml-2.5 text-gray-500 mb-4">
            {cartNumber} Items
          </div>
          <div className="flex justify-center items-center">
            <img
              className="rounded-md w-16"
              alt="This is an image of a shoe"
              src={hero1}
            />
            <div className="ml-6">
              <div className="">
                {cartNumber} × $125.00 : {cartNumber * 125}.00$
              </div>
              <div className="text-red-500">
                Discount: {cartNumber * 125}.00$
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartList;
