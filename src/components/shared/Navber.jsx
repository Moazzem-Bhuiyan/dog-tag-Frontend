"use client";
import Link from "next/link";
import {useEffect, useState} from "react";

const Navber = ({onLoginClick}) => {

     const [isLoggedIn, setIsLoggedIn] = useState(false);

     useEffect(() => {
          const token = localStorage.getItem("accessToken");
          setIsLoggedIn(!!token);
     }, []);

     // Handle Logout
     // const handleLogout = () => {
     //      localStorage.removeItem("accessToken");
     //      localStorage.removeItem("refreshToken");
     //      setIsLoggedIn(false);
     // };

     const Navlink = [
          {title: "Home", link: "/"},
          {title: "Gifts", link: "#"},
          {title: "Services", link: "#"},
          {title: "Contact", link: "#"},
     ];

     return (
          <div className="md:flex flex-col md:flex-row justify-center items-center md:gap-10 lg:gap-40 w-full p-4 hidden">
               {/* Navigation Links */}
               {Navlink.map((item, index) => (
                    <div key={index} className="relative mb-2 md:mb-0 group">
                         <Link href={item.link}>
                              <h1 className="text-lg font-medium relative">
                                   {item.title}
                                   {/* Hover Border Animation */}
                                   <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
                              </h1>
                         </Link>
                    </div>
               ))}

               {/* Login/Logout Button */}
               <div className="mt-2 md:mt-0 relative group">
                    {isLoggedIn ? (
                         <Link href='/profile'>
                              <button className="px-4 text-white text-lg rounded-md relative">
                                   Profile
                                   <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
                              </button>
                         </Link>
                    ) : (
                         <button
                              onClick={onLoginClick}
                              className="px-4 text-white text-lg rounded-md relative">
                              Login
                              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
                         </button>
                    )}
               </div>
          </div>
     );
};

export default Navber;
