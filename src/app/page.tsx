"use client"

import NavIconButton from "@/components/ui-elements/NavIconButton";
import MyImage from "@/components/ui-elements/Image";
import { useEffect } from "react";
import { startPing, stopPing } from "@/ping/ping";
import { useRouter } from "next/navigation";

export default function Home() {

/*
    const router = useRouter()

useEffect(() => {
  const interval = startPing(router);

  return () => stopPing(interval)
}, [router]) */

return (
  <main className="w-[80%] h-[30rem] main flex flex-col items-center justify-center gap-20 rounded-lg p-6">
    <div className="w-full" >
      < MyImage
        src="/checklist-image.png"
        width={150}
        height={150}
        alt="Picture of a checklist"
      />
    </div>

    <div className="w-full text-center" >
      <h1 className="text-2xl"> Manage your <strong>tasks</strong> and ideas quickly </h1>
      <br />
      <NavIconButton href="/about" text=">" class="btn relative left-[7rem]" />
      
    </div>
    
  </main>

);
}
