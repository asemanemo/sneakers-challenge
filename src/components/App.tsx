import Navbar from './Navbar';
import AddToCart from './addToCart';
import { IoMenu } from 'react-icons/io5';
import { IoCartOutline } from 'react-icons/io5';
import imgAvr from '../images/image-avatar.png';
import logo from '../images/logo.svg';
import minus from '../images/icon-minus.svg';
import plus from '../images/icon-plus.svg';
import Slider from './Slider';

function App() {
  return (
    <div className="font-myFont">
      {/* This is navbar */}
      <Navbar />

      {/* This is Slider (mobile) */}

      <Slider />

      {/* This is text part */}
      <div className="p-8 ">
        <h1 className=" text-orange-500 mb-4 text-sm">SNEAKER COMPANY</h1>
        <h1 className="text-2xl font-bold mb-4">
          Fall Limited Edition Sneakers
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse
          voluptas ex itaque. Est officia dolor, non quaerat saepe quisquam
          culpa sint similique. Obcaecati vero laboriosam veniam nemo, alias
          assumenda beatae.
        </p>

        {/* The Price Section */}
        <AddToCart />
      </div>
    </div>
  );
}

export default App;
