import Header from "./components/header.tsx";
import MainCard from "./components/mainCard.tsx";
import Description from "./components/description.tsx";
import Price from "./components/price.tsx";
import './App.css'
import { ImageContext } from "./ImageContext.ts";

function App() {
    const products_mock = [
      {
        id: 1,
        description: `These low-profile seneakers your perfect casual wear
                      companion. Featuring a durabel rubber outer sole, they'll
                      withstand everything the weather can offer.`,
        price: 250,
        promotional_price:125,
        promotional_porcentage: 50,
        images: [
          {
              id: 1,
              url: "/image-product-1-thumbnail.jpg"
          },
          {
              id: 2,
              url: "/image-product-2-thumbnail.jpg"
          },
          {
              id: 3,
              url: "/image-product-3-thumbnail.jpg"
          },
          {
              id: 4,
              url: "/image-product-4-thumbnail.jpg"
          }
        ]
      }
    ]

  
  return (
    <>
      <main className="flex flex-col items-center justify-center bg-white relative gap-20 md:h-screen">
        <div>
          <Header />
        </div>
        <ImageContext.Provider value={products_mock}>
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
