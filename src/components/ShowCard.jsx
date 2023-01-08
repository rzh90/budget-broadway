function ShowCard({show}) {
    return (
        <div className="max-w-sm border border-gray-700 rounded-lg bg-gray-800 text-gray-400">
            <div className="p-5">
                <h2 className="mb-2 text-2xl font-bold text-white">{show.name}</h2>
                <p className="mb-3">{show.location}</p>
                <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-bold text-center text-white bg-gray-700 rounded-md hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-gray-400">Rush</a>
            </div>
        </div>
    )
}

export default ShowCard