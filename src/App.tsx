import Header from "./components/header.tsx";
import MainCard from "./components/mainCard.tsx";
import Description from "./components/description.tsx";
import Price from "./components/price.tsx";
import './App.css'
import { ImageContext } from "./ImageContext.ts";

function App() {

    const thumbnailImageMock = [
        {
            id: 1,
            image: "/image-product-1-thumbnail.jpg"
        },
        {
            id: 2,
            image: "/image-product-2-thumbnail.jpg"
        },
        {
            id: 3,
            image: "/image-product-3-thumbnail.jpg"
        },
        {
            id: 4,
            image: "/image-product-4-thumbnail.jpg"
        }
    ]

  
  return (
    <>
      <main className="flex flex-col items-center justify-center bg-white relative gap-20 md:h-screen">
        <div>
          <Header />
        </div>
        <ImageContext.Provider value={thumbnailImageMock}>
          <div className="flex flex-col md:flex-row justify-center items-center gap-32 w-full h-full max-w-[1440px]">
            <MainCard/>
            <div className="flex flex-col justify-around gap-10 p-4">
              <Description/>
              <Price />
            </div>
          </div>      
        </ImageContext.Provider> 
      </main> 
    </>
  )
}

export default App
