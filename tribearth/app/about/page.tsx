import Image from "next/image";


const About = () => {
  return (
    <div>
      <div className="flex w-full">
        <div>
          <h1>ABOUT US</h1>
          <p>Tribearth is a socially conscious jewelry business that creates a community of empowered women & youth who produce handmade products in a sustainable and ethical environment. Using a moralistic and economic approach, Tribearth creates a challenging voice against the detrimental impact of fast fashion and inequality faced by stigmatized women & youth.</p>
        </div>
        <div>
          <Image 
            src={"/images/abouthero.png"}
            alt="About Hero Image"
            width={500}
            height={500}    
          />
        </div>
      </div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}

export default About;