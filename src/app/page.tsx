"use client"
import BotonNav from "@/components/index/botonNav";
import Image from "next/image";
import { gaegu } from "./fonts";
import VinetasIndex from "@/components/index/VinetasIndex";
import Contacto from "@/components/index/Contacto";
import { useEffect, useState } from "react";
import Loading from "@/components/common/Loading";


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
				<p className={`${gaegu.className} w-[80%] md:w-[65%] lg:w-[50%] font-bold text-2xl lg:text-3xl text-center my-4 text-[#321C14]`}>
					Lorem ipsum odor amet, consectetuer adipiscing elit. Luctus erat fusce litora maecenas gravida consectetur. Proin ligula platea vitae, malesuada hendrerit nulla primis orci. Elementum semper venenatis placerat vivamus ex. 
					Nullam laoreet eros ad gravida, quam netus arcu. Ligula integer magna penatibus vel, diam urna a laoreet porta. Aptent euismod risus vel odio at sem. 
					Tempus sed torquent nunc sem duis nulla. Nibh egestas torquent nunc mus egestas ad in.
				</p>
				<VinetasIndex/>

				<Image
					src={"https://res.cloudinary.com/dmlrehiwh/image/upload/v1732501703/y0ak3je8wpeazizkvgbt.png"}
					alt="Primera vineta"
					width={500}
					height={300}
					priority={false}
					className="w-[50%] md:w-[25%] rotate-90 "	
            	></Image>

				<p className={`${gaegu.className} w-[80%] md:w-[65%] lg:w-[50%] font-bold text-2xl lg:text-3xl text-center text-[#321C14]`}>
					Lorem ipsum odor amet, consectetuer adipiscing elit. Luctus erat fusce litora maecenas gravida consectetur. Proin ligula platea vitae, malesuada hendrerit nulla primis orci. Elementum semper venenatis placerat vivamus ex. 
					Nullam laoreet eros ad gravida, quam netus arcu. 
				</p>
				<Contacto/>
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
