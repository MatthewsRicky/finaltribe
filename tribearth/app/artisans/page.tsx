import Image from "next/image"

const Artisans = () => {
  return (
    <div>
      <h1>Each artisan we employ has a story and we want you to know it</h1>
      <div>
        <Image
          src={"/images/Florence.jpg"}
          alt="Florence"
          width={1000}
          height={1000}
        />
        <div>
          <h1>FLORENCE IMIZA - Assembling Chief</h1>
          <p>My name is Florence. I have four children. I’ve always believed that life is about supporting each other because if we take care of one another, everyone grows. I want to see my daughter grow up to be empowered just like me. Here at Tribearth, I have found peace and happiness in the work I do and I see a hopeful future ahead.</p>
        </div>
      </div>
      <div>
         <div>
          <h1>FRED NYONGESA - Soldering King</h1>
          <p>Hi, I’m Fred. I’ve been working for Tribearth for 2 years now and it’s helped me sustain myself and my family. I do all the soldering work at the workshop but my passion is creating new designs that suit Tribearth’s style. If you have a style in mind, just reach out to us and I’ll custom make a special piece just for you. </p>
        </div>
        <Image
          src={"/images/Florence.jpg"}
          alt="Florence"
          width={1000}
          height={1000}
        />
      </div>
    </div>
  )
}

export default Artisans