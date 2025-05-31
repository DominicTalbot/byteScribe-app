import React from 'react'
import Link from "next/link"
import Image from "next/image"
import logo from "../public/logo.png"

const header = () => {
    return (
        <header className='container mx-auto'>
            <nav className='py-6 flex items-center justify-between'>
                <div className="flex items-start">
                    <Link href={"/"}>
                        <Image
                            src={logo}
                            alt="ByteScribe Logo"
                            width={3000}
                            height={1400}
                            className="h-40 w-auto object-contain"
                        />
                    </Link>
                </div>

                <div className='flex items-center gap-4'>
                    {/* {Login and other stuff here} */}
                </div>
            </nav>
        </header>
    )
}

export default header