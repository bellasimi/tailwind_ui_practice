import { fetchUIList } from '@/services/ui'
import Image from 'next/image'
import Link from 'next/link'

export default async function Home() {
  const uiList = await fetchUIList()
  return (
    <main className='flex min-h-screen flex-col items-center justify-between w-[1280px] mx-auto py-16'>
      <ul className='grid grid-cols-3 gap-7 w-full'>
        {uiList.map((ui) => (
          <li
            key={ui._id}
            className='col-span-1 hover:scale-105 hover:ease-in duration-300 hover:opacity-70 cursor-pointer'
          >
            <Link href={ui.url}>
              <h2>{ui.name}</h2>
              <div className='relative w-full h-[315px]'>
                <Image src={ui.thumbnail} alt={ui.thumbnail} fill className='rounded-lg bg-white' />
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}
