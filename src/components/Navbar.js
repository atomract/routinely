import React from 'react';
import Logo from '../assets/Logo.png'

const Navbar = () => {
  return (
    <nav className=''>
          <div className="bg-whiteFont fixed w-full z-30 top-0 left-0">
        <div className="max-w-screen-xl bg-white flex flex-wrap items-center justify-between mx-auto p-2">
        <a href="" className="flex items-center">
            <span className="self-center text-xl text-tintFont font-semibold whitespace-nowrap ">Discover</span>
        </a>
        <div className="flex md:order-2">
            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            <svg xmlns="http://www.w3.org/2000/svg" width="33.3" height="32.4" viewBox="0 0 37 36" fill="none">
            <path d="M33.047 24.3784H11.7235L12.7941 22.3319L30.5835 22.3017C31.185 22.3017 31.7007 21.8984 31.8081 21.3406L34.2717 8.3999C34.3361 8.06051 34.2394 7.71103 34.0031 7.44556C33.8863 7.31491 33.7406 7.20967 33.5761 7.13714C33.4117 7.06461 33.2323 7.02652 33.0506 7.02552L10.4201 6.95495L10.2267 6.10142C10.1049 5.55704 9.58215 5.16052 8.98774 5.16052H3.45542C3.12019 5.16052 2.79868 5.2855 2.56163 5.50795C2.32458 5.73041 2.19141 6.03213 2.19141 6.34673C2.19141 6.66133 2.32458 6.96304 2.56163 7.1855C2.79868 7.40796 3.12019 7.53293 3.45542 7.53293H7.96363L8.8087 11.3032L10.8891 20.7559L8.21071 24.8589C8.07161 25.0351 7.98783 25.2443 7.96885 25.4628C7.94986 25.6814 7.99643 25.9005 8.10328 26.0955C8.31813 26.4954 8.75141 26.7474 9.23123 26.7474H11.48C11.0006 27.345 10.7416 28.0728 10.7423 28.8208C10.7423 30.7227 12.3895 32.2685 14.4162 32.2685C16.4429 32.2685 18.0901 30.7227 18.0901 28.8208C18.0901 28.0714 17.8251 27.3422 17.3525 26.7474H23.1211C22.6417 27.345 22.3828 28.0728 22.3835 28.8208C22.3835 30.7227 24.0306 32.2685 26.0573 32.2685C28.0841 32.2685 29.7312 30.7227 29.7312 28.8208C29.7312 28.0714 29.4663 27.3422 28.9936 26.7474H33.0506C33.7453 26.7474 34.3146 26.2165 34.3146 25.5612C34.3126 25.2469 34.1781 24.9462 33.9406 24.7246C33.7032 24.503 33.3819 24.3785 33.047 24.3784ZM10.9464 9.29376L31.5646 9.3576L29.545 19.9696L13.3491 19.9965L10.9464 9.29376ZM14.4162 29.8826C13.7932 29.8826 13.2847 29.4055 13.2847 28.8208C13.2847 28.2361 13.7932 27.7589 14.4162 27.7589C15.0393 27.7589 15.5477 28.2361 15.5477 28.8208C15.5477 29.1024 15.4285 29.3725 15.2163 29.5716C15.0041 29.7708 14.7163 29.8826 14.4162 29.8826ZM26.0573 29.8826C25.4343 29.8826 24.9258 29.4055 24.9258 28.8208C24.9258 28.2361 25.4343 27.7589 26.0573 27.7589C26.6804 27.7589 27.1889 28.2361 27.1889 28.8208C27.1889 29.1024 27.0697 29.3725 26.8575 29.5716C26.6453 29.7708 26.3574 29.8826 26.0573 29.8826Z" fill="#070707"/>
            </svg>

            </button>
            {/* <button data-collapse-toggle="divbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="divbar-sticky" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              
          </button> */}
        </div>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
            <img src={Logo} width={'70%'} height={'70%'}/>
            </li>
            {/* <li>
              <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
            </li>
            <li>
              <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
            </li>
            <li>
              <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
            </li> */}
          </ul>
        </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
