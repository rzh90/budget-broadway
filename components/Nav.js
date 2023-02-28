import Image from "next/image"
import Link from "next/link"

function Nav() {
    return (
        <header className="fixed w-full z-20 top-0 left-0 border-b border-gray-700 bg-gray-900">
            <nav className="bg-gray-900 px-4 py-4 mx-auto max-w-screen-xl">
                <Link href="/"><img src="images/logo.svg" className="w-56" /></Link>
            </nav>
        </header>
    )
}
export default Nav