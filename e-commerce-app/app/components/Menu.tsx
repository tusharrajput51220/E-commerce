// 'use client' is used for user interactions in ui
'use client'

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
const Menu = () => {
    const [open, setOpen] = useState(false)

    return (
        <>
            <div>
                <Image src="/menu.png" alt="" width={28} height={28} className="cursor-pointer"
                    onClick={() => setOpen(!open)} />
            </div>
            {open && (
                <div className="">
                    <Link href="/">Homepage</Link>
                    <Link href="/">Shop</Link>
                    <Link href="/">Deals</Link>
                    <Link href="/">About</Link>
                    <Link href="/">Contact</Link>
                    <Link href="/">Logout</Link>
                    <Link href="/">Cart (1)</Link>
                </div>
            )}
        </>

    )
}

export default Menu