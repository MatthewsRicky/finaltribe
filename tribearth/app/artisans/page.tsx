import Image from "next/image"

const Artisans = () => {
  return (
    <div>
      <h1></h1>
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
    </div>
  )
}

export default Artisans