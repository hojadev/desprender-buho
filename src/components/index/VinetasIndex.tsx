import Vineta from "./Vineta";

export default function VinetasIndex(){

    let placeHolderText = `Lorem ipsum odor amet, consectetuer adipiscing elit. Luctus erat fusce litora maecenas gravida consectetur. Proin ligula platea vitae, malesuada hendrerit nulla primis orci. Elementum semper venenatis placerat vivamus ex. 
					Nullam laoreet eros ad gravida, quam netus arcu. Ligula integer magna penatibus vel, diam urna a laoreet porta. Aptent euismod risus vel odio at sem. 
					Tempus sed torquent nunc sem duis nulla. Nibh egestas torquent nunc mus egestas ad in.`
    return (
        <section className="flex justify-center flex-col items-center bg-index gap-4">
            <Vineta
				src={"https://res.cloudinary.com/dmlrehiwh/image/upload/v1732501706/pf8ykt9lwsw88gqqdayv.png"}
				alt="Logo del proyecto Desprender"
                text={placeHolderText}/>
            <Vineta
				src={"https://res.cloudinary.com/dmlrehiwh/image/upload/v1732501705/z7q70fgpzsllmyyslrd5.png"}
				alt="Logo del proyecto Desprender"
                text={placeHolderText}/>
            <Vineta
				src={"https://res.cloudinary.com/dmlrehiwh/image/upload/v1732501705/onhxkw4ixeqagbmnuk1k.png"}
				alt="Logo del proyecto Desprender"
                text={placeHolderText}/>
            <Vineta
				src={"https://res.cloudinary.com/dmlrehiwh/image/upload/v1732501706/zacfpuxyd7u2whqqmlw8.png"}
				alt="Logo del proyecto Desprender"
                text={placeHolderText}/>
            <Vineta
				src={"https://res.cloudinary.com/dmlrehiwh/image/upload/v1732501705/ucp823umpw8ylhs4ytqg.png"}
				alt="Logo del proyecto Desprender"
                text={placeHolderText}/>
            <Vineta
				src={"https://res.cloudinary.com/dmlrehiwh/image/upload/v1732501708/kqbs4medqhz1y1hv6tdm.png"}
				alt="Logo del proyecto Desprender"
                text={placeHolderText}/>
            <Vineta
				src={"https://res.cloudinary.com/dmlrehiwh/image/upload/v1732501706/fsyulpeuprnixpmtpmny.png"}
				alt="Logo del proyecto Desprender"
                text={placeHolderText}/>
            <Vineta
				src={"https://res.cloudinary.com/dmlrehiwh/image/upload/v1732501706/rlxmywwi0ergfenofyma.png"}
				alt="Logo del proyecto Desprender"
                text={placeHolderText}/>
        </section>
    )
}