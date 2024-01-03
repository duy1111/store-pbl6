'use client'
import PreviewModal from '@/components/preview-modal'
import SuccessModal from '@/components/successModal';
import { useEffect, useState } from 'react';
const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true)
    },[])

    if(!isMounted){
        return null
    }
    return ( 
        <>
            <PreviewModal/>
            <SuccessModal/>
        </>
    );
}
 
export default ModalProvider;