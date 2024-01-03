import { create } from "zustand";
import { Product } from "@/type";

interface SuccessModalStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

const useSuccessModal = create<SuccessModalStore>((set) => ({
    isOpen: false,
    onOpen: () => set({isOpen: true}),
    onClose: () => set({isOpen:false})
}));


export default useSuccessModal