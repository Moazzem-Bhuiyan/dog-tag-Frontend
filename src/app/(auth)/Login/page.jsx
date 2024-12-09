"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // Import the useRouter hook
import LoginPage from "./component/LoginForm";

const Page = () => {
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const router = useRouter(); // Initialize the router

    useEffect(() => {
        setIsLoginOpen(true);
    }, []);

    const handleCloseAll = () => {
        setIsLoginOpen(false);

        // Navigate back to the previous location
        router.back();
    };

    return (
        <div>
            <LoginPage isOpen={isLoginOpen} onClose={handleCloseAll} />
        </div>
    );
};

export default Page;
