import React from "react";


export default function Email() {
   return (
      <div className="bg-[#1c2431] h-96 w-[20rem] ml-6 text-center mt-14 lg:h-64 lg:w-[50rem] lg:ml-80" >
         <h2 className="font-bold text-2xl my-10 pt-6 ">Get early access today</h2>
         <p className="px-4">
            It only takes a minute to sign up and our free starter tier is extremely generous. If you have any
            questions, our support team would be happy to help you.
         </p>
         <div>
            <input className="px-16 py-[10px] border-none rounded-[20px] my-6 lg:mx-4 lg:px-28" type="email" placeholder="email@example.com" />
            <button className="bg-[#339ecc] px-20 py-[10px] border-none rounded-[20px] mb-6 ">Get Started For Free</button>
         </div>
      </div>)
}