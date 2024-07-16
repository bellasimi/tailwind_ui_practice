import Image from 'next/image'

export default function Home() {
  return (
    <main className='hover:bg-inherit flex min-h-screen flex-col items-center justify-between p-24'>
      <ul>
        <li>
          <h2>MacBookScroll</h2>
          <Image
            src='/screenshot.png'
            alt='screenshot'
            width={500}
            height={400}
            className='rounded-lg'
          />
        </li>
      </ul>
    </main>
  )
}
