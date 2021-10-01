import React from 'react';
import { FaPhone } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const AllContacts = () => {
    return (
        <div className="flex flex-row flex-wrap w-[98%] xl:w-[90%] mx-auto my-5">
            <div className="flex flex-col w-[80%] xl:w-[40%] mx-auto p-5 bg-mainCol rounded-md ">
                <div className="flex flex-row justify-center items-center my-2">
                    <FaEnvelope className="text-lg xl:text-xl" />
                    <a href="mailto:abbasmsheik91@gmail.com" 
                        className="text-lg xl:text-xl font-medium ml-2 hover:underline">
                        abbasmsheik91@gmail.com
                    </a>
                </div>
                <div className="flex flex-row justify-center items-center my-2">
                    <FaPhone className="rotate-90 text-lg xl:text-xl" />
                    <a href="tel:009613068836" className="text-lg xl:text-xl font-medium ml-2">
                        00961 3 068836
                    </a>
                </div>
                <div className="flex flex-row justify-center items-center my-2">
                    <FaWhatsapp className="text-lg xl:text-xl" />
                    <a target="_blank" href="https://api.whatsapp.com/send?phone=+96181083579" 
                        className="text-lg xl:text-xl font-medium ml-2">
                        00961 81 083579
                    </a>
                </div>
            </div>
        </div>
    )
}

export default AllContacts;