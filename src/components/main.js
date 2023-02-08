import React from "react";
import iconAccess from "../images/icon-access-anywhere.svg"
import security from "../images/icon-security.svg"
import collab from "../images/icon-collaboration.svg"
import file from "../images/icon-any-file.svg"
 

export default function Main() {
    return (
        // <!-- Main content -->
        <div className="px-8 text-center">
            <div>
                <p className="lg:px-[30rem]">
                    Fylo stores all your most important files in one secure location. Access them wherever
                    you need, share and collaborate with friends family, and co-workers.
                </p>
                <button className="bg-[#339ecc] px-20 py-[10px] border-none rounded-[20px] mt-6">Get Started</button>
            </div>

            {/* <!--4 icons section -->
            <!-- First-2-icons --> */}
            <div className="mt-24 lg:flex ">
                <div className="flex flex-col justify-center items-center ">
                    <img src={iconAccess} alt="" />
                    <h2 className="font-bold text-lg mt-8 mb-3"> Access your files, anywhere</h2>
                    <p className="lg:px-48">
                        The ability to use a smartphone, tablet, or computer to access your account means your
                        files follow you everywhere.
                    </p>
                </div>
                <div className="flex flex-col justify-center items-center mt-24 lg:mt-auto">
                    <img src={security} alt="" />
                    <h2 className="font-bold text-lg mt-8 mb-3">Security you can trust</h2>
                    <p className="lg:px-48">2-factor authentication and user-controlled encryption are just a couple of the security features we
                        allow to help secure your files.</p>
                </div>
            </div>
            {/* <!-- Next 2 icons --> */}
            <div className="mt-24 lg:flex">
                <div className="flex flex-col justify-center items-center ">
                    <img src={collab} alt="" />
                    <h2 className="font-bold text-lg mt-8 mb-3">Real-time collaboration</h2>
                    <p className="lg:px-48">
                        Securely share files and folders with friends, family and colleagues for live collaboration.
                        No email attachments required.
                    </p>
                </div>
                <div className="flex flex-col justify-center items-center mt-24 lg:mt-auto">
                    <img src={file} alt="" />
                    <h2 className="font-bold text-lg mt-8 mb-3">Store any type of file</h2>
                    <p className="lg:px-48">Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all
                        file types to be securely stored and shared.</p>
                </div>
            </div>
        </div>
    )
}