import React, { useState } from 'react';
import { IoMenu } from 'react-icons/io5';
import { IoCartOutline } from 'react-icons/io5';
import imgAvr from '../images/image-avatar.png';
import logo from '../images/logo.svg';
import close from '../images/icon-close.svg';

export function Navbar() {
  const [isDroped, setDroped] = useState(false);
  const [modalShowing, setModalShowing] = useState(false);

  const handleClick = () => {
    setDroped(true);
    setModalShowing(true);
  };

  const handleClose = () => {
    setDroped(false);
    setModalShowing(false);
  };
  return (
    <div className="flex p-2 items-center justify-between h-full">
      <div className="flex items-center">
        <div className="text-2xl">
          <div onClick={handleClick}>
            <IoMenu />
          </div>
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

      {/* This is mobile Navbar Modal */}
      {isDroped && (
        <div className="fixed bg-white top-0 h-full px-6 py-6 z-20 left-0">
          <div className="left-0 ml-4 mr-52 overflow-hidden">
            <ul>
              <img onClick={handleClose} src={close} alt="Close button" />
            </ul>
            <div className="py-16">
              <ul className="font-bold mb-4">Collection</ul>
              <ul className="font-bold mb-4">Men</ul>
              <ul className="font-bold mb-4">Women</ul>
              <ul className="font-bold mb-4">About</ul>
              <ul className="font-bold mb-4">Contact</ul>
            </div>
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
}