import { createContext, useState, type Dispatch, type SetStateAction } from "react";

interface MockType {
    id: number,
    description: string,
    price: number,
    promotional_price: number,
    promotional_porcentage: number,
    images: Images[] 
}

interface Images {
    id: number
    url: string
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
