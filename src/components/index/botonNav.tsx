import { gaegu } from "@/app/fonts";
import Image from "next/image";

export default function BotonNav(){

    return (
        <button className="w-[70px] h-[50px] xl:w-[150px] xl:h-[150px] flex flex-col items-center justify-center fixed top-[150px] left-2 lg:left-[200px]">
            <Image
            src={"https://res.cloudinary.com/dmlrehiwh/image/upload/v1732501705/ngijonxwyb1jfghibnng.gif"}
            alt="Ir a Sobre el Proyecto"
            width={200}
            height={200}
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNs/Q8AAg8Bhso7688AAAAASUVORK5CYII="
            priority={false}
            unoptimized
            ></Image>
            <div className="flex flex-col relative top-[-20px]">
                <p className={`${gaegu.className}`}>Sobre</p>
                <p className={`${gaegu.className}`}>Desprender</p>
            </div>
        </button>
    )
}