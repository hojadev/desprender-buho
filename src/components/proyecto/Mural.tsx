import { modak } from "@/app/fonts";
import { MuralProps } from "@/app/typex";
import Image from "next/image";

export default function Mural({src, alt, subtitle}: MuralProps){

    return (
        <div className="flex flex-col justify-center my-6 md:my-12">
            <Image
                src={src}
                alt={alt}
                width={1000}
                height={1000}
                className="w-[100dvw] md:w-[70dvw] xl:w-[50dvw] self-center"
                loading="lazy">	
            </Image>
            <h4 className={`${modak.className} text-xl xl:text-5xl text-black ml-2 md:w-[80%] self-center mt-4`}>{subtitle}</h4>
        </div>
    ) 
}