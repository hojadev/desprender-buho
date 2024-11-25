import BotonNav from "@/components/index/botonNav";
import Image from "next/image";
import { gaegu } from "./fonts";
import Link from "next/link";

export default function Home() {
	return (
		<div className="bg-index w-[100wvh] h-[100dvh]">
			<main className=" flex justify-center flex-col items-center bg-index gap-4">
				<BotonNav/>
				<Image
				src={"https://res.cloudinary.com/dmlrehiwh/image/upload/v1732501702/vm1l7ounzt41f1zyunbu.png"}
				alt="Logo del proyecto Desprender"
				width={1000}
				height={1000}
				className="w-[95dvw] md:w-[50dvw] xl:w-[30dvw] relative top-[-20px]">	
				</Image>
				<p className={`${gaegu.className} w-[80%] md:w-[65%] lg:w-[50%] font-bold text-2xl lg:text-3xl text-center`}>
					Lorem ipsum odor amet, consectetuer adipiscing elit. Luctus erat fusce litora maecenas gravida consectetur. Proin ligula platea vitae, malesuada hendrerit nulla primis orci. Elementum semper venenatis placerat vivamus ex. 
					Nullam laoreet eros ad gravida, quam netus arcu. Ligula integer magna penatibus vel, diam urna a laoreet porta. Aptent euismod risus vel odio at sem. 
					Tempus sed torquent nunc sem duis nulla. Nibh egestas torquent nunc mus egestas ad in.
				</p>
				<Image
					src={"https://res.cloudinary.com/dmlrehiwh/image/upload/v1732501706/pf8ykt9lwsw88gqqdayv.png"}
					alt="Primera vineta"
					width={1000}
					height={1000}
					priority={false}
					className="w-[100%] md:w-[50%] lg:w-[500px]"	
            	></Image>

				<p className={`${gaegu.className} w-[80%] md:w-[65%] lg:w-[50%] font-bold text-2xl lg:text-3xl text-center`}>
					Lorem ipsum odor amet, consectetuer adipiscing elit. Luctus erat fusce litora maecenas gravida consectetur. Proin ligula platea vitae, malesuada hendrerit nulla primis orci. Elementum semper venenatis placerat vivamus ex. 
				</p>

				<Image
					src={"https://res.cloudinary.com/dmlrehiwh/image/upload/v1732501705/z7q70fgpzsllmyyslrd5.png"}
					alt="Primera vineta"
					width={1000}
					height={1000}
					priority={false}
					className="w-[100%] md:w-[50%] lg:w-[500px]"	
            	></Image>
				
				<p className={`${gaegu.className} w-[80%] md:w-[65%] lg:w-[50%] font-bold text-2xl lg:text-3xl text-center`}>
					Lorem ipsum odor amet, consectetuer adipiscing elit. Luctus erat fusce litora maecenas gravida consectetur. Proin ligula platea vitae, malesuada hendrerit nulla primis orci. Elementum semper venenatis placerat vivamus ex. 
				</p>

				<Image
					src={"https://res.cloudinary.com/dmlrehiwh/image/upload/v1732501705/onhxkw4ixeqagbmnuk1k.png"}
					alt="Primera vineta"
					width={1000}
					height={1000}
					priority={false}
					className="w-[100%] md:w-[50%] lg:w-[500px]"	
            	></Image>

				<p className={`${gaegu.className} w-[80%] md:w-[65%] lg:w-[50%] font-bold text-2xl lg:text-3xl text-center`}>
					Lorem ipsum odor amet, consectetuer adipiscing elit. Luctus erat fusce litora maecenas gravida consectetur. Proin ligula platea vitae, malesuada hendrerit nulla primis orci. Elementum semper venenatis placerat vivamus ex. 
				</p>

				<Image
					src={"https://res.cloudinary.com/dmlrehiwh/image/upload/v1732501706/zacfpuxyd7u2whqqmlw8.png"}
					alt="Primera vineta"
					width={1000}
					height={1000}
					priority={false}
					className="w-[100%] md:w-[50%] lg:w-[500px]"	
            	></Image>

				<div className="flex flex-wrap flex-row">
					<Image
						src={"https://res.cloudinary.com/dmlrehiwh/image/upload/v1732501705/ucp823umpw8ylhs4ytqg.png"}
						alt="Primera vineta"
						width={1000}
						height={1000}
						priority={false}
						className="mt-8 w-[100%] md:w-[50%] lg:w-[500px]"	
					></Image>
					
					<Image
						src={"https://res.cloudinary.com/dmlrehiwh/image/upload/v1732501708/kqbs4medqhz1y1hv6tdm.png"}
						alt="Primera vineta"
						width={1000}
						height={1000}
						priority={false}
						className="mt-8 w-[100%] md:w-[50%] lg:w-[500px]"	
					></Image>
					
				</div>

				<p className={`${gaegu.className} w-[80%] md:w-[65%] lg:w-[50%] font-bold text-2xl lg:text-3xl text-center`}>
					Lorem ipsum odor amet, consectetuer adipiscing elit. Luctus erat fusce litora maecenas gravida consectetur. Proin ligula platea vitae, malesuada hendrerit nulla primis orci. Elementum semper venenatis placerat vivamus ex. 
					Nullam laoreet eros ad gravida, quam netus arcu. Ligula integer magna penatibus vel, diam urna a laoreet porta. Aptent euismod risus vel odio at sem. 
					Tempus sed torquent nunc sem duis nulla. Nibh egestas torquent nunc mus egestas ad in.
				</p>
				<p className={`${gaegu.className} w-[80%] md:w-[65%] lg:w-[50%] font-bold text-2xl lg:text-3xl text-center`}>
					Lorem ipsum odor amet, consectetuer adipiscing elit. Luctus erat fusce litora maecenas gravida consectetur. Proin ligula platea vitae, malesuada hendrerit nulla primis orci. Elementum semper venenatis placerat vivamus ex. 
					Nullam laoreet eros ad gravida, quam netus arcu. Ligula integer magna penatibus vel, diam urna a laoreet porta. Aptent euismod risus vel odio at sem. 
					Tempus sed torquent nunc sem duis nulla. Nibh egestas torquent nunc mus egestas ad in.
				</p>
				<Image
					src={"https://res.cloudinary.com/dmlrehiwh/image/upload/v1732501706/fsyulpeuprnixpmtpmny.png"}
					alt="Primera vineta"
					width={1000}
					height={1000}
					priority={false}
					className="w-[100%] md:w-[50%] lg:w-[700px]"	
            	></Image>
				<p className={`${gaegu.className} w-[80%] md:w-[65%] lg:w-[50%] font-bold text-2xl lg:text-3xl text-center`}>
					Lorem ipsum odor amet, consectetuer adipiscing elit. Luctus erat fusce litora maecenas gravida consectetur. Proin ligula platea vitae, malesuada hendrerit nulla primis orci. Elementum semper venenatis placerat vivamus ex. 
					Nullam laoreet eros ad gravida, quam netus arcu. Ligula integer magna penatibus vel, diam urna a laoreet porta. Aptent euismod risus vel odio at sem. 
					Tempus sed torquent nunc sem duis nulla. Nibh egestas torquent nunc mus egestas ad in.
				</p>
				<Image
					src={"https://res.cloudinary.com/dmlrehiwh/image/upload/v1732501706/rlxmywwi0ergfenofyma.png"}
					alt="Primera vineta"
					width={1000}
					height={1000}
					priority={false}
					className="w-[100%] md:w-[50%] lg:w-[500px]"	
            	></Image>
				<p className={`${gaegu.className} w-[80%] md:w-[65%] lg:w-[50%] font-bold text-2xl lg:text-3xl text-center`}>
					Lorem ipsum odor amet, consectetuer adipiscing elit. Luctus erat fusce litora maecenas gravida consectetur. Proin ligula platea vitae, malesuada hendrerit nulla primis orci. Elementum semper venenatis placerat vivamus ex. 
					Nullam laoreet eros ad gravida, quam netus arcu. 
				</p>
				<Image
					src={"https://res.cloudinary.com/dmlrehiwh/image/upload/v1732501703/y0ak3je8wpeazizkvgbt.png"}
					alt="Primera vineta"
					width={500}
					height={500}
					priority={false}
					className="w-[50%] md:w-[25%] rotate-90 "	
            	></Image>

				<p className={`${gaegu.className} w-[80%] md:w-[65%] lg:w-[50%] font-bold text-2xl lg:text-3xl text-center`}>
					Lorem ipsum odor amet, consectetuer adipiscing elit. Luctus erat fusce litora maecenas gravida consectetur. Proin ligula platea vitae, malesuada hendrerit nulla primis orci. Elementum semper venenatis placerat vivamus ex. 
					Nullam laoreet eros ad gravida, quam netus arcu. 
				</p>
				<p className={`${gaegu.className} mt-16 w-[80%] md:w-[65%] lg:w-[50%] font-bold text-2xl lg:text-3xl text-center`}>
					{"Pagina hecha por hojadev <3"}
				</p>
			</main>
			<footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
			</footer>
		</div>
	);
}
