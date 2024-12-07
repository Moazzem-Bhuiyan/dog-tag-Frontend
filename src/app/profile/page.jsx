"use client";

import Link from "next/link";
import {useEffect, useState} from "react";
import ChangePasswordForm from "../(auth)/ChangePassword/Component/ChangePasswordForm";
import {ListOrdered, LogOut, Settings} from "lucide-react";
import Image from "next/image";

const Profile = () => {
     const [isLoggedIn, setIsLoggedIn] = useState(false);

     useEffect(() => {
          const token = localStorage.getItem("accessToken");
          setIsLoggedIn(!!token);
     }, []);

     const handleLogout = () => {
          localStorage.removeItem("accessToken");
          localStorage.removeItem("refreshToken");
          setIsLoggedIn(false);
     };

     return (
          <div className=" w-full max-w-[60%] m-auto grid grid-cols-4 gap-10 justify-center items-center">
               {/* sideber */}

               <div className=" space-y-6 col-span-1">
                    <Image
                         src="/user.png"
                         width={1200}
                         height={1200}
                         alt="logo"
                         className="w-24 h-24 rounded-full"
                    />
                    <div>
                         <li className=" flex gap-2">
                              {" "}
                              <Settings />
                              <Link href="/profile">Setting</Link>
                         </li>
                    </div>
                    <div>
                         <li className="flex gap-2">
                              {" "}
                              <ListOrdered />
                              <Link href="/Orderhistory">OrderHistory</Link>
                         </li>
                    </div>
                    <div>
                         <li className=" flex gap-2">
                              {" "}
                              {isLoggedIn ? (
                                   <>
                                        <LogOut />
                                        <button
                                             className="bg-transparent text-start text-"
                                             onClick={handleLogout}>
                                             Logout
                                        </button>
                                   </>
                              ) : (
                                   ""
                              )}
                         </li>
                    </div>
               </div>

               {/* main content */}

               <div className=" col-span-3">
                    <ChangePasswordForm />
               </div>
          </div>
     );
};

export default Profile;
