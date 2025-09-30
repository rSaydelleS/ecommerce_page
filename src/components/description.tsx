interface DescriptionProps {
    description: string
}

export default function Description({description}: DescriptionProps) {

   

    return(<>
        <div className="w-full md:w-[500px] flex flex-col justify-center md:justify-around gap-10 text-black">
            <div>
                <h3 className="uppercase text-3xl font-semibold">sneaker company</h3>
            </div>
            <div className="flex flex-col gap-20">
                <h1 className="text-black text-5xl font-semibold ">Fall Limited Edition Sneakers</h1>
            <p className="font-medium text-gray-600 tracking-wide text-xl">
                {description}
            </p>
            </div>
        </div>
    </>)
}