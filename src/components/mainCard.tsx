import { useState } from "react";


interface Images {
    id: number
    url: string
}
interface ImagesProps {
    images: Images[]
}

export default function MainCard({images}:ImagesProps) {

    const [isRendered, setIsRendered] = useState(false);
    const [renderedImage, setRenderedImage] = useState(1);

    return (

        <>
            <div>
                {/* mobile layout*/}
                <div className="flex flex-row justify-center items-center md:hidden">
                    <div
                        className="bg-white rounded-full p-4 cursor-pointer -m-14 relative"
                        onClick={() => renderedImage > 1 ? setRenderedImage(renderedImage - 1) : null}>
                        <img 
                            className="w-4 h-4"
                            src={"../../icon-previous.svg"}   
                        />
                    </div>
                    <img 
                    className="md:rounded-2xl max-w-[1440px] w-full md:max-h-[600px] " 
                    src={`../../image-product-${renderedImage}.jpg`}
                    />
                     <div
                        className="bg-white rounded-full p-4 cursor-pointer -m-14 relative"
                        onClick={() => renderedImage < 4 ? setRenderedImage(renderedImage + 1) : null}>
                        <img 
                            className="w-4 h-4"
                            src={"../../icon-next.svg"}   
                        />
                    </div>
                </div>
                    {/* desktop layout */}
                <div className="hidden md:block">
                    <img 
                    className="md:rounded-2xl max-w-[1440px] w-full md:max-h-[600px]" 
                    src={`../../image-product-${renderedImage}.jpg`}
                    onClick={() => {
                        setIsRendered(true)
                    }}
                    />
                </div>
                <div className="hidden md:flex md:gap-5 md:items-center md:py-4">
                    {
                        images.map((image) => {
                            return(
                                <div key={image.id} className="w-34 h-34 rounded-xl hover:brightness-125 ease-in-out duration-200">
                                    <div className="flex flex-row justify-around w-full max-w-[600px]">    
                                        <img className={`
                                        w-full h-full rounded-xl bg-cover overflow-ellipsis
                                        ${renderedImage === image.id ? "border-orange-500 border-[3px] brightness-125": null}
                                        `}
                                            src={image.url} 
                                            onClick={() => setRenderedImage(image.id)}
                                        />
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                {/*modal*/}
                <div className={
                    `w-full h-full z-50 bg-black/50 backdrop-invert backdrop-opacity-40 
                    ${isRendered === true ? "absolute left-0 top-0" : "hidden"}
                    `}>
                    <div className="flex flex-col justify-center items-center h-full">
                        <div className="flex justify-end items-end w-[600px] pb-20 ">
                            <img
                                className="cursor-pointer"
                                src={"../../icon-close.svg"}
                                onClick={() => setIsRendered(false)}
                            />
                        </div>
                        <div className="flex flex-row items-center justify-center">
                            <div 
                                className="bg-white rounded-full p-4 cursor-pointer hover: shadow-orange-600 hover:shadow-lg duration-300 -m-6 z-10"
                                onClick={() => renderedImage > 1 ? setRenderedImage(renderedImage - 1) : null}
                            >
                                <img 
                                    className="w-4 h-4 items-center"
                                    src={"../../icon-previous.svg"}
                                />
                            </div>
                            <img className="
                                rounded-2xl max-w-[1440px] max-h-[600px]" 
                                src={`../../image-product-${renderedImage}.jpg`}
                            />
                            <div
                                className="bg-white rounded-full p-4 cursor-pointer hover: shadow-orange-600 hover:shadow-lg duration-300 -m-6"
                                onClick={() => renderedImage < 4 ? setRenderedImage(renderedImage + 1) : null}>
                                <img 
                                    className="w-4 h-4"
                                    src={"../../icon-next.svg"}   
                                />
                            </div>
                        </div>
                        <div className="flex gap-5 items-center py-4">
                            {
                                images.map((image) => {
                                    return(
                                        <div key={image.id} className="w-34 h-34 rounded-xl hover:brightness-125 ease-in-out duration-200">
                                            <img className={`
                                                w-full h-full rounded-xl bg-cover overflow-ellipsis
                                                ${renderedImage === image.id ? "border-orange-500 border-[3px] brightness-125": null}
                                                `}
                                                    src={image.url} 
                                                    onClick={() => setRenderedImage(image.id)}
                                                />
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>  
            </div>    
        </>
    )
}   