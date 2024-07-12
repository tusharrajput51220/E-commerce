'use client'

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const NavIcons = () => {
    const [isProfileOpen, setIsProfileOpen]=useState(false)
    const [isCartOpen, setIsCartOpen]=useState(false)

    return (
        <div className="flex items-center gap-4 xl:gap-6">
            <Image src="/profile.png" alt="" width={22} height={22} className="cursor-pointer" />
            {isProfileOpen && (
                <div>
                    <Link href=""></Link>
                </div>
            )}
            <Image src="/notification.png" alt="" width={22} height={22} className="cursor-pointer" />
            <Image src="/cart.png" alt="" width={22} height={22} className="cursor-pointer" />
        </div>
    )
}

export default NavIcons