import Image from "next/image"

type Props = {
    src: string,
    width: number,
    height: number,
    alt: string
    children?: React.ReactNode
}

export default function MyImage(props: Props) {
    return (
        <Image 
            src={props.src}
            width={props.width}
            height={props.height}
            alt={props.alt}
        > 
            {props.children}
        </Image>
    )
}
