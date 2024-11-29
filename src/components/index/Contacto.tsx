import { gaegu } from "@/app/fonts";

export default function Contacto(){

    return(
        <div className={`${gaegu.className} flex justify-center flex-col flex-wrap items-center bg-index gap-4 border border-[#321C14] py-8 px-4 my-8 w-full md:w-[500px]`}>
            <h2 className={`text-5xl md:text-8xl`}>Contacto SOS</h2>
            <div className="flex flex-row justify-around gap-4">
                <div className="flex flex-col flex-wrap gap-4">
                    <p className="text-2xl font-bold">Contencion Emocional</p>
                    <p className="text-2xl font-bold">Prevencio Suicidio</p>
                    <p className="text-2xl font-bold">SOS</p>
                </div>

                <div className="flex flex-col flex-wrap gap-4">
                    <p className="text-2xl">+56 9 44444444</p>
                    <p className="text-2xl">600 600 3000</p>
                    <p className="text-2xl">600 200 600 3000</p>
                </div>
            </div>
        </div>
    )
}