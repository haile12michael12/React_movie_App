import React from 'react'

function Navbar() {
  return (
   <nav  className="bg-[#121212] py-2">
  <div className="flex justify-between items-center lg:w-[80%] md:w-[90%] w-[95%]  mx-auto">
                <div className="flex items-center lg:space-x-16 sm:space-x-8 scale-x-1">
                  
                        <div className="flex flex-col text-yellow-500 sm:scale-100 scale-[70%]">
                            <h1 className="text-[18px] leading-4">ADDIS</h1>
                            <h1 className="text-[24px] leading-5 font-semibold">FILM</h1>
                        </div>
                    
                        <button className="sm:text-[18px] text-md text-yellow-500 hover:underline">EXPLORE</button>
                    
                </div>
                <div className="relative">
                    <input
                        placeholder="search"
                        className="md:w-[500px] sm:w-[350px] w-[180px] h-10 bg-black text-[#c2c2c2] 
                        md:text-lg sm:text-md text-sm outline-none sm:px-4 px-3 placeholder:text-[#646464] rounded-xl"/>
                       </div>
                </div>

                
    </nav>
  )
}

export default Navbar
