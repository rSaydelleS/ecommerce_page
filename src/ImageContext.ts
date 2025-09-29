import { createContext, useState, type Dispatch, type SetStateAction } from "react";
interface MockType {
    id: number
    image: string
}

interface SetImage {
    renderedImage: number 
    setRenderedImage: Dispatch<SetStateAction<number>>; 
}

export const ImageContext = createContext<MockType[] | undefined>(undefined);

export const useImage = ():SetImage => {
    const [renderedImage, setRenderedImage] = useState(1);

    return{renderedImage, setRenderedImage}
};
