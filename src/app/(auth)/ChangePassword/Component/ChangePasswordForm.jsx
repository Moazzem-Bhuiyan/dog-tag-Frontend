"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";

const ChangePasswordForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },

    } = useForm();
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const onSubmit = async (data) => {
        setLoading(true);
        setErrorMessage("");
        setSuccessMessage("");

        // Check if new password and confirm password match
        if (data.newPassword !== data.confirmPassword) {
            setErrorMessage("New Password and Confirm Password do not match.");
            setLoading(false);
            return;
        }

        try {
            const response = await axios.post(
                `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/auth/change-password`,
                {
                  oldPassword: data.oldPassword,
                  newPassword: data.newPassword,
                  confirmPassword: data.confirmPassword,
                },
               
            );

            if (response.data.success) {
                setSuccessMessage("Password changed successfully!");
                alert("Password changed successfully")
            } else {
                setErrorMessage(response.data.message || "Failed to change password.");
            }
        } catch (error) {
            setErrorMessage(
                error.response?.data?.message || "An error occurred. Please try again."
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full lg:max-w-[80%] mx-auto px-10 my-10">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-4 py-10"
            >
                <h1 className="text-center text-2xl font-bold">Change Password</h1>

                {errorMessage && <p className="text-red-500">{errorMessage}</p>}
                {successMessage && <p className="text-green-500">{successMessage}</p>}

                <div>
                    <label htmlFor="CurrentPassword" className="block text-white">
                        Current Password
                    </label>
                    <Input
                        id="current-password"
                        type="password"
                        {...register("oldPassword", {
                            required: "Current Password is required",
                        })}
                        className="border p-2 w-full"
                    />
                    {errors.CurrentPassword && (
                        <p className="text-red-500">{errors.CurrentPassword.message}</p>
                    )}
                </div>

                <div>
                    <label htmlFor="NewPassword" className="block text-white">
                        New Password
                    </label>
                    <Input
                        id="New-password"
                        type="password"
                        {...register("newPassword", {
                            required: "New Password is required",
                            minLength: {
                                value: 6,
                                message: "Password must be at least 6 characters long.",
                            },
                        })}
                        className="border p-2 w-full"
                    />
                    {errors.Newpassword && (
                        <p className="text-red-500">{errors.Newpassword.message}</p>
                    )}
                </div>

                <div>
                    <label htmlFor="ConfirmPassword" className="block text-white">
                        Confirm Password
                    </label>
                    <Input
                        id="confirm-password"
                        type="password"
                        {...register("confirmPassword", {
                            required: "Confirm Password is required",
                        })}
                        className="border p-2 w-full"
                    />
                    {errors.ConfirmPassword && (
                        <p className="text-red-500">{errors.confirmPassword.message}</p>
                    )}
                </div>

                <Button type="submit" className="mt-5" disabled={loading}>
                    {loading ? "Saving..." : "Save Changes"}
                </Button>
            </form>
        </div>
    );
};

export default ChangePasswordForm;
