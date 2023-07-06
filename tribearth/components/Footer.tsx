"use client";

const Footer = () => {
  return (
    <div className="w-full bg-emerald-100/90 justify-around items-center flex flex-col">
      <div className="flex flex-col md:flex-row justify-center md:justify-between items-center px-10 gap-4">
        <div className="flex flex-col gap-y-3 my-3 ">
          <h1 className="text-lg font-medium">CUSTOMER DETAILS</h1>
          <div className="text-lg">
            <p>Tribearth,</p>
            <p>P.O. Box 00100,50600</p>
            <p>Diani Beach Rd (between Bazaar & Kaskazi) Diani, Kenya.</p>
          </div>
          <div className="text-lg">
            <p>T: +254 706 030625</p>
            <p>Email: hello@tribearth.org</p>
          </div>
        </div>
        <div>
          <div>
            <h1 className="text-lg font-medium">STORY</h1>
            <p>ABOUT US</p>
            <p>IMPACT</p>
            <p>ARTISANS</p>
          </div>
          <div>
            <h1 className="text-lg font-medium">CUSTOMER CARE</h1>
            <p>PRIVACY POLICY</p>
            <p>TERMS & CONDITIONS</p>
            <p>SHIPPING & RETURNS</p>
          </div>
          
        </div>
        <div>CONTACT US</div>
        <div>SUBSCRIBE</div>
      </div>
      <div className="w-full text-center bg-emerald-200/90 py-2">Copyright 2023. Tribearth.</div>
      <div className="w-full text-center bg-emerald-300/90 py-2">All Right Reserved</div>
    </div>
  )
}

export default Footer