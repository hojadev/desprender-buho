import { gaegu } from "@/app/fonts";
import { VinetaProps } from "@/app/typex";
import Image from "next/image";

export default function Vineta({src,alt,text}: VinetaProps){

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
			<p className={`${gaegu.className} w-[80%] md:w-[65%] lg:w-[50%] font-bold text-2xl lg:text-3xl text-center text-[#321C14]`}>
				{text}
			</p>
        </div>
    )
}