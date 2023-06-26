"use client";

import Image from "next/image";
import Link from "next/link";


const Vegancafe = () => {
  return (
    <div>
      <div>
        <h1>Vegan Boutique Cafe</h1>
        
          <Link href={"/"}>
            <p>Our Vegan Cafe at heart is a mix of Ethiopian food, Swahili snacks and healthy Vegan bitings.</p>
          </Link>
      </div>
      <div>
        <div>
          <div>
            <Image
              src={"/images/Fruitbowls.jpeg"}
              alt="Fruit Bowls"
              width={500}
              height={500}
            />
          </div>
          <div>
            <h1></h1>
            <p></p>
          </div>
        </div>
        <div>
          <div>
            <Image />
          </div>
          <div>
            <h1></h1>
            <p></p>
          </div>
        </div>
        <div>
          <div>
            <Image />
          </div>
          <div>
            <h1></h1>
            <p></p>
          </div>
        </div>
       
      </div>
    </div>
  )
}

export default Vegancafe