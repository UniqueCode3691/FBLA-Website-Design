import React from 'react';
import logoImage from "../assets/mapleridge.png"
import leafImage from "../assets/leaf.svg"

export default function Header() {
    
    const [isOpen, setIsOpen] = React.useState(true)

    function toggleNavbar() {
        setIsOpen(prevIsOpen => !prevIsOpen)
    }

    return ( 
        <nav>
            <div className="sticky flex flex-col justify-between justify-items-center items-center bg-mapletan w-1/10 h-full">
                <div className="flex-none mb-20">
                    <img src={logoImage} alt="Maple Ridge High School Logo" />
                </div>
                <div className="text-l min-h-40">BOX OFFICE</div>
                <div className="text-l min-h-40">RENTALS</div>
                <div className="text-l min-h-40">ATHLETICS</div>
                <div className="text-l min-h-40">ABOUT US</div>
            </div>
            <button className='absolute w-1/30 bottom-full left-4/40 top-1/10 rotate-90 motion-safe:animate-pulse motion-safe:hover:animate-bounce motion-safe:active:animate-none'><img src={leafImage} alt="Toggle Navbar" /></button>
         </nav>
    )
}