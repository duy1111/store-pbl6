'use client';
import { ShoppingBag } from "lucide-react";
import Button from "./ui/button";
import { useEffect, useState } from "react";
import useCart from "@/hooks/use-cart";
import { useRouter } from "next/navigation";
import ImageUpload from "./image-upload";
import useSearchModal from "@/hooks/use-search-modal";
const NavbarActions = () => {
    const [isMounted, setIsMounted] = useState(false);
    const Cart = useCart();
    const router = useRouter()
    const searchModal = useSearchModal();
    useEffect(() => {
        setIsMounted(true)
    },[])

    if(!isMounted){
        return null
    }

    const onChange = (url: string) => {
        setData(url)
    }



    return ( 
        <div className="ml-auto flex items-center gap-x-4" >
            <Button onClick={searchModal.onOpen}  >Search Image</Button>
            <Button onClick={() => router.push("/cart")} className="flex items-center rounded-full bg-black px-4 py-2" >
                <ShoppingBag size={20} color="white" />
                <span className="ml-2 text-sm font-medium text-white" >
                    {Cart.items.length}
                </span>
            </Button>
        </div>

    );
}
 
export default NavbarActions;