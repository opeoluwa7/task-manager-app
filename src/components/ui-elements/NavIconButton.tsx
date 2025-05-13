"use client";

import { useRouter } from "next/navigation";
import React from "react";

type Props = {
    href: string;
    text: string;
    class: string
}

export default function NavIconButton(props: Props) {

    const router = useRouter()

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        router.push(props.href)
    }

    return (
        <button className={props.class} onClick={handleClick}>
            {props.text} 
        </button>
    )
}
