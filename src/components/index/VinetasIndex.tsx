import { gloria } from "@/app/fonts";
import Vineta from "./Vineta";

export default function VinetasIndex(){

    const placeHolderText = `Lorem ipsum odor amet, consectetuer adipiscing elit. Luctus erat fusce litora maecenas gravida consectetur. Proin ligula platea vitae, malesuada hendrerit nulla primis orci. Elementum semper venenatis placerat vivamus ex. 
					Nullam laoreet eros ad gravida, quam netus arcu. Ligula integer magna penatibus vel, diam urna a laoreet porta. Aptent euismod risus vel odio at sem. 
					Tempus sed torquent nunc sem duis nulla. Nibh egestas torquent nunc mus egestas ad in.`
    return (
        <section className="flex justify-center flex-col items-center bg-index gap-4">
            {/* SABES LO QUE ES LA ANSIEDAD */}
            <Vineta
				src={"https://res.cloudinary.com/dmlrehiwh/image/upload/v1733279456/ckkgrzovlqhyb9yl9rik.png"}
				alt="Perro Feo: Pero, sabes lo que es la ansiedad?"
            />

            <div className="flex flex-col justify-center items-center">
                <p className={`${gloria.className} w-[80%] md:w-[65%] lg:w-[50%] font-light text-2xl lg:text-3xl text-center mb-12 text-[#321C14]`}>
                    La ansiedad podría manifestarse como un malestar persistente, tanto físico como
                    psicológico, que sería una respuesta a una amenaza futura.
                </p>
                <p className={`${gloria.className} w-[80%] md:w-[65%] lg:w-[50%] font-light text-2xl lg:text-3xl text-center mb-12 text-[#321C14]`}>
                    Se puede reconocer en momentos de nerviosismo y preocupación, con síntomas bastantes comunes como la
                    inquietud, fatiga, tensión muscular, sudoración, dificultad para controlar pensamientos,
                    sentir un nudo en la garganta, aceleración del corazón, etc…<br/><br/>
                </p>
                <p className={`${gloria.className} w-[80%] md:w-[65%] lg:w-[50%] font-light text-2xl lg:text-3xl text-center mb-12 text-[#321C14]`}>
                    Pero esencialmente se define como un malestar significativo que podría afectar tu vida diaria.
                    Acá te enseñaremos algunas técnicas personales por si tienes una crisis de pánico o ansiedad, pero primero…
               </p>
            </div>

            <h2 className={`${gloria.className} w-[80%] md:w-[65%] lg:w-[50%] font-regular text-3xl lg:text-5xl text-center mb-12 text-[#321C14]`}>
                ¿SABES COMO AYUDAR A ALGUIEN CON UNA CRISIS DE ANSIEDAD / PÁNICO?
            </h2>


            <Vineta
				src={"https://res.cloudinary.com/dmlrehiwh/image/upload/v1732501706/pf8ykt9lwsw88gqqdayv.png"}
				alt="Logo del proyecto Desprender"/>
            <Vineta
				src={"https://res.cloudinary.com/dmlrehiwh/image/upload/v1732501705/z7q70fgpzsllmyyslrd5.png"}
				alt="Logo del proyecto Desprender"/>
            <Vineta
				src={"https://res.cloudinary.com/dmlrehiwh/image/upload/v1732501705/onhxkw4ixeqagbmnuk1k.png"}
				alt="Logo del proyecto Desprender"/>
            <Vineta
				src={"https://res.cloudinary.com/dmlrehiwh/image/upload/v1732501706/zacfpuxyd7u2whqqmlw8.png"}
				alt="Logo del proyecto Desprender"/>
            
            {/* Ejercicios de respiracion */}

            <div className="flex flex-col justify-center items-center">
                <p className={`${gloria.className} w-[80%] md:w-[65%] lg:w-[50%] font-light text-2xl lg:text-3xl text-center mb-12 text-[#321C14]`}>
                    Los ejercicios de respiración son una de las herramientas más efectivas en
                    estos casos, puede que tocar a la persona en cuestión empeore la situación,
                    por lo que se recomienda cuidar el espacio personal… Quizá como máximo
                    tomate de las manos para que concentre su atención en ellas y guiarle para recuperar el control.
                </p>
                <p className={`${gloria.className} w-[80%] md:w-[65%] lg:w-[50%] font-light text-2xl lg:text-3xl text-center mb-12 text-[#321C14]`}>
                    A pesar de haber una guía amplia de respiraciones, a veces la persona se le
                    suele olvidar estando en una crisis, pero centrar al individuo para ayudarle a
                    hacer una serie de 5 respiraciones profundas ayuda bastante.<strong> ¡Puede costar
                    al principio, por lo que el cariño y la paciencia en estos casos son clave!</strong>
                </p>
                <p className={`${gloria.className} w-[80%] md:w-[65%] lg:w-[50%] font-light text-4xl lg:text-6xl text-center mb-12 text-[#321C14]`} > * </p>
                <p className={`${gloria.className} w-[80%] md:w-[65%] lg:w-[50%] font-light text-2xl lg:text-3xl text-center mb-12 text-[#321C14]`}>
                    <strong>Ahora unos ejercicios de respiración y tips que pueden servir en algún apuro…</strong>
               </p>
            </div>

            <Vineta
				src={"https://res.cloudinary.com/dmlrehiwh/image/upload/v1732501705/ucp823umpw8ylhs4ytqg.png"}
				alt="Respiracion "/>

            <div className="flex flex-col justify-center items-center">
                <p className={`${gloria.className} w-[80%] md:w-[65%] lg:w-[50%] font-light text-2xl lg:text-3xl text-center mb-12 text-[#321C14]`}>
                    La respiración diafragmática consiste en respirar profundo usando el
                    diafragma, o sea, con el estómago y no con el pecho.
                </p>
                <p className={`${gloria.className} w-[80%] md:w-[65%] lg:w-[50%] font-light text-2xl lg:text-3xl text-center mb-12 text-[#321C14]`}>
                    Inhalas lento dejando que el abdomen se expanda y luego exhalar despacio.
                    Esto ayuda a calmar el cuerpo porque activa el sistema nervioso
                    parasimpático, que induce una sensación de calma bajando los niveles de
                    estrés y ansiedad. Es como darle un respiro a tu mente y cuerpo, te ayudará
                    a sentirte más tranquilo y en control cuando las cosas te agobien. Repetir hasta sentirse bien
                </p>
            </div>

            {/* TRUCOS PARA UNA CRISIS */}

            <Vineta
				src={"https://res.cloudinary.com/dmlrehiwh/image/upload/v1732501708/kqbs4medqhz1y1hv6tdm.png"}
				alt="Logo del proyecto Desprender"/>

            <p className={`${gloria.className} w-[80%] md:w-[65%] lg:w-[50%] font-light text-2xl lg:text-3xl text-center mb-12 text-[#321C14]`}>
                Esta respiración es bastante simple: Inhalas por la nariz contando hasta 4, luego aguantas
                la respiración contacto hasta 7 y exhalas lentamente por la boca durante 8 segundos. Se
                recomienda colocar la boca simulando un pequeño silbido. Esta técnica ayuda a reducir el
                estrés y la ansiedad mejorando el control emocional y favoreciendo la relajación e incluso es
                una buena herramienta para poder conciliar el sueño. Repetir hasta sentirse bien.
            </p>

            <Vineta
				src={"https://res.cloudinary.com/dmlrehiwh/image/upload/v1732501706/fsyulpeuprnixpmtpmny.png"}
				alt="Logo del proyecto Desprender"/>

            <p className={`${gloria.className} w-[80%] md:w-[65%] lg:w-[50%] font-light text-2xl lg:text-3xl text-center mb-12 text-[#321C14]`}>
                Si estás en medio de una posible crisis, este tipo te ayudará a poder concentrarte en dos objetos.
                Está bien si cuesta al principio, pero concéntrate bien, compara dos objetos que estén a tu
                alcance y verás cómo tu cuerpo y mente vuelven. Hacer hasta sentirse bien
            </p>
            <Vineta
				src={"https://res.cloudinary.com/dmlrehiwh/image/upload/v1732501706/rlxmywwi0ergfenofyma.png"}
				alt="Logo del proyecto Desprender"/>

            <h2 className={`${gloria.className} w-[80%] md:w-[65%] lg:w-[50%] font-regular text-3xl lg:text-5xl text-center mb-12 text-[#321C14]`}>
                Tip del limón
            </h2>
            <p className={`${gloria.className} w-[80%] md:w-[65%] lg:w-[50%] font-light text-2xl lg:text-3xl text-center mb-12 text-[#321C14]`}>
            Andar con un limón en la cartera suena chistoso, pero en medio de una crisis el limón es una
            herramienta útil, ya que con solo un mordisco la sensación ácida hará que pongas atención a eso y 
            termines poniendo los pies en la tierra.
            </p>

            <Vineta
				src={"https://res.cloudinary.com/dmlrehiwh/image/upload/v1733279456/pg2o1ihe6f3gr5ipiiaq.png"}
				alt="Logo del proyecto Desprender"/>

            <p className={`${gloria.className} w-[80%] md:w-[65%] lg:w-[50%] font-light text-2xl lg:text-3xl text-center my-12  text-[#321C14]`}>
                Si no tienes limón, un dulce ácido igual estaría bien.
            </p>

            <Vineta
				src={"https://res.cloudinary.com/dmlrehiwh/image/upload/v1733279456/o0vhynsd8xhydlqocbna.png"}
				alt="Logo del proyecto Desprender"/>

            <p className={`${gloria.className} w-[80%] md:w-[65%] lg:w-[50%] font-light text-2xl lg:text-3xl text-center my-12 text-[#321C14]`}>
                Pon tus manos bajo agua helada, esto hará que tu cerebro enfoque su atención en otros estímulos.
            </p>

            {/* Te gusta el arte? */}

            <h2 className={`${gloria.className} w-[80%] md:w-[65%] lg:w-[50%] font-regular text-3xl lg:text-5xl text-center mb-12 text-[#321C14]`}>
                ¿TE GUSTA EL ARTE?
            </h2>

            <p className={`${gloria.className} w-[80%] md:w-[65%] lg:w-[50%] font-light text-2xl lg:text-3xl text-center my-12 text-[#321C14]`}>
            El arte es significativo para muchos, funciona como expresión emocional y las obras de otras
            personas también podrían conmoverte. Hacerle sentido a alguien que conecte con lo que observas.
            </p>

            <Vineta
				src={"https://res.cloudinary.com/dmlrehiwh/image/upload/v1733279456/wkplvqevixgvuy0ipkve.png"}
				alt="Logo del proyecto Desprender"/>

            <p className={`${gloria.className} w-[80%] md:w-[65%] lg:w-[50%] font-light text-2xl lg:text-3xl text-center text-[#321C14]`}>
                La música es el mejor compañero emocional.
            </p>

            <p className={`${gloria.className} w-[80%] md:w-[65%] lg:w-[50%] font-light text-2xl lg:text-3xl text-center  text-[#321C14]`}>
                <strong>¡Escucha esta playlist!</strong>
            </p>
            
        </section>
    )
}