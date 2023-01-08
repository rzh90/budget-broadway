function ShowCard({show}) {
    function getImageUrl(show) {
        return `src/assets/images/playbills/${show.location.replaceAll(".", "").split(" ").join("")}.jpg`
    }
    
    return (
        <div className="items-center bg-gray-800 border-gray-700 rounded-md shadow sm:flex">
            <img className="w-28" src={getImageUrl(show)} alt={show.name} />
            <div className="p-5">
                <h3 className="text-xl font-bold text-white">{show.name}</h3>
                <p>{show.location} Theater</p>
                <p>{show.address}</p>
                {show.closes && <p className="text-bbblue font-bold">Closes {show.closes.replaceAll("-", "/")}</p>}

                <ul className="flex space-x-4 mt-4">
                    {show.lottery &&
                        <li>
                            <a href={show.discount_link} className="px-3 py-2 text-sm font-bold text-center text-white bg-gray-700 rounded-lg hover:bg-gray-600 ring-1 ring-gray-600 hover:ring-gray-500">${show.lottery} Lottery</a>
                        </li>
                    }
                    {show.rush &&
                        <li>
                            <a href={show.discount_link} className="px-3 py-2 text-sm font-bold text-center text-white bg-gray-700 rounded-lg hover:bg-gray-600 ring-1 ring-gray-600 hover:ring-gray-500">${show.rush} rush</a>
                        </li>
                    }
                </ul>
            </div>
        </div>
    )
}

export default ShowCard