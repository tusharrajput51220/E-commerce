// Server component(nextjs file are default server side . now need to write 'use server')
import Link from "next/link"
import Menu from "./Menu"
import Image from "next/image"
import Searchbar from "./Searchbar"
import NavIcons from "./NavIcons"

const Navbar = () => {
    return (
        <div className="h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
            {/* Modile */}
            <div className="flex items-center justify-between h-full md:hidden">
                <Link href="/">
                    <div className="text-2xl tracking-wide">SHOP</div>
                </Link>
                <Menu />
            </div>

            {/* Bigger screen */}
            <div className="hidden md:flex items-center justify-between gap-8 h-full">
                {/* LEFT */}
                <div className="w-1/3">
                   <Link href='/' className="flex items-center gap-3">
                   <Image src="/logo.png" alt="" width={24} height={24} />
                   <div className="text-2xl tracking-wide">SHOP</div>
                   </Link>
                </div>
                {/* RIGHT */}
                <div className="w-2/3 flex items-center justify-center gap-8">
                    <Searchbar />
                    <NavIcons />
                </div>
            </div>
        </div>
    )
}

export default Navbar