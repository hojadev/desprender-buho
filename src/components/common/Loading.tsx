import { gaegu } from "@/app/fonts";
import Image from "next/image";

export default function Loading(){

    return(
        <div className=" bg-[#E8E0C3] w-[100dvw] h-[100dvh] fixed flex flex-col justify-center items-center">
            <Image
                src={"https://res.cloudinary.com/dmlrehiwh/image/upload/v1732501705/ngijonxwyb1jfghibnng.gif"}
                alt="Ir a Sobre el Proyecto"
                width={300}
                height={300}
                priority={true}
                unoptimized
            ></Image>
            <h2 className={`${gaegu.className} text-4xl`}>Cargando...</h2>
        </div>
    )
}