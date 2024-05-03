import Navbar from './Navbar';
import AddToCart from './addToCart';
import { IoMenu } from 'react-icons/io5';
import { IoCartOutline } from 'react-icons/io5';
import imgAvr from '../images/image-avatar.png';
import logo from '../images/logo.svg';
import hero1 from '../images/image-product-1.jpg';
import minus from '../images/icon-minus.svg';
import plus from '../images/icon-plus.svg';
import Slider from './Slider';

function App() {
  return (
    <div className="font-myFont">
      {/* This is navbar */}

      <Navbar />
      {/* This is Slider (mobile) */}
      <div className="flex flex-col lg:flex-row">
        <Slider />
        {/* This is text part */}
        <div className="p-8 lg:ml-32">
          <h1 className=" text-orange-500 mb-4 text-md font-bold">
            SNEAKER COMPANY
          </h1>
          <h1 className="text-4xl font-bold mb-4">
            Fall Limited Edition Sneakers
          </h1>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse
              voluptas ex itaque. Est officia dolor, non quaerat saepe quisquam
              culpa sint similique. Obcaecati vero laboriosam veniam nemo, alias
              assumenda beatae.
            </p>
          </div>
          {/* The Price Section */}
          <div className="lg:items-center ">
            <AddToCart />
          </div>
        </div>
      </div>

      <div className="flex flex-row mt-32 mb-6 justify-center ">
        <h1 className="">Finished by</h1>
        <a
          className="text-red-500 ml-6 hover:underline"
          href="https://github.com/asemanemo/"
        >
          Asemanemo
        </a>
      </div>
    </div>
  );
}

export default App;
