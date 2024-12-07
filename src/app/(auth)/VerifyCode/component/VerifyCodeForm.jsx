"use client";

import {useForm} from "react-hook-form";
import axios from "axios"; // Import axios

import {Button} from "@/components/ui/button";
import {
     Form,
     FormControl,
     FormField,
     FormItem,
     FormMessage,
} from "@/components/ui/form";
import {InputOTP, InputOTPGroup, InputOTPSlot} from "@/components/ui/input-otp";

export function VerifyCodeForm({OnupdatePassClick}) {
     const form = useForm({
          defaultValues: {
               pin: "",
          },
          mode: "onSubmit",
     });

     const validatePin = (pin) => {
          if (pin.length !== 6) {
               return "Your one-time password must be 6 characters.";
          }
          return true;
     };

     const token = localStorage.getItem("forgot-token");

     function onSubmit(data) {

      
          // console.log("OTP Submitted:", data, token);

          axios.post(
               `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/otp/verify-otp`,
               {otp: data.otp},
               {
                    headers: {
                         token: token,
                    },
               },
          )
               .then((response) => {
                    // console.log("API Response:", response.data);
                    if (response.data.success) {
                         const token = response.data.data.token;

                         localStorage.setItem("reset-token", token);

                         OnupdatePassClick();
                    } else {
                         alert(response.data.message || "Verification failed.");
                    }
               })
               .catch((error) => {
                    console.error("Error during API call:", error);
                    if (error.response) {
                         // Handle error response from API
                         alert(
                              error.response.data.message ||
                                   "An error occurred.",
                         );
                    } else {
                         alert("An error occurred. Please try again.");
                    }
               });
     }

     return (
          <Form {...form}>
               <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="w-2/3 space-y-6">
                    <FormField
                         control={form.control}
                         name="otp"
                         render={({field}) => (
                              <FormItem>
                                   <FormControl>
                                        <InputOTP maxLength={6} {...field}>
                                             <InputOTPGroup>
                                                  <InputOTPSlot index={0} />
                                                  <InputOTPSlot index={1} />
                                                  <InputOTPSlot index={2} />
                                                  <InputOTPSlot index={3} />
                                                  <InputOTPSlot index={4} />
                                                  <InputOTPSlot index={5} />
                                             </InputOTPGroup>
                                        </InputOTP>
                                   </FormControl>

                                   {form.formState.errors.pin && (
                                        <FormMessage>
                                             {form.formState.errors.pin.message}
                                        </FormMessage>
                                   )}
                              </FormItem>
                         )}
                    />

                    <Button type="submit">Submit</Button>
               </form>
          </Form>
     );
}
