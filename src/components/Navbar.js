import React, { useState } from 'react';
import Logo from '../assets/Logo.png'

const Navbar = () => {
  
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className="w-full bg-whiteFont sticky top-0 shadow z-30">
    <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
                <a href="javascript:void(0)">
                    <p className="text-lg tracking-wide font-normal text-tintFont ">Discover</p>
                </a>
                <div className="md:hidden">
                    <button
                        className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                        onClick={() => setNavbar(!navbar)}
                    >
                        {navbar ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6 text-white"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6 text-white"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        )}
                    </button>
                </div>
            </div>
        </div>
        <div>
            <div
                className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                    navbar ? "block" : "hidden"
                }`}
            >
                <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                    <li className="text-white">
                      <img src={Logo} width={'70%'} height={'70%'}/>
                    </li>
                </ul>

                <div className="mt-3 space-y-2 lg:hidden md:inline-block">
            <a
                href="javascript:void(0)"
                className="inline-block w-full px-4 py-2 text-center text-white bg-gray-600 rounded-md shadow hover:bg-gray-800"
            >
                           <img src={Logo} width={'70%'} height={'70%'}/>

            </a>
            {/* <a
                href="javascript:void(0)"
                className="inline-block w-full px-4 py-2 text-center text-gray-800 bg-white rounded-md shadow hover:bg-gray-100"
            >

            </a> */}
        </div>
            </div>
        </div>
        <div className="hidden space-x-2 md:inline-block">
            <a
                href="javascript:void(0)"
                className="px-4 py-2 text-white bg-gray-600 rounded-md shadow hover:bg-gray-800"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="33.3" height="32.4" viewBox="0 0 37 36" fill="none">
                <path d="M33.047 24.3784H11.7235L12.7941 22.3319L30.5835 22.3017C31.185 22.3017 31.7007 21.8984 31.8081 21.3406L34.2717 8.3999C34.3361 8.06051 34.2394 7.71103 34.0031 7.44556C33.8863 7.31491 33.7406 7.20967 33.5761 7.13714C33.4117 7.06461 33.2323 7.02652 33.0506 7.02552L10.4201 6.95495L10.2267 6.10142C10.1049 5.55704 9.58215 5.16052 8.98774 5.16052H3.45542C3.12019 5.16052 2.79868 5.2855 2.56163 5.50795C2.32458 5.73041 2.19141 6.03213 2.19141 6.34673C2.19141 6.66133 2.32458 6.96304 2.56163 7.1855C2.79868 7.40796 3.12019 7.53293 3.45542 7.53293H7.96363L8.8087 11.3032L10.8891 20.7559L8.21071 24.8589C8.07161 25.0351 7.98783 25.2443 7.96885 25.4628C7.94986 25.6814 7.99643 25.9005 8.10328 26.0955C8.31813 26.4954 8.75141 26.7474 9.23123 26.7474H11.48C11.0006 27.345 10.7416 28.0728 10.7423 28.8208C10.7423 30.7227 12.3895 32.2685 14.4162 32.2685C16.4429 32.2685 18.0901 30.7227 18.0901 28.8208C18.0901 28.0714 17.8251 27.3422 17.3525 26.7474H23.1211C22.6417 27.345 22.3828 28.0728 22.3835 28.8208C22.3835 30.7227 24.0306 32.2685 26.0573 32.2685C28.0841 32.2685 29.7312 30.7227 29.7312 28.8208C29.7312 28.0714 29.4663 27.3422 28.9936 26.7474H33.0506C33.7453 26.7474 34.3146 26.2165 34.3146 25.5612C34.3126 25.2469 34.1781 24.9462 33.9406 24.7246C33.7032 24.503 33.3819 24.3785 33.047 24.3784ZM10.9464 9.29376L31.5646 9.3576L29.545 19.9696L13.3491 19.9965L10.9464 9.29376ZM14.4162 29.8826C13.7932 29.8826 13.2847 29.4055 13.2847 28.8208C13.2847 28.2361 13.7932 27.7589 14.4162 27.7589C15.0393 27.7589 15.5477 28.2361 15.5477 28.8208C15.5477 29.1024 15.4285 29.3725 15.2163 29.5716C15.0041 29.7708 14.7163 29.8826 14.4162 29.8826ZM26.0573 29.8826C25.4343 29.8826 24.9258 29.4055 24.9258 28.8208C24.9258 28.2361 25.4343 27.7589 26.0573 27.7589C26.6804 27.7589 27.1889 28.2361 27.1889 28.8208C27.1889 29.1024 27.0697 29.3725 26.8575 29.5716C26.6453 29.7708 26.3574 29.8826 26.0573 29.8826Z" fill="#070707"/>
              </svg>            
            </a>
            {/* <a
                href="javascript:void(0)"
                className="px-4 py-2 text-gray-800 bg-white rounded-md shadow hover:bg-gray-100"
            >
            </a> */}
        </div>
    </div>
</nav>
  );
};

export default Navbar;
