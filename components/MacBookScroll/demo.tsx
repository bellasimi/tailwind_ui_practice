import React from 'react'
import { MacBookScroll } from './index'
import Link from 'next/link'

export default function MacBookScrollDemo() {
    return (
        <div className='overflow-hidden dark:bg-[#0B0B0F] bg-white w-full'>
            <MacBookScroll
                title={<span>맥북 스크롤!</span>}
                src={`/screenshot.png`}
                showGradient={false}
            />
        </div>
    )
}
