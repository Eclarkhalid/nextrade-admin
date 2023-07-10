"use client"

import React from "react";
import { useEffect } from "react";


import { useStoreModal } from "@/hooks/use-store-modal";

 const HomePage = () => {

  const onOpen = useStoreModal((state) => state.onOpen);

  const isOpen = useStoreModal((state) => state.isOpen);

  useEffect(() => {
    if(!isOpen) {
      onOpen();

    }
  }, [isOpen, onOpen])
  return null;
}

export default HomePage;
