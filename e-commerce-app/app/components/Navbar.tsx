// Server component(nextjs file are default server side . now need to write 'use server')
import Link from "next/link"
import Menu from "./Menu"

const Navbar = () => {
    return (
        <div className="h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
            {/* Modile */}
            <Link href="/">SHOP</Link>
            <Menu />
        </div>
    )
}

export default Navbar