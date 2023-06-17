import Artisans from '@/components/Artisans'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='flex justify-center items bg-neutral-100 text-black relative w-full h-full'>
      <Artisans />
    </div>
  )
}
