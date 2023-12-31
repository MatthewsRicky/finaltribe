import Image from "next/image";


const About = () => {
  return (
    <div className="pt-32">
      <div className="relative wrap bg-emerald-200/10 rounded-md shadow-lg 
      text-slate-500 m-4 flex flex-col md:flex-row justify-between gap-4 p-4">
        <div className="flex min-w-[50%] justify-center items-center text-center flex-col gap-4 w-80">
          <h1 className="font-semibold text-xl shadow-md px-4 rounded-lg shadow-opacity-60 bg-yellow-500/20">ABOUT US</h1>
          <p className="leading-7">Tribearth is a socially conscious jewelry business that creates a community of empowered women & youth who produce handmade products in a sustainable and ethical environment. Using a moralistic and economic approach, Tribearth creates a challenging voice against the detrimental impact of fast fashion and inequality faced by stigmatized women & youth.</p>
        </div>
        <div className="w-full rounded-lg p-0 shadow-md">
          <Image 
            src={"/images/abouthero.png"}
            alt="About Hero Image"
            width={500}
            height={1000}    
          />
        </div>
      </div>
      <div className="relative bg-emerald-200/10  rounded-md shadow-lg 
      text-slate-500 m-4 flex flex-col-reverse md:flex-row justify-between gap-4 p-4">
        <div className="w-full rounded-lg p-0 shadow-md">
          <Image 
            src={"/images/green.png"}
            alt="About Hero Image"
            width={1000}
            height={1000}    
          />
        </div>
        <div className="flex min-w-[50%] justify-center items-center text-center flex-col gap-4 w-80">
          <h1 className="font-semibold text-xl shadow-md px-4 rounded-lg shadow-opacity-60 bg-yellow-500/20">VALUES & PHILOSOPHY</h1>
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
        <div className="flex min-w-[50%] justify-center items-center text-center flex-col gap-4 w-80">
          <h1 className="font-semibold text-xl shadow-md px-4 rounded-lg shadow-opacity-60 bg-yellow-500/20">TEAM LOCALAID</h1>
            <p className="leading-7">
              We are a Social Enterprise under our affiliated NGO called LocalAid. LocalAid has 10 years of experience in the NGO sector in terms of measuring impact, social interaction, and outreach programs. LocalAid's vision is to empower marginalized communities and vulnerable children. Tribearth benefits from LocaLAid's organizational architecture, such as legal framework, HR and accounting.
            </p>
        </div>
        <div className="w-full rounded-lg p-0 shadow-md">
          <Image 
            src={"/images/Localaid.jpg"}
            alt="About Hero Image"
            width={1000}
            height={1000}    
          />
        </div>
      </div>
      </div>
      <div>
        <div className="relative bg-emerald-200/10  rounded-md shadow-lg 
      text-slate-500 m-4 flex flex-col-reverse md:flex-row justify-between gap-4 p-4">
        <div className="w-full rounded-lg p-0 shadow-md">
          <Image 
            src={"/images/Sumer.jpg"}
            alt="About Hero Image"
            width={1000}
            height={1000}    
          />
        </div>
        <div className="flex min-w-[50%] justify-center items-center text-center flex-col gap-4 w-80">
          <h1 className="font-semibold text-xl shadow-md px-4 rounded-lg shadow-opacity-60 bg-yellow-500/20">DESIGNER</h1>
            <p className="leading-7">Sumer Homeh is our head creative designer. She had studied and worked as a fashion designer for 7 years in Australia before founding LocalAid in 2008. She has lead several projects through her humanitarian work in Kenya over the past 10 years with LocalAid. </p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default About;