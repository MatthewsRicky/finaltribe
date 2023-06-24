import Image from "next/image"

const Artisans = () => {
  return (
    <div className="relative w-full flex justify-center items-center flex-col">
      <h1 className="flex text-2xl md:text-3xl py-20 px-10 hover:animate-pulse">Each artisan we employ has a story and we want you to know it</h1>
      <div className="flex flex-col-reverse md:flex-row gap-8 m-10 py-2 px-4 justify-center items-center shadow-xl">
        <Image
          className="md:max-w-[50%] p-4 rounded-md hover:bg-yellow-500"
          src={"/images/Florence.jpg"}
          alt="Florence"
          width={700}
          height={1000}
        />
        <div className="flex flex-col gap-4 justify-center items-center p-4 min-w-[50%]">
          <h1 className="font-semibold text-xl shadow-md px-4 rounded-lg shadow-opacity-60 bg-yellow-500/20">FLORENCE IMIZA - Assembling Chief</h1>
          <p className="min-w-[50%]">My name is Florence. I have four children. I’ve always believed that life is about supporting each other because if we take care of one another, everyone grows. I want to see my daughter grow up to be empowered just like me. Here at Tribearth, I have found peace and happiness in the work I do and I see a hopeful future ahead.</p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-4 py-2 px-4 justify-center items-center shadow-xl">
         <div className="flex flex-col gap-4 justify-center items-center p-4 w-full">
          <h1 className="font-semibold text-xl shadow-md px-4 rounded-lg shadow-opacity-60 bg-yellow-500/20">FRED NYONGESA - Soldering King</h1>
          <p className="min-w-[50%]">Hi, I’m Fred. I’ve been working for Tribearth for 2 years now and it’s helped me sustain myself and my family. I do all the soldering work at the workshop but my passion is creating new designs that suit Tribearth’s style. If you have a style in mind, just reach out to us and I’ll custom make a special piece just for you. </p>
        </div>
        <Image
          className="md:max-w-[50%] p-4 rounded-md hover:bg-yellow-500"
          src={"/images/Fred.jpg"}
          alt="Fred"
          width={700}
          height={1000}
        />
      </div>
      <div className="flex flex-col-reverse md:flex-row gap-4 py-2 px-4 justify-center items-center shadow-xl">
        <Image
          className="md:max-w-[50%] p-4 rounded-md hover:bg-yellow-500"
          src={"/images/Adam.jpg"}
          alt="Adam"
          width={700}
          height={1000}
        />
        <div className="flex flex-col gap-4 justify-center items-center p-4 w-full">
          <h1 className="font-semibold text-xl shadow-md px-4 rounded-lg shadow-opacity-60 bg-yellow-500/20">ADAM NGERI - Supply Chain Manager </h1>
          <p className="min-w-[50%]">My name is Adam Neri, I was living on the streets for many years before Tribearth’s affiliated organization, LocalAid rescued me and admitted me into their children’s home. After graduating from LocalAid’s educational program, I was employed by Tribearth and I am now in charge of the supply chain and administration. Most people know me as the funny guy who sees life in a positive way, free of stress.</p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-4 py-2 px-4 justify-center items-center shadow-xl">
         <div className="flex flex-col gap-4 justify-center items-center p-4 w-full">
          <h1 className="font-semibold text-xl shadow-md px-4 rounded-lg shadow-opacity-60 bg-yellow-500/20">LENA INDUSA KAGONI -  Polishing Queen</h1>
          <p className="min-w-[50%]">My name is Lena, I feel blessed to have a job right now during Covid as I know many people who have been laid off and unable to look after their family. I have 2 kids that I am able to take care of because I have a stable income. I buff and polish all of the jewelry at Tribearth to make sure they shine bright and make our customers happy. </p>
        </div>
        <Image
          className="md:max-w-[50%] p-4 rounded-md hover:bg-yellow-500"
          src={"/images/Lena.jpg"}
          alt="Lena"
          width={700}
          height={1000}
        />
      </div>
      
    </div>
  )
}

export default Artisans