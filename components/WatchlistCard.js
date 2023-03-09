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
            </div>

            <button className="text-xs border border-gray-500 rounded-md px-3 py-1 hover:border-gray-400" onClick={buttonAction}>Delete</button>
        </div>
    )
}

export default WatchlistCard