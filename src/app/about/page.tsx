"use client"
import { startPing, stopPing } from "@/ping/ping";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function About() {

  const router = useRouter()

  useEffect(() => {
      const interval = startPing(router);

      return () => stopPing(interval)
  }, [router])



  return(
    <h1> About </h1>
  )
}

