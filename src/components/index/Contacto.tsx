import { gaegu } from "@/app/fonts";
import Image from "next/image";

export default function Contacto(){

    return(
        <div className={`${gaegu.className} flex justify-center flex-col flex-wrap items-center `}>
            <h3 className="text-5xl font-bold w-[50%] text-center">Contactos Emergencia</h3>
            <p className={`${gaegu.className} mt-16 w-[80%] md:w-[65%] lg:w-[50%] font-bold text-2xl lg:text-3xl text-center text-[#321C14]`}>
					Haz <strong>Click</strong> en las notas para redirigirte al medio correspondiente
				</p>

            <div className="flex flex-col lg:flex-row flex-wrap lg:w-[60%]">
                <a href="https://todomejora.org/" target="_blank" rel="noopener noreferrer">
                    <Image
                    alt="contacto emergencia 1"
                    src={"https://res.cloudinary.com/dmlrehiwh/image/upload/v1733700197/jer998ilrdz0aoevijvw.png"}
                    width={1000}
                    height={1000}
                    loading="lazy"
                    className="lg:w-[400px]">
                    </Image>
                </a>
                <a href="tel:1412" target="_blank" rel="noopener noreferrer">
                    <Image
                    alt="contacto emergencia 1"
                    src={"https://res.cloudinary.com/dmlrehiwh/image/upload/v1733700205/ptv9joxcy1aarq5qmkvt.png"}
                    width={1000}
                    height={1000}
                    loading="lazy"
                    className="lg:w-[400px]">
                    </Image>
                </a>
                <a href="tel:1455" target="_blank" rel="noopener noreferrer">
                    <Image
                    alt="contacto emergencia 1"
                    src={"https://res.cloudinary.com/dmlrehiwh/image/upload/v1733700196/gcr0hxtdhjwehsgm538n.png"}
                    width={1000}
                    height={1000}
                    loading="lazy"
                    className="lg:w-[400px]">
                    </Image>
                </a>
                <a href="tel:4141" target="_blank" rel="noopener noreferrer">
                    <Image
                    alt="contacto emergencia 1"
                    src={"https://res.cloudinary.com/dmlrehiwh/image/upload/v1733700177/jkxmcyzeu53pkm6fuc5t.png"}
                    width={1000}
                    height={1000}
                    loading="lazy"
                    className="lg:w-[400px]">
                    </Image>
                </a>
                <a href="tel:6003607777" target="_blank" rel="noopener noreferrer">
                    <Image
                    alt="contacto emergencia 1"
                    src={"https://res.cloudinary.com/dmlrehiwh/image/upload/v1733700178/klvtev2ndzm4hrpk7s59.png"}
                    width={1000}
                    height={1000}
                    loading="lazy"
                    className="lg:w-[400px]">
                    </Image>
                </a>
            </div>
        </div>
    )
}