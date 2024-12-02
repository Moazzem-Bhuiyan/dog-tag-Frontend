import { Button } from "@/components/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import React from "react";

const VerifyCodeForm = ({OnupdatePassClick}) => {
  return (
    <div>
      <div className=" flex justify-center">
        <InputOTP maxLength={6}>
          <InputOTPGroup className="">
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
      </div>

      <div className=" flex justify-center mt-10">
        {" "}
        <Button onClick ={OnupdatePassClick} className="w-full lg:max-w-[20%] mx-auto">Verify Code </Button>

      </div>
    </div>
  );
};

export default VerifyCodeForm;
