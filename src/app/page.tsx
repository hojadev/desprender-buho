"use client"
import Image from "next/image";
import { gaegu, gloria } from "./fonts";
import VinetasIndex from "@/components/index/VinetasIndex";
import { useEffect, useState } from "react";
import Loading from "@/components/common/Loading";
import Cierre from "@/components/index/Cierre";
import NavBarIndex from "@/components/index/NavBarIndex";
import Contacto from "@/components/index/Contacto";
import Colaboradores from "@/components/index/Colaboradores";


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
		<div className="bg-index w-[100wvh] flex flex-col">
			{isLoading ? <Loading/> : <>
				<main className="flex justify-center flex-col items-center bg-index gap-4" id="index">

				
				{/*BANNER DESPRENDER*/}
				<NavBarIndex/>
				<p id="" className={`${gloria.className} w-[80%] md:w-[65%] lg:w-[50%] font-light text-base lg:text-xl text-center mb-12 text-[#321C14]`}>
				¡Holaa! Sean bienvenidos a la web de <strong>DESPRENDER</strong>, un proyecto sobre el vínculo del arte callejero y su emocionalidad.<br/><br/>
				¿Sabías que según un estudio realizado por la ACHS la ansiedad se mantiene como el principal malestar psicológico en el país?<br/><br/>
				Tampoco es gran sorpresa por las constantes presiones tanto como laborales, escolares y sobre todo sociales, la ansiedad está más presente que nunca gracias al internet.
				Encajar en la sociedad se ha vuelto una exigencia y crecer con un sistema tan rígido y sin descanso puede llevarte a desarrollar ansiedad e incluso algún trastorno depresivo.
				</p>
				
				<VinetasIndex/>
				<a href="https://open.spotify.com/playlist/1eeNTVOXuHUVZeIoGVvj7A?si=86R7U66YT6-AxvM3b7N2Pg&pi=So5TrcuEQW2_n" target="_blank" rel="noopener noreferrer">
					<Image
						src={"https://res.cloudinary.com/dmlrehiwh/image/upload/v1733279457/xqcjar5psg7dywio4ywx.png"}
						alt="Primera vineta"
						width={500}
						height={300}
						priority={false}
						className=""	
					></Image>
				</a>

				<Cierre/>
				<span id="sos"></span>


				<Contacto/>

				<h2 className={`${gloria.className} w-[80%] md:w-[65%] lg:w-[50%] font-regular text-3xl lg:text-5xl text-center mb-12 text-[#321C14]`}>
                	Persiste.
            	</h2>
				<span id="colab"></span>
				<Colaboradores/>

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
