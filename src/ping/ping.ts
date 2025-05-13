"use client"

import axios from "axios"
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";



export const startPing = (router: AppRouterInstance) => {
    const interval: NodeJS.Timeout = setInterval(() => {
        axios.post("https://task-manager-api-2025.up.railway.app/api/refresh-token")
            .then((res) => res.data())
            .catch((err) => {
                if (axios.isAxiosError(err)) {
                    if (err.response?.status === 401) {
                        console.log("error:", err.response?.data.error);
                        router.push("/login")
                    }
                }
            })

    }, 20000);

    return interval
}

export const stopPing = (interval: NodeJS.Timeout) => {
    clearInterval(interval)
}
