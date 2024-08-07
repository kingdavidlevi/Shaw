import React from "react";
import { FaRegCommentAlt } from "react-icons/fa";
function Header(){
    return(
        <div className="top-0 z-20 flex items-center lg:px-20 xl:px-48 px-2 justify-between fixed h-10 bg-white w-full">
       <section className="flex gap-6">
        <section className="flex">
        <div className="border-l border-t border-b  px-3 grid place-items-center border-gray-300"><a className="text-sm font-normal cursor-pointer hover:text-black   cl" href="https://www.shaw.ca/contact-us/retail">Personal</a></div>
        <div className="border px-3 grid place-items-center border-gray-300"><a className="text-sm cursor-pointer hover:text-black font-normal  cl" href="https://business.shaw.ca/">Business</a></div>
        </section>
        <section className="md:flex hidden">
        <div className="  pr-3 grid place-items-center "><a className="text-sm font-normal cursor-pointer hover:text-black  cl" href="https://www.shaw.ca/store/">Shop</a></div>
        <div className=" h-3  ml-9 grid place-items-center absolute mt-1.5 bg-black w-half"></div>
        <div className=" pr-3 grid place-items-center "><a className="text-sm cursor-pointer hover:text-black font-normal  cl" href="https://support.shaw.ca/">Support</a></div>
        <div className=" h-3  ml-25 grid place-items-center absolute mt-1.5 bg-black w-half"></div>
        <div className=" grid place-items-center "><a className="text-sm cursor-pointer hover:text-black font-normal  cl" href="https://my.shaw.ca/">My Shaw</a></div>
        </section>
       </section>
       <a className="text-sm cursor-pointer hover:text-black font-normal  cl" href="https://my.shaw.ca/contact-us/"> 
       <section className="md:flex gap-2 hidden">
    <FaRegCommentAlt className=" cl text-base mt-0.5 " />
<div className="cl hover:text-black">Contact</div>
       </section>
       </a>
        </div>
    )
}

export default Header;