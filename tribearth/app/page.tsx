import Artisans from '@/components/Artisans'
import Ethos from '@/components/Ethos'
import Hero from '@/components/Hero'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='mt-20 flex flex-col justify-center items-center bg-neutral-100 text-black relative w-full h-full'>
      <Hero />
      <Ethos />
      <Artisans />
    </div>
  )
}
