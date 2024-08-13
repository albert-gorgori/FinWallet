import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Sidebar = ({user}: SiderbarProps) => {
  return (
    <div className='sidebar'>
        <nav className='flex flex-col gap-4'>
            <Link href="/" className='mb-12 cursor-pointer items-center gap-2'>
                <Image src="/icons/logo.svg" alt="logo" width={34} height={34} alt="FinWallet logo" className='size-[24px]' className="size-[24px] max-xl:size-14" />
                <h1 className='sidebar-logo'>FinWallet</h1>
            </Link>
        </nav>
    </div>
  )
}

export default Sidebar