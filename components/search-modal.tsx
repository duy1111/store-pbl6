"use client";

import { useState,useEffect, MouseEventHandler } from "react";
import useSearchModal from "@/hooks/use-search-modal";
import Modal from "./ui/modal";
import Gallery from "./gallery";
import ImageUpload from "./image-upload";
import Button from "./ui/button";
const SearchModal = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [loading, setLoading] = useState(false);
  const searchModal = useSearchModal();
  const searchStore = useSearchModal((state) => state.data);
  const [data, setData] = useState<string>('')
  useEffect(() => {
    setIsMounted(true)
},[])
  const onChange = (url: string) => {
    setData(url)
  }

  const onClick: MouseEventHandler<HTMLButtonElement> = async(event) => {
    event.stopPropagation();
    console.log(data)
    searchModal.onClose()
  }


  return (
    <Modal open={searchModal.isOpen} onClose={searchModal.onClose} >
      
          <div className="flex gap-2 items-center justify-between w-full py-4">
            <ImageUpload
              value={data ? [data] : []}
              disabled={loading} 
              onChange={(url) => onChange(url)}
              onRemove={() => onChange('')}
            />
  
            <Button onClick={onClick} >Search</Button>
          </div>
      


    
    </Modal>
  );
};

export default SearchModal;
