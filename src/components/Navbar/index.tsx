import React from 'react'
import { Link } from "react-router-dom"

function Navbar () {
  return (
    <div className="flex items-center lg:space-x-16 sm:space-x-8 scale-x-1">
    <Link to="/">
        <div className="flex flex-col text-yellow-500 sm:scale-100 scale-[70%]">
            <h1 className="text-[18px] leading-4">ALLABOUT</h1>
            <h1 className="text-[24px] leading-5 font-semibold">MOVIES</h1>
        </div>
    </Link>
    <Link to="/movies">
        <button className="sm:text-[18px] text-md text-yellow-500 hover:underline">EXPLORE</button>
    </Link>
</div>
  )
}

export default Navbar 
