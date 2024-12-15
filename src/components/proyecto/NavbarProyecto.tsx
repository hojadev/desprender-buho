import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { gloria } from "@/app/fonts";

export default function NavbarProyecto(){
    const [isToggle, setIsToggle] = useState(false)

    const handleToggle = () => {
        setIsToggle(!isToggle)
    }

    return(
        <nav className="flex flex-col justify-between items-center sticky top-0 bg-project z-40 w-[100dvw]">
            <div className="flex flex-row justify-center items-center gap-12 ">
                <Image
                    src={"https://res.cloudinary.com/dmlrehiwh/image/upload/v1732849708/omyvjfxn2qz1xazni7qe.png"}
                    alt="Logo del proyecto Desprender"
                    width={500}
                    height={1000}
                    priority
                    className="w-[70%] md:w-[50dvw] xl:w-[30dvw] my-4 mx-2">	
                </Image>
                <button onClick={handleToggle} className="lg:w-[100px]">
                    <Image
                    src={"/menu.svg"}
                    alt="dropdown menu"
                    width={50}
                    height={50}
                    className="">
                    </Image>
                </button>

            </div>
            {isToggle && 
                <div className="bg-project w-[100%] fixed top-0 h-[100dvh]  flex flex-col items-center justify-start z-10">
                    <button onClick={handleToggle} className="my-6">
                        <Image
                            src={"/cancel.svg"}
                            alt="dropdown menu"
                            width={30}
                            height={30}
                            className=""
                            loading="lazy">
                        </Image>
                    </button>
                    <ul className="flex flex-col gap-4 overflow-y-scroll scroll-none mb-12">
                        <li className="flex flex-row justify-center items-center gap-4 ">
                            <Image
                                src={"https://res.cloudinary.com/dmlrehiwh/image/upload/v1733700195/mx7sksjf8ekodrs6vkvc.png"}
                                alt="dropdown menu"
                                width={80}
                                height={60}
                                className=""
                                loading="lazy">
                            </Image>
                            <Link 
                            className={`${gloria.className} w-[100%] font-bold text-lg lg:text-4xl text-[#321C14]`}
                            href={"/#inicio"} onClick={handleToggle}>Inicio</Link>
                        </li>

                        <li className="flex flex-row justify-center items-center gap-4 ">
                            <Image
                                src={"https://res.cloudinary.com/dmlrehiwh/image/upload/v1733700193/miqcxlccpnv9ft0aufaa.png"}
                                alt="dropdown menu"
                                width={80}
                                height={60}
                                className=""
                                loading="lazy">
                            </Image>
                            <Link 
                            className={`${gloria.className} w-[100%] font-bold text-lg lg:text-4xl text-[#321C14]`}
                            href={"/#sabes"} onClick={handleToggle}>Que Si/No Hacer</Link>
                        </li>

                        <li className="flex flex-row justify-center items-center gap-4 ">
                            <Image
                                src={"https://res.cloudinary.com/dmlrehiwh/image/upload/v1733700179/h9h2vnjjsinhaollwpn9.png"}
                                alt="dropdown menu"
                                width={80}
                                height={60}
                                className=""
                                loading="lazy">
                            </Image>
                            <Link 
                            className={`${gloria.className} w-[80%] font-bold text-lg lg:text-4xl text-[#321C14]`}
                            href={"/#respira"} onClick={handleToggle}>Ejercicios Respiracion</Link>
                        </li>

                        <li className="flex flex-row justify-center items-center gap-4 ">
                            <Image
                                src={"https://res.cloudinary.com/dmlrehiwh/image/upload/v1733700179/l3vbnuq48ics3vcelnv9.png"}
                                alt="dropdown menu"
                                width={80}
                                height={60}
                                className=""
                                loading="lazy">
                            </Image>
                            <Link 
                            className={`${gloria.className} w-[80%] font-bold text-lg lg:text-4xl text-[#321C14]`}
                            href={"/#tips"} onClick={handleToggle}>Tips</Link>
                        </li>
                        <li className="flex flex-row justify-center items-center gap-4 ">
                            <Image
                                src={"https://res.cloudinary.com/dmlrehiwh/image/upload/v1733700194/qhgjhysvnsfo2vsndh5m.png"}
                                alt="dropdown menu"
                                width={80}
                                height={60}
                                className=""
                                loading="lazy">
                            </Image>
                            <Link 
                            className={`${gloria.className} w-[80%] font-bold text-lg lg:text-4xl text-[#321C14]`}
                            href={"/#playlist"} onClick={handleToggle}>Playlist Spotify</Link>
                        </li>
                        <li className="flex flex-row justify-center items-center gap-4 ">
                            <Image
                                src={"https://res.cloudinary.com/dmlrehiwh/image/upload/v1733700214/zhjo5yhhxkn8w5zycxqu.png"}
                                alt="dropdown menu"
                                width={100}
                                height={60}
                                className=""
                                loading="lazy">
                            </Image>
                            <Link 
                            className={`${gloria.className} w-[80%] font-bold text-lg lg:text-4xl text-[#321C14]`}
                            href={"/#sos"} onClick={handleToggle}>Contacto SOS</Link>
                        </li>
                        <li className="flex flex-row justify-center items-center gap-4 ">
                            <Image
                                src={"https://res.cloudinary.com/dmlrehiwh/image/upload/v1733700179/vhu0vk8s1oy3w3qymag6.png"}
                                alt="dropdown menu"
                                width={80}
                                height={60}
                                className=""
                                loading="lazy">
                            </Image>
                            <Link 
                            className={`${gloria.className} w-[80%] font-bold text-lg lg:text-4xl text-[#321C14]`}
                            href={"/#colab"} onClick={handleToggle}>Colaboradores</Link>
                        </li>
                        <li className="flex flex-row justify-center items-center gap-4 ">
                            <Image
                                src={"https://res.cloudinary.com/dmlrehiwh/image/upload/v1732501705/ngijonxwyb1jfghibnng.gif"}
                                alt="dropdown menu"
                                width={80}
                                height={60}
                                className=""
                                loading="lazy">
                            </Image>
                            <Link 
                            className={`${gloria.className} w-[80%] font-bold text-lg lg:text-4xl text-[#321C14]`}
                            href={"/proyecto"} onClick={handleToggle}>Sobre Desprender</Link>
                        </li>
                    </ul>
            </div>}
        </nav>
    )
}