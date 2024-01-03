"use client"
import useSuccessModal from "@/hooks/use-success-modal";
import { useEffect } from "react";

const SuccessPage = () => {
    const successModal = useSuccessModal();

    useEffect(() => {
        successModal.onOpen()
    },[])


    return (
        <img className=" h-screen w-screen blur-sm opacity-80 overflow-hidden shadow-md" 
        src="https://images.pexels.com/photos/2526878/pexels-photo-2526878.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/>
            
        
    )
}
export default SuccessPage