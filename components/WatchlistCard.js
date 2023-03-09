function WatchlistCard({show, buttonAction}) {
    function getImageUrl(show) {
        return `/images/playbills/${show.location.replaceAll(".", "").split(" ").join("")}.jpg`
    }

    return (
        <div className="items-center bg-gray-800 border border-gray-700 rounded-md flex">
            {/* playbill image */}
            <img className="w-28 rounded-md" src={getImageUrl(show)} alt={show.name} />

            {/* theater info */}
            <div className="p-5 text-sm">
                <h2 className="text-base font-bold text-white">{show.name}</h2>
                <p>{show.location} Theater</p>
                <p>{show.address}</p>
            
                <ul className="lg:flex lg:space-x-4 mt-4 space-y-6 lg:space-y-0">
                    <li><button className="px-3 py-2 text-xs font-bold text-center text-white bg-gray-700 rounded-lg hover:bg-gray-600 ring-1 ring-gray-600 hover:ring-gray-500" onClick={buttonAction}>Delete</button></li>
                </ul>
            </div>
        </div>
    )
}

export default WatchlistCard