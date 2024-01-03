'use client'
import { useEffect, useState } from 'react';
import SearchModal from '@/components/search-modal';
const ModalSearchProvider = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true)
    },[])

    if(!isMounted){
        return null
    }
    return ( 
        <>
            <SearchModal/>
        </>
    );
}
 
export default ModalSearchProvider;