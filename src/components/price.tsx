import { useState } from "react"

interface PriceProps {
    price: number,
    promotional_price: number,
    promotional_porcentage: number,
}

export default function Price({price, promotional_porcentage, promotional_price} : PriceProps) {
    const [quantity, setQuantity] = useState(1);
    
    return(
    <div className="text-black">
        <div className="flex flex-row items-center justify-around md:flex-col gap-4 pb-8">
            <div className="flex flex-row gap-4 items-center">
                <p className="font-bold text-2xl">$ { quantity > 0 ? promotional_price * quantity+",00" : ""}</p>
            <div className="bg-black w-10 text-white rounded-sm p-1">
                <p>{promotional_porcentage}%</p>
            </div>
            </div>
            <div>
                <p className="line-through text-gray-500">${price}</p>
            </div>
        </div>
        <div className="flex flex-col justify-around items-center gap-10">
            <div className="flex flex-row items-center justify-around w-full">
                <img src="../../icon-minus.svg" alt="remove item" className="w-4 h-2 cursor-pointer" onClick={() => quantity <= 1 ? null: setQuantity(quantity - 1) }/>
                <p>{quantity}</p>
                <img src="../../icon-plus.svg" alt="add item" className="w-6 h-6 cursor-pointer" onClick={() => setQuantity(quantity + 1)} />
            </div>
            <button className="
            flex items-center justify-center gap-2 w-full bg-orange-500 text-white text-xl font-bold px-12 py-2 rounded-xl
            hover:shadow-lg hover:shadow-gray-500 duration-500 ease-in-out cursor-pointer
            ">
                <img src="../../icon-cart.svg" />
                Add to cart
            </button>
        </div>
    </div>
    )
}