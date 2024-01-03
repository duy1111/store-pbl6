"use client";

import { useState, useEffect, MouseEventHandler } from "react";
import useSearchModal from "@/hooks/use-search-modal";
import Modal from "./ui/modal";
import ImageUpload from "./image-upload";
import Button from "./ui/button";
import { usePathname, useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import qs from "query-string";
import { redirect } from "next/navigation";

import axios from "axios";
const SearchModal = () => {
  const [loading, setLoading] = useState(false);
  const searchModal = useSearchModal();
  const [data, setData] = useState<string>("");
  const router = useRouter();
  const pathname = usePathname();
  const onChange = (url: string) => {
    setData(url);
  };
  const isSearchPage = pathname?.startsWith(`/search`);
  const searchParams = useSearchParams();
  const onClick: MouseEventHandler<HTMLButtonElement> = async (event) => {
    setLoading(true);
    event.stopPropagation();
    const current = qs.parse(searchParams.toString());
    const response = await axios.post("http://20.63.121.43:8000/image-search", {
      image: data,
    });
    const query = {
      ...current,
      categoryName: response.data,
    };
    const url = qs.stringifyUrl(
      {
        url: isSearchPage ? window.location.href : "/search",
        query,
      },
      { skipNull: true }
    );
    router.push(url);
    setLoading(false);
    searchModal.onClose();
  };

  return (
    <Modal open={searchModal.isOpen} onClose={searchModal.onClose}>
      <div className="flex gap-2 items-center justify-between w-full py-4">
        <ImageUpload
          value={data ? [data] : []}
          disabled={loading}
          onChange={(url) => onChange(url)}
          onRemove={() => onChange("")}
        />

        <Button onClick={onClick}>Search</Button>
      </div>
    </Modal>
  );
};

export default SearchModal;
