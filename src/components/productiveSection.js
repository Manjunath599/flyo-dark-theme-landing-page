import React from "react";


export default function Productive() {
    return (
        <div className="flex flex-col justify-center items-center mt-28 text-left p-6 lg:flex-row lg:ml-14">
            <div>
                <img src="/images/illustration-stay-productive.png" alt="" />
            </div>
            <div className="lg:px-20">
                <h2 className="font-bold text-2xl text-white mt-10 mb-6">Stay productive, wherever you are</h2>
                <p>Never let location be an issue when accessing your files. Fylo has you covered for all of your file
                    storage needs.</p>
                <p className="my-6">Securely share files and folders with friends, family and colleagues for live collaboration. No email
                    attachments required.</p>
                <span className="underline hover:cursor-pointer text-[#65e2d9]">See how Fylo works </span>
                <span><img className="inline" src="/images/icon-arrow.svg" /></span>
            </div>
        </div>
    )
}