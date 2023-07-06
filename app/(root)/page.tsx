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
  return <>
  <section className="homepage p-4">
  RootPage
  </section>
  </>
}

export default HomePage;
