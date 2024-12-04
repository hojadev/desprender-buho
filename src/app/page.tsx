"use client"
import BotonNav from "@/components/index/botonNav";
import Image from "next/image";
import { gaegu, gloria } from "./fonts";
import VinetasIndex from "@/components/index/VinetasIndex";
import Contacto from "@/components/index/Contacto";
import { useEffect, useState } from "react";
import Loading from "@/components/common/Loading";
import Cierre from "@/components/index/Cierre";


export default function Home() {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
	  const handleLoad = () => {
		setIsLoading(false);
	  };
  
	  // Simula una carga inicial o espera a que la página esté completamente lista.
	  if (document.readyState === "complete") {
		handleLoad();
	  } else {
		window.addEventListener("load", handleLoad);
	  }
  
	  return () => {
		window.removeEventListener("load", handleLoad);
	  };
	}, []);

	return (
		<div className="bg-index w-[100wvh]">
			{isLoading ? <Loading/> : <>
				<main className="flex justify-center flex-col items-center bg-index gap-4">
				<BotonNav/>
				
				{/*BANNER DESPRENDER*/}
				<Image
				src={"https://res.cloudinary.com/dmlrehiwh/image/upload/v1732849708/omyvjfxn2qz1xazni7qe.png"}
				alt="Logo del proyecto Desprender"
				width={500}
				height={1000}
				priority
				className="w-[95dvw] md:w-[50dvw] xl:w-[30dvw] my-8 md:mb-20">	
				</Image>
				<p className={`${gloria.className} w-[80%] md:w-[65%] lg:w-[50%] font-light text-base lg:text-xl text-center mb-12 text-[#321C14]`}>
				¡Holaa! Sean bienvenidos a la web de <strong>DESPRENDER</strong>, un proyecto sobre el vínculo del arte callejero y su emocionalidad.<br/><br/>
				¿Sabías que según un estudio realizado por la ACHS la ansiedad se mantiene como el principal malestar psicológico en el país?<br/><br/>
				Tampoco es gran sorpresa por las constantes presiones tanto como laborales, escolares y sobre todo sociales, la ansiedad está más presente que nunca gracias al internet.
				Encajar en la sociedad se ha vuelto una exigencia y crecer con un sistema tan rígido y sin descanso puede llevarte a desarrollar ansiedad e incluso algún trastorno depresivo.
				</p>
				
				<VinetasIndex/>

				<Image
					src={"https://res.cloudinary.com/dmlrehiwh/image/upload/v1733279457/xqcjar5psg7dywio4ywx.png"}
					alt="Primera vineta"
					width={500}
					height={300}
					priority={false}
					className=""	
            	></Image>

				<Cierre/>

				{/* <Contacto/> */}

				<h2 className={`${gloria.className} w-[80%] md:w-[65%] lg:w-[50%] font-regular text-3xl lg:text-5xl text-center mb-12 text-[#321C14]`}>
                	Persiste.
            	</h2>

			</main>
			<footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
				<p className={`${gaegu.className} mt-16 w-[80%] md:w-[65%] lg:w-[50%] font-bold text-2xl lg:text-3xl text-center text-[#321C14]`}>
					{"Pagina hecha por hojadev <3"}
				</p>
			</footer>
			</>}
		</div>
	);
}
