import React from 'react'
import logo from "../images/logo.svg"
import intro from "../images/illustration-intro.png"
import curvy from "../images/bg-curvy-mobile.svg"



export default function Header() {
    return (
        <header className="bg-[#1c2431]">
            <nav className=" flex justify-between  p-6">
                <div>
                    <img className="w-[60%]" src={logo} alt="Fylo" />
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
                    <img src={intro} alt="" />
                </div>
                <div className={` bg-no-repeat bg-center`}
                    style={{
                        backgroundImage: `url(${curvy})`
                    }}
                >
                    <h1 className="text-bold text-3xl z-10 mt-4 py-5  text-center text-white lg:px-[28rem]">All your files in one secure location,
                        accessible anywhere.</h1>
                </div>
            </div>
        </header>
    )
}