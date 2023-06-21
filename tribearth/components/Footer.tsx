"use client";

const Footer = () => {
  return (
    <div className="w-full relative bg-emerald-100/90 justify-center items-center flex flex-col">
      <div className="flex flex-col md:flex-row justify-center md:justify-between items-center px-10 gap-4">
        <div>CONTACT DETAILS</div>
        <div>
          <div>
            <h1>STORY</h1>
          </div>
          <div>
            <h1>CUSTOMER CARE</h1>
          </div>
          
        </div>
        <div>CONTACT US</div>
        <div>SUBSCRIBE</div>
      </div>
      <div className="w-full text-center bg-emerald-200/90">Copyright 2023. Tribearth.</div>
      <div className="w-full text-center bg-emerald-300/90">All Right Reserved</div>
    </div>
  )
}

export default Footer