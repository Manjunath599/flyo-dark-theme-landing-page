import React from "react";
import { SlSocialFacebook, SlSocialInstagram, SlSocialTwitter } from 'react-icons/sl'
import logo from "../images/logo.svg"
import location from "../images/icon-location.svg"
import phone from "../images/icon-phone.svg"
import email from "../images/icon-email.svg"

export default function Footer() {
  return (
    <footer className="	bg-[#0b1523] p-6 lg:flex lg:justify-evenly lg:relative">
      <img className="my-14 lg:absolute lg:left-10 lg:-top-6" src={logo} />
      <div className="lg:mt-20 lg:w-96" >
        <img className="float-left" src={location} />
        <p className="ml-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua</p>
      </div>
      <div className="lg:mt-10">
        <div className="my-10 ">
          <img className="float-left" src={phone} />
          <p className="ml-10">+1-543-123-4567</p>
        </div>
        <div>
          <img className="float-left" src={email} />
          <p className="ml-10">example@fylo.com</p>
        </div>
      </div>
      <div className="my-10">
        <p >About Us</p>
        <p className="my-4">Jobs </p>
        <p>Press</p>
        <p className="my-4"> Blog</p>
      </div>
      <div className="my-10">
        <p>Contact Us</p>
        <p className="my-4">Terms</p>
        <p>Privacy</p>
      </div>
      <div className="flex justify-evenly lg:mt-10">
        <SlSocialFacebook className=" w-10 h-10 cursor-pointer" />
        <SlSocialInstagram className=" w-10 h-10  cursor-pointer lg:mx-4" />
        <SlSocialTwitter className=" w-10 h-10 cursor-pointer" />
      </div>
    </footer>
  )
}