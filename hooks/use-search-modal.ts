import { create } from "zustand";
import { Product } from "@/type";

interface SearchModalStore {
    isOpen: boolean;
    data?: String;
    onOpen: () => void;
    onClose: () => void;
}

const useSearchModal = create<SearchModalStore>((set) => ({
    isOpen: false,
    data: undefined,
    onOpen: () => set({isOpen: true}),
    onClose: () => set({isOpen:false})
}));


export default useSearchModal