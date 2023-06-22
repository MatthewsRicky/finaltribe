import Image from "next/image";


const About = () => {
  return (
    <div>
      <div className="relative bg-emerald-200/10 rounded-md shadow-lg 
      text-slate-500 m-4 flex flex-col md:flex-row justify-between gap-4 p-4">
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
      <div className="relative bg-emerald-200/10  rounded-md shadow-lg 
      text-slate-500 m-4 flex flex-col md:flex-row justify-between gap-4 p-4">
        <div className="w-full rounded-lg p-0 shadow-md">
          <Image 
            src={"/images/green.png"}
            alt="About Hero Image"
            width={1000}
            height={1000}    
          />
        </div>
        <div className="flex justify-around flex-col">
          <h1>VALUES & PHILOSOPHY</h1>
          <div>
            <p>Sustainability</p>
            <p>Ethical trade</p>
            <p>Creative innovation</p>
            <p>Passion.</p>
          </div>
        </div>
      </div>
      <div>
         <div className="relative bg-emerald-200/10 rounded-md shadow-lg 
      text-slate-500 m-4 flex flex-col md:flex-row justify-between gap-4 p-4">
        <div className="flex flex-col gap-4 w-80">
          <h1>TEAM LOCALAID</h1>
            <p>
              We are a Social Enterprise under our affiliated NGO called LocalAid. LocalAid has 10 years of experience in the NGO sector in terms of measuring impact, social interaction, and outreach programs. LocalAid's vision is to empower marginalized communities and vulnerable children. Tribearth benefits from LocaLAid's organizational architecture, such as legal framework, HR and accounting.
            </p>
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
      </div>
      <div>
        <div className="relative bg-emerald-200/10  rounded-md shadow-lg 
      text-slate-500 m-4 flex flex-col md:flex-row justify-between gap-4 p-4">
        <div className="w-full rounded-lg p-0 shadow-md">
          <Image 
            src={"/images/green.png"}
            alt="About Hero Image"
            width={1000}
            height={1000}    
          />
        </div>
        <div className="flex justify-around flex-col">
          <h1>VALUES & PHILOSOPHY</h1>
          <div>
            <p>Sustainability</p>
            <p>Ethical trade</p>
            <p>Creative innovation</p>
            <p>Passion.</p>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default About;