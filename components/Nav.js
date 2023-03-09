import Image from "next/image"
import Link from "next/link"

function Nav() {
    return (
        <header className="fixed w-full z-20 top-0 left-0 border-b border-gray-700 bg-gray-900">
            <nav className="bg-gray-900 px-4 py-4 mx-auto max-w-screen-xl flex justify-between items-center">
                <Link href="/"><img src="images/logo.svg" className="w-56" /></Link>
                <Link href="/tickets" className="text-xs font-bold px-3 py-2 text-center text-white bg-bbblue rounded-md hover:bg-bblightblue ring-1 ring-bblightblue hover:ring-bblightblue">Ticket info</Link>
            </nav>
        </header>
    )
}
export default Nav