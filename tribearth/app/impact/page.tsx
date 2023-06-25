"use client";

import Image from "next/image";
import Link from "next/link";

const Impact = () => {
  return (
    <div>
      <div>
        <div>
          <h1>Ethical Gemstones</h1>
          <p>Responsible sourcing of gemstones is of great importance to our brand. Our gemstones are sourced directly from ethical mines run by women in Kenya. We embrace traceability and sustainability throughout our complete supply chain.</p>
        </div>
        <Image
          src={"/images/Ethicalgems.jpg"}
          alt="Ethical Gems"
          width={700}
          height={1000}
        />
      </div>
      <div>
        <h1>
           Tribearth sustains 30% of LocalAid’s humanitarian work. To learn more of LocalAid’s work in Kenya, please visit <Link href ="/">localaid.or.ke</Link>
        </h1>
      </div>
      <div>
        <Image />
        <div>
          <h1></h1>
          <p></p>
        </div>
      </div>
      <div>
         <div>
          <h1></h1>
          <p></p>
        </div>
        <Image />
      </div>
      <div>
         <div>
        <Image />
        <div>
          <h1></h1>
          <p></p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Impact