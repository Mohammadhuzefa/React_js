import { Link, Outlet } from "react-router-dom"
import { CiSearch } from "react-icons/ci";
import { BiUser } from "react-icons/bi";
import { PiShoppingCart } from "react-icons/pi";
import PillNav from './PillNav';
// import logo from '/path/to/logo.svg';

function Layout(){
    return(
        <>
        <nav className="md:flex  gap-8 text-sm justify-between items-center">
            <h1 className="bg-black"><img src="https://myop.in/cdn/shop/files/MYOP_LOGO_All_1_.pngwhite_a18792dd-27a0-43a6-96b7-f7999b442e1d.png?v=1709801788&width=260" alt="" /></h1>
            <ul className="flex gap-8">
                
                <li><Link to="/">Home</Link></li>
                <li><Link to="/SIGNATURE PERFUME">SIGNATURE PERFUME</Link></li>
                <li><Link to="/PERSONALIZED PERFUME">PERSONALIZED PERFUME</Link></li>
                <li><Link to="/COSMOPOLITAN">COSMOPOLITAN</Link></li>
                <li><Link to="/ACCESSORIES">ACCESSORIES</Link></li>
                

                

            </ul>
            {/* <ul className="flex gap-4 items-center">

            


            <PillNav
              logo="https://myop.in/cdn/shop/files/MYOP_LOGO_All_1_.pngwhite_a18792dd-27a0-43a6-96b7-f7999b442e1d.png?v=1709801788&width=260"
              logoAlt="Company Logo"
              items={[
                { label: 'Home', href: '/' },
                { label: 'About', href: '/about' },
                { label: 'Services', href: '/services' },
                { label: 'Contact', href: '/contact' }
              ]}
              activeHref="/"
              className="custom-nav"
              ease="power2.easeOut"
              baseColor="#000000"
              pillColor="#ffffff"
              hoveredPillTextColor="#ffffff"
              pillTextColor="#000000"
              theme="light"
              initialLoadAnimation={false}
              

              />
              
              </ul> */}


            <div className="flex gap-8">

            <CiSearch className="text-2xl" />
            <BiUser className="text-2xl"/>
            <PiShoppingCart className="text-2xl"/>

            </div>



        </nav>
        <main>
            <Outlet/>
        </main>

    
    <footer className="bg-black text-white py-16">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">

        <div>

          <h3 className="font-bold mb-4">
             <h1 className="bg-black"><img src="https://myop.in/cdn/shop/files/MYOP_LOGO_All_1_.pngwhite_a18792dd-27a0-43a6-96b7-f7999b442e1d.png?v=1709801788&width=260" alt="" /></h1>
          </h3>

          <p className="text-sm text-gray-400">

            Premium fragrances crafted for every personality.

          </p>

        </div>

        <div>

          <h4 className="font-semibold mb-4">
            Company <br /> Info
          </h4>

          <ul className="space-y-2 text-sm">

            <li>About Us</li>
            <li>Careers</li>
            <li>Blogs</li>

          </ul>

        </div>

        <div>

          <h4 className="font-semibold mb-4">
            Support
          </h4>

          <ul className="space-y-2 text-sm">

            <li>Help</li>
            <li>FAQs</li>
            <li>Customer <br /> Services</li>
            <li>Store Locator</li>
            <li>Privacy Policy</li>
            <li>Shipping <br /> Policy</li>
            <li>Return and <br /> Refund Policy</li>

          </ul>

        </div>

        <div>

          <h1 className="font-semibold mb-4">

           Stay in the loop <br /> for exciting <br /> offers, coupons <br /> and much more!

          </h1>

          <input
          placeholder="Enter your email"
          className="w-full px-4 py-2 rounded bg-gray-800"/>

        </div>

      </div>

    </footer>

    
        </>
    )
}export default Layout