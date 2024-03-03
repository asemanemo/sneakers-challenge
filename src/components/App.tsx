import React from 'react';
import { IoMenu } from 'react-icons/io5';
import { IoCartOutline } from 'react-icons/io5';
import imgAvr from '../images/image-avatar.png';
import logo from '../images/logo.svg';
import hero1 from '../images/image-product-1.jpg';

function App() {
  return (
    <div>
      {/* This is navbar */}
      <div className="flex p-2 items-center justify-between">
        <div className="flex items-center">
          <div className="text-2xl">
            <IoMenu />
          </div>
          <h1 className="px-6">
            <img alt="This is logo" src={logo} />
          </h1>
        </div>
        <div className="flex items-center">
          <div className="text-2xl px-4">
            <IoCartOutline />
          </div>
          <img className="w-8" alt="This is an avatar" src={imgAvr} />
        </div>
      </div>

      {/* This is Slider (mobile) */}

      <div>
        <img alt="This is an image of a shoe" src={hero1} />
      </div>

      <h1>Fall Limited Edition</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse voluptas
        ex itaque. Est officia dolor, non quaerat saepe quisquam culpa sint
        similique. Obcaecati vero laboriosam veniam nemo, alias assumenda
        beatae.
      </p>
    </div>
  );
}

export default App;
