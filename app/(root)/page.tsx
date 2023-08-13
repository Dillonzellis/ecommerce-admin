'use client'

import { useEffect } from "react";

import { UserButton } from "@clerk/nextjs";
import { useStoreModal } from "@/hooks/use-modal-store";


export default function Home() {

  const onOpen = useStoreModal((state) => state.onOpen)
  const isOpen = useStoreModal((state) => state.isOpen)

  useEffect(() => {
    if (!isOpen) {
      onOpen()
    }
  }, [isOpen, onOpen])

  return (
    <div className='min-h-screen bg-black text-slate-50'>
      <div className="p-8">
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  )
}
