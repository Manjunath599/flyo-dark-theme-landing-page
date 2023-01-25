import React from "react";


export default function Profile() {
    return (
        <div className="p-6 lg:flex lg:justify-evenly">
            <img className="mt-32 lg:w-6 lg:h-6  lg:relative lg:left-16 lg:bottom-32" src="/images/bg-quotes.png" />
            <div className="bg-[#202a3c] h-60 w-[21rem] px-6 rounded-lg">
                <p className="mb-6 pt-10">  Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has
                    become a well-oiled collaboration machine.</p>
                <img className="w-12 rounded-3xl float-left" src="/images/profile-1.jpg" />
                <span className="ml-4 text-xl font-medium ">Satish Patel </span>
                <p className="text-sm  mt-2">Founder & CEO, Huddle</p>
            </div>
            <div className="bg-[#202a3c] h-60 w-[21rem] px-6 rounded-lg mt-10 lg:mt-auto ">
                <p className="mb-6 pt-10">  Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has
                    become a well-oiled collaboration machine.</p>
                <img className="w-12 rounded-3xl float-left" src="/images/profile-2.jpg" />
                <span className="ml-4 text-xl font-medium ">  Bruce McKenzie</span>
                <p className="text-sm  mt-2">  Founder & CEO, Huddle</p>
            </div>
            <div className="bg-[#202a3c] h-60 w-[21rem] px-6 rounded-lg mt-10 lg:mt-auto">
                <p className="mb-6 pt-10">  Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has
                    become a well-oiled collaboration machine.</p>
                <img className="w-12 rounded-3xl float-left" src="/images/profile-3.jpg" />
                <span className="ml-4 text-xl font-medium ">  Iva Boyd</span>
                <p className="text-sm  mt-2">Founder & CEO, Huddle</p>
            </div>
        </div>
    )
}