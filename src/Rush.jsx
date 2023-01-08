function Rush() {
    return (
        <div className="mt-8">
            <div className="text-center mb-6">
                <h1 className="text-4xl text-bbblue mb-2">Other Tickets</h1>
                <p className="text-xl">General rush, student rush, and standing room</p>
            </div>

            <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-3">

                <div className="items-center bg-gray-800 border-gray-700 rounded-md p-4">
                    <h2 className="text-xl font-bold text-white">General Rush</h2>
                    <p>A limited number of general rush tickets will be available to purchase at the box office on the day of the performance.</p>
                </div>

            <div className="items-center bg-gray-800 border-gray-700 rounded-md p-4">
                <h2 className="text-xl font-bold text-white">Student Rush</h2>
                <p>Available at the box office on the day of the performance. Valid student ID required.</p>
            </div>

            <div className="items-center bg-gray-800 border-gray-700 rounded-md p-4">
                <h2 className="text-xl font-bold text-white">Standing Room</h2>
                <p>Available at the box office on the day of the performance only if the show is sold out. Standing room patrons stand in numbered spaces that are the width of a regular seat.</p>
            </div>
        </div>
        </div>
    )
}
export default Rush