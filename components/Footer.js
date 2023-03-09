
function Footer() {
    return (
        <>
        <hr className="mb-6 border-gray-800 sm:mx-auto dark:border-gray-700" />

        <footer className="p-4 sm:p-6 mx-auto max-w-screen-xl">
            <div className="md:flex md:justify-between">
                {/* logo */}
                <div className="mb-6 md:mb-0">
                    <a href="/" className="flex items-center"><img src="images/logo.svg" className="h-8 mr-3" alt="Budget Broadway Logo" /></a>
                </div>

                {/* links */}
                <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-2">
                    <div className="text-sm">
                        <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">Shows</h2>
                        <ul className="text-gray-500">
                            <li className="mb-4"><a href="https://www.broadway.org/shows" className="hover:text-white">Broadway.org</a></li>
                            <li><a href="https://www.ibdb.com/" className="hover:text-white">IBDB</a></li>
                        </ul>
                    </div>
                    <div className="text-sm">
                        <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">Tickets</h2>
                        <ul className="text-gray-500">
                            <li className="mb-4"><a href="https://www.seatgeek.com/" className="hover:text-white">SeakGeek</a></li>
                            <li className="mb-4"><a href="https://www.telecharge.com/" className="hover:text-white">Telecharge</a></li>
                            <li><a href="https://www.ticketmaster.com/" className="hover:text-white">Ticketmaster</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <hr className="my-6 border-gray-800 sm:mx-auto dark:border-gray-700 lg:my-8" />

            <div className="sm:flex sm:items-center sm:justify-between">
                {/* copyright */}
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="/" className="hover:text-white">Budget Broadway</a>. All Rights Reserved.
                </span>
            </div>
        </footer>
    </>
    )
}

export default Footer