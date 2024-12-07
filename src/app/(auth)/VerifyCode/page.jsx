import React from "react";

import {Modal} from "antd";
import { VerifyCodeForm } from "./component/VerifyCodeForm";

const VerifyModal = ({isOpen, onClose, OnupdatePassClick}) => {
     return (
          <Modal centered open={isOpen} onCancel={onClose} footer={null}>
               <div className=" space-y-10 my-10 ">
                    <h1 className=" text-center font-semibold text-3xl ">
                         Check your email
                    </h1>
                    <p className=" text-center">
                         We sent a reset link to contact@dscode...com <br />{" "}
                         enter 6 digit code that mentioned in the email
                    </p>

                    <VerifyCodeForm OnupdatePassClick={OnupdatePassClick} />
               </div>
          </Modal>
     );
};

export default VerifyModal;
