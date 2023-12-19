import { create } from "zustand";
import { Product } from "@/type";

interface SearchModalStore {
    isOpen: boolean;
    data?: string;
    onOpen: () => void;
    onClose: () => void;
    setData: (url:string) => void;
}

const useSearchModal = create<SearchModalStore>((set) => ({
    isOpen: false,
    data: undefined,
    onOpen: () => set({isOpen: true}),
    onClose: () => set({isOpen:false}),
    setData: (url: string) => set({data: url})
}));


export default useSearchModal