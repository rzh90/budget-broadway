function ShowCard({show}) {
    return (
        <div className="max-w-sm border border-gray-700 rounded-lg bg-gray-800 text-gray-400">
            <h2 className="text-white font-bold">{show.name}</h2>
            <p>{show.location}</p>
        </div>
    )
}

export default ShowCard