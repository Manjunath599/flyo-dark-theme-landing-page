import React from 'react'


export default function Header() {
    return (
        <header className="bg-[#1c2431]">
            <nav className=" flex justify-between  p-6">
                <div>
                    <img className="w-[60%]" src="/images/logo.svg" alt="Fylo" />
                </div>
                <div className="mr-2">
                    <ul className="flex text-sm">
                        <li className="mx-2">Features</li>
                        <li className="mx-2">Team</li>
                        <li className="mx-2">Sign In</li>
                    </ul>
                </div>
            </nav>
            {/* <!-- Main img and heading --> */}
            <div className="p-6 flex flex-col justify-center items-center" >
                <div>
                    <img src="/images/illustration-intro.png" alt="" />
                </div>
                <div className={` bg-no-repeat bg-center`}
                    style={{
                        backgroundImage: `url(/images/bg-curvy-mobile.svg)`
                    }}
                >
                    <h1 className="text-bold text-3xl z-10 mt-4 py-5  text-center text-white lg:px-[28rem]">All your files in one secure location,
                        accessible anywhere.</h1>
                </div>
            </div>
        </header>
    )
}