'use client'

import usePreviewModal from "@/hooks/use-preview-modal";
import Modal from "./ui/modal";
import useSuccessModal from "@/hooks/use-success-modal";
import { useCallback, useEffect } from "react";
import Button from "./ui/button";
import { useRouter } from "next/navigation";
import { BadgeDollarSignIcon, CheckCircle, Coins, CoinsIcon, GiftIcon } from "lucide-react";


const SuccessModal = () => {
    const router = useRouter()
    const successModal = useSuccessModal();



    const backHome = useCallback(() => {
        successModal.onClose();
        router.push("/")
    },[router,successModal])


  
    return ( 
        <Modal
            open={successModal.isOpen}
            onClose={backHome}
        >
            {/* <div className=" h-72 w-full" > 
                <div className=" text-4xl flex justify-center w-full font-bold text-black" >
                    <div>Thank you and see you again!</div> 


                </div>
                <div className=" w-full" >
                <Button onClick={backHome} className="">
                    go Home
                </Button>
                </div>
            </div> */}

            <div className="w-full h-full ">
                <div className="flex justify-center">
                <CheckCircle className=" h-[80px] w-[80px] text-emerald-400" />
                </div>
                <div className="flex justify-center mt-8">
                    
                    <p className=" text-5xl font-bold">Thank you for ordering !</p>
                    
                </div>
                <div className=" flex justify-center mt-16 ">
                <Button className="dark:md:hover:bg-grey-90" onClick={backHome} >
                    Back to Home
                </Button>
                </div>
            </div>
        </Modal>
    );
}
 
export default SuccessModal;