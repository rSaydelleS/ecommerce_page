import Header from "./components/header.tsx";
import MainCard from "./components/mainCard.tsx";
import Description from "./components/description.tsx";
import Price from "./components/price.tsx";
import './App.css'
// import { ImageContext } from "./ImageContext.ts";

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

function App() {
    const products_mock:MockType[] = [
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
      <main className="flex flex-col items-center bg-white relative md:h-screen">
          {
            products_mock.map((product) => {
              return(
                <section
                  className="flex flex-col gap-20"
                  key={product.id}>
                  <div>
                    <Header price={product.promotional_price}/>
                  </div>
                  <div 
                  className="flex flex-col md:flex-row justify-center items-center gap-32 w-full h-full max-w-[1440px]">
                    <MainCard images={product.images}/>
                    <div className="flex flex-col justify-center gap-10 p-4">
                      <Description description={product.description}/>
                      <Price 
                      price={product.price} 
                      promotional_price={product.promotional_price} 
                      promotional_porcentage={product.promotional_porcentage} />
                    </div>
                  </div> 
                </section>     
              )
            })
          }
      </main> 
    </>
  )
}

export default App
