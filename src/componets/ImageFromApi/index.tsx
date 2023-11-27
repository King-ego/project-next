"use client"
import ImageGateway from "@/services/http/modules/images";
import Image from "next/image";
import Authorization from "@/services/http/cookie/clientCookie";
import {useEffect, useState} from "react";

interface IImageFromApiComponent {
    fileName: string;
}

export default function ImageFromApiComponent({fileName}: IImageFromApiComponent) {
    const [src, setSRC] = useState("")

    async function getImage() {
        const Buffer = await ImageGateway().getImageAWS({filename: fileName, Authorization})
        if (!Buffer) return ;
        const blob = new Blob([Buffer], {type: "image"});
        const url = URL.createObjectURL(blob);
        setSRC(url);
    }

    useEffect(() => {
        getImage().then(() => "ok")
    }, []);
    if(!src) return <></>;
    return (
        <Image src={src} alt="Imagem da API" fill className={`
                h-full object-cover
            `}/>
    )

}
