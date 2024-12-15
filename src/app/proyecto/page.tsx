"use client"
import NavbarProyecto from "@/components/proyecto/NavbarProyecto"
import Image from "next/image";
import { gaegu, gloria } from "../fonts";
import { useEffect, useState } from "react";
import Link from "next/link";
import Mural from "@/components/proyecto/Mural";
import LoadingProject from "@/components/common/LoadingProject";



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
		<div className="bg-index w-[100wvh] flex flex-col bg-project">
			{isLoading ? <LoadingProject/> : <>
			<main className="flex justify-center flex-col items-center bg-project gap-4" id="index">
				{/* Navbar */}
				<NavbarProyecto/>
				{/* Video */}
				<video width={1000} height={500} controls preload="auto" autoPlay >
					<source src="https://res.cloudinary.com/dmlrehiwh/video/upload/v1734241507/qx5khilhholfoaqmrwki.mp4" type="video/mp4" />
				</video>
				{/* Presentacion BUHO */}
				<Image
					src={"https://res.cloudinary.com/dmlrehiwh/image/upload/v1734229743/xdf0sav3y0vjfph8fq7y.png"}
					alt={"Imagen del Perro feo sosteniendo una foto de Buho"}
					width={500}
					height={700}
					className="w-[95dvw] md:w-[50dvw] xl:w-[30dvw]"
					loading="lazy">	
				</Image>

				<div className="w-full flex flex-col justify-center items-center">
					<p id="" className={`${gloria.className} w-[80%] md:w-[65%] lg:w-[50%] font-light text-base lg:text-xl text-center mb-4 text-[#321C14]`}>
						Soy <strong>BUHO</strong>, egresada de Ilustración en el Instituto profesional Arcos Viña del
						Mar. A lo largo de mi carrera, exploré cómo <strong>el arte puede ser una herramienta
						poderosa para transmitir mensajes y generar conciencia.</strong>
					</p>
					<p id="" className={`${gloria.className} w-[80%] md:w-[65%] lg:w-[50%] font-light text-base lg:text-xl text-center mb-4 text-[#321C14]`}>
						Mis motivaciones son el hip-hop y la vida misma, aprendiendo de mis
						vivencias como de las experiencias de las personas que me rodean.
					</p>
					<p id="" className={`${gloria.className} w-[80%] md:w-[65%] lg:w-[50%] font-light text-base lg:text-xl text-center mb-4 text-[#321C14]`}>
						Me dedico al arte urbano y digital, y mi tesis nace de una motivación personal:
						la ansiedad y la salud mental son temas cruciales en nuestra época,
						especialmente con el aumento de personas que padecen de algún trastorno
						de ansiedad.
					</p>
					<p id="" className={`${gloria.className} w-[80%] md:w-[65%] lg:w-[50%] font-light text-base lg:text-xl text-center mb-4 text-[#321C14]`}>
						Mi objetivo es crear un mensaje que permita que los demás se sientan
						identificados y, a través de mi trabajo, brindarles un espacio de conciencia.
					</p>
				</div>
				{/* Contactos BUHO */}
				<div className="flex flex-row flex-wrap w-[80%] justify-center items-center">
					<Link href={"https://www.instagram.com/buho_lunart/"} target="_blank">
						<Image
							src={"https://res.cloudinary.com/dmlrehiwh/image/upload/v1734229748/aluvaegjjhsgdkq28isw.png"}
							alt={"Correo Buho"}
							width={500}
							height={300}
							className="w-full md:w-[500px]"
							loading="lazy">	
						</Image>
					</Link>
					<Link href={"búho.lunart@gmail.com"} target="_blank">
						<Image
							src={"https://res.cloudinary.com/dmlrehiwh/image/upload/v1734229743/l391yh98oo7nffzx4oii.png"}
							alt={"Correo Buho"}
							width={500}
							height={300}
							className="w-full md:w-[500px]"
							loading="lazy">	
						</Image>
					</Link>
				</div>



				<Image
					src={"https://res.cloudinary.com/dmlrehiwh/image/upload/v1734229741/hwt8y7ungyw42pnm7gxb.jpg"}
					alt={"Foto de BUHO"}
					width={1000}
					height={1000}
					className="w-[100dvw] md:w-[70dvw] xl:w-[50dvw]"
					loading="lazy">	
				</Image>

				<p id="" className={`${gloria.className} w-[80%] md:w-[65%] lg:w-[50%] font-light text-base lg:text-xl text-center my-4 text-[#321C14]`}>
					<strong>DESPRENDER</strong> tiene como objetivo explorar la relación entre el <strong> arte urbano y
					la salud mental </strong>, todo esto mediante 7 murales alrededor de la ciudad de
					Valparaíso. Cada mural está hecho en estilo viñeta corta, cada una contiene
					frases motivacionales que buscan conectarse con las experiencias de los
					transeúntes fomentando las reflexiones personales y colectivas.
				</p>	
				<Image
					src={"https://res.cloudinary.com/dmlrehiwh/image/upload/v1734229743/nu32lwhtxykbncblbn5g.jpg"}
					alt={"Foto de BUHO pintando uno de los murales"}
					width={1000}
					height={1000}
					className="w-[100dvw] md:w-[70dvw] xl:w-[50dvw]"
					loading="lazy">	
				</Image>
				<Image
					src={"https://res.cloudinary.com/dmlrehiwh/image/upload/v1734229743/iglkabzfdpvrqppgknz6.jpg"}
					alt={"Foto de BUHO pintando el QR presente en cada uno de los murales para poder acceder a la pagina desprender.xyz"}
					width={1000}
					height={1000}
					className="w-[100dvw] md:w-[70dvw] xl:w-[50dvw]"
					loading="lazy">	
				</Image>

				<h3 className={`${gloria.className} w-[80%] md:w-[65%] lg:w-[50%] font-regular text-2xl lg:text-4xl text-center my-24 text-[#321C14]`}>
					AHORA QUE YA ENCONTRASTE ESTE MURAL,<br/> <strong>¿POR QUÉ NO VAS POR
					LOS OTROS?</strong>
				</h3>
				{/* Murales */}


				<div className="flex flex-row flex-wrap w-full lg:w-[60%] justify-center items-center">
					<Mural 
					src="https://res.cloudinary.com/dmlrehiwh/image/upload/v1734229746/tvalss0ltgr3k4c7hkgm.jpg"
					alt="Mural: Cada proceso es sagrado"
					subtitle="Subida el Peral, cerro Concepción"/>

					<Mural 
					src="https://res.cloudinary.com/dmlrehiwh/image/upload/v1734239586/ahvawz2lmjxmveqgrpvz.jpg"
					alt="Mural: Todo da frutos"
					subtitle="Calle capitan Muñoz Gamero, cerro artillería"/>

					<Mural 
					src="https://res.cloudinary.com/dmlrehiwh/image/upload/v1734229745/cnrt1ecbrta7cqf6fn3g.jpg"
					alt="Mural: Confia en tus redes de apoyo"
					subtitle="Cerro Montealegre con higuera, cerro Concepción Valparaíso."/>

					<Mural 
					src="https://res.cloudinary.com/dmlrehiwh/image/upload/v1734229745/ksrkrlmszxxlmgnbbstf.jpg"
					alt="Mural: Abraza un perro"
					subtitle="Calle Sócrates, cerro cordillera"/>

					<Mural 
					src="https://res.cloudinary.com/dmlrehiwh/image/upload/v1734229742/s62wxwgfbrnxqgixha63.jpg"
					alt="Mural: No le des vuelta a las cosas que ya eran"
					subtitle="Ascensor espíritu santo, cerro Bellavista"/>

					<Mural 
					src="https://res.cloudinary.com/dmlrehiwh/image/upload/v1734240091/jyer9aql4lav4tgeqba5.png"
					alt="Mural: Hay que aprender a habitar las emociones"
					subtitle="Av Diego portales, cerro barón."/>

					<Mural 
					src="https://res.cloudinary.com/dmlrehiwh/image/upload/v1734240257/mf9tlasislrjskfzeom5.png"
					alt="Mural: Mueve el esqueleto"
					subtitle="Paseo 21 de mayo, cerro artillería."/>
					
				</div>
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