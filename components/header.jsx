import React from 'react'
import Link from "next/link"
import Image from "next/image"
import logo from "../public/logo.png"
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'

const header = () => {
    return (
        <header className='container mx-auto'>
            <nav className='py-6 px-4 flex justify-between items-center'>
                <Link href={"/"}>
                    <Image
                        src={logo}
                        alt="ByteScribe Logo"
                        width={500}
                        height={100}
                        className="h-18 w-auto object-contain"
                    />
                </Link>

                <div className='flex items-center gap-4'>
                    <SignedOut>
                        <SignInButton />
                    </SignedOut>
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                </div>
            </nav>
        </header>
    )
}

export default header