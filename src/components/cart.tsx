import type { Dispatch, SetStateAction } from "react"

interface CartProps {
    price: number
    quantity: number
    action: Dispatch<SetStateAction<boolean>>
}

export function Cart({price, quantity, action}: CartProps) {
    return(
        <div className="flex flex-col items-start bg-white shadow-xl shadow-gray-500 p-20 h-screen gap-10 z-50">
             <div 
                onClick={() => action(false)}
                className="relative top-0 left-0">
                <img
                className="cursor-pointer hover:w-4 ease-in-out duration-500"
                src={"../../icon-close.svg"}/>

            </div>
            <div>
                <h3 className="uppercase text-xl font-semibold">sneaker company</h3>
            </div>    
            <div className="w-40 h-40">
                <img 
                className="rounded-xl bg-cover overflow-ellipsis shadow-xl shadow-gray-500"    
                src="../../image-product-1.jpg"/>
            </div>
            <p className="font-bold text-2xl">${price}</p>
            <p className="font-bold text-xl">{quantity}</p>
            <button className="
            flex items-center justify-center gap-2 w-full bg-orange-500 text-white text-xl font-bold px-12 py-2 rounded-xl
            hover:shadow-lg hover:shadow-gray-500 duration-500 ease-in-out cursor-pointer
            ">
                Go to pay
            </button>
        </div>
    )
}