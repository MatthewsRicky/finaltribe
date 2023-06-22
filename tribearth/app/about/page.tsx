import Image from "next/image";


const About = () => {
  return (
    <div>
      <div className="relative bg-yellow-500/60 rounded-md shadow-lg text-slate-500 m-4 flex flex-col md:flex-row justify-between gap-4 p-4">
        <div className="flex flex-col gap-4 w-80">
          <h1>ABOUT US</h1>
          <p>Tribearth is a socially conscious jewelry business that creates a community of empowered women & youth who produce handmade products in a sustainable and ethical environment. Using a moralistic and economic approach, Tribearth creates a challenging voice against the detrimental impact of fast fashion and inequality faced by stigmatized women & youth.</p>
        </div>
        <div className="w-full rounded-lg p-0 shadow-md">
          <Image 
            src={"/images/abouthero.png"}
            alt="About Hero Image"
            width={1000}
            height={1000}    
          />
        </div>
      </div>
      <div>
        <div>
          <Image 
            src={"/images/green.png"}
            alt="About Hero Image"
            width={1000}
            height={1000}    
          />
        </div>
        <div>
          <h1>VALUES & PHILOSOPHY</h1>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
        </div>
      </div>
      <div></div>
      <div></div>
    </div>
  )
}

export default About;