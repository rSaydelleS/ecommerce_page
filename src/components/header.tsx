import { useState } from "react";

export default function Header() {
    const headerMock = [
        {
            id: 1,
            content: "Collections"
        },
        {
            id: 2,
            content: "Men"
        },
        {
            id: 3,
            content: "Women"
        },
        {
            id: 4,
            content: "About"
        },
        {
            id: 5,
            content: "Contact"
        },
    ];

    const [open, setOpen] = useState(false);

    return(
    <header className="flex justify-around  text-black w-screen relative">
        <div className="flex justify-between items-center gap-9">
            <div className="md:hidden">
                <img 
                src={"../../icon-menu.svg"}
                onClick={() => setOpen(true)}
                />
            </div>
            <h1 className="font-semibold text-black text-4xl">senakers</h1>
            <ul className="hidden md:flex md:justify-between md:gap-9">
            {headerMock.map(({id, content}) => {
                return <li className="cursor-pointer hover:font-bold ease-in-out duration-200" key={id}>{content}</li> 
                    })}
            </ul>
        </div>
        <div className="flex justify-between items-center gap-6">
            <div>
                <img className="w-6 h-6 cursor-pointer" src="../../icon-cart.svg" alt="cart image" />
            </div>
            <div>
                <img className="w-16 h-16 cursor-pointer" src="../../image-avatar.png" alt="profile photo" />
            </div>
        </div>
        <div className={` ${open === true ? "absolute left-0 top-0 h-screen z-20 0 flex flex-row": "hidden"}  md:hidden`}>
            <div>
                <ul className="fixed flex flex-col gap-5 p-10 bg-white shadow-xl shadow-gray-500 h-full">
                    {headerMock.map(({id, content}) => {
                        return <li className="font-bold underline" key={id}>{content}</li> 
                    })}
                </ul>
            </div>
            <div className="fixed z-50 bg-white flex items-end">
                <img
                onClick={() => setOpen(false)}
                src={"../../icon-close.svg"}
                alt="close menu" />
            </div>
        </div>
    </header>
    )
}