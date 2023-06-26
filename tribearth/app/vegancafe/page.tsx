"use client";

import Image from "next/image";
import Link from "next/link";


const Vegancafe = () => {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="flex gap-4 flex-col p-8 text-center">
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
            <h1>Healthy vegan snacks</h1>
            <p>With the right ingredients, baobab, coconut milk, moringa, chocolate, peanut butter, and mango deliciousness, our smoothie bowls are just the perfect meal in a bowl.</p>
          </div>
        </div>
        <div>
          <div>
            <Image
              src={"/images/coffee.jpeg"}
              alt="Coffee"
              width={500}
              height={500}
            />
          </div>
          <div>
            <h1>Freshly roasted Ethiopian coffee</h1>
            <p>The space brims with exciting flavors as guests marvel on freshly roasted beans on site while the coffee is being prepared on the spot. The sweet scent of frankincense burning and fusing with the coffee aroma pushes you to miss anything meaty.</p>
          </div>
        </div>
        <div>
          <div>
            <Image
              src={"/images/anjeera.jpeg"}
              alt="Ethiopian Platter"
              width={500}
              height={500}
            />
          </div>
          <div>
            <h1>Ethiopian platter and wraps</h1>
            <p>Gluten free Injera with hearty traditional Ethiopian stews and vegs is one of our main meals. Something about Ethiopian platters that just tastes better when shared with friends.</p>
          </div>
        </div>
       
      </div>
    </div>
  )
}

export default Vegancafe