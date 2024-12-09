import { gloria } from "@/app/fonts";
import Image from "next/image";

export default function Colaboradores(){

    return(
        <div className={`${gloria.className} flex flex-col items-center w-full lg:w-[50%]` }>
            <h3 className={` ${gloria.className} text-5xl font-bold my-4`}>Colaboradores</h3>
            <a href="https://www.instagram.com/rocioantnia/" target="_blank" rel="noopener noreferrer" 
            className="flex flex-row justify-center items-center w-[300px] md:w-[500px]">
                <div className="flex flex-col">
                    <h4 className="text-3xl">Rocio Salas Lillo</h4>
                    <p>Psicologa</p>

                </div>
                <Image
                    alt="contacto emergencia 1"
                    src={"https://res.cloudinary.com/dmlrehiwh/image/upload/v1733700154/dirvkml8wm65q7ukya3h.png"}
                    width={200}
                    height={200}
                    loading="lazy"
                    className="">
                </Image>
            </a>
            <a href="https://hojadev.xyz/" target="_blank" rel="noopener noreferrer"
            className="flex flex-row justify-around items-center w-[300px] md:w-[500px]">
                <div className="flex flex-col">
                    <h4 className="text-3xl">Hoja Dev</h4>
                    <p>Programador</p>

                </div>
                <Image
                    alt="contacto emergencia 1"
                    src={"https://res.cloudinary.com/dmlrehiwh/image/upload/v1733700154/ikcagco845tmz2ik3a0d.png"}
                    width={200}
                    height={200}
                    loading="lazy"
                    className="">
                </Image>
            </a>
        </div>
    )
}