import { gloria } from "@/app/fonts";
import { VinetaProps } from "@/app/typex";
import Image from "next/image";

export default function Vineta({src,alt}: VinetaProps){

    return(
        <div className="flex justify-center flex-col items-center bg-index gap-4">
            <Image
				src={src}
				alt={alt}
				width={500}
				height={700}
				className="w-[95dvw] md:w-[50dvw] xl:w-[30dvw] relative top-[-20px]"
                loading="lazy">	
			</Image>
        </div>
    )
}