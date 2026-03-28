import ProductSlider from "./ProductSlider";
import HeroCarousel from "./HeroCarousel";
import StoreSection from "./StoreSection";
import FragranceSection from "./FragranceSection";
import CosmopolitanCarousel from "./CosmopolitanCarousel";
function Home(){
    return(
        <>
        <div >
            <HeroCarousel />
            
            {/* <img src="https://myop.in/cdn/shop/files/b2g1_6e47992a-e85f-4019-89d5-179ac74e931d.webp?v=1740730153&width=2000" className="h-150 w-full" alt="" /> */}
            {/* <h1 className="text-3xl">Discover Our Bestsellers</h1> */}

          <ProductSlider />
          <StoreSection />
          <FragranceSection />
          <CosmopolitanCarousel />
        </div>
        

        </>
    )
}
export default Home