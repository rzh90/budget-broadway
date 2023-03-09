import WatchlistButton from "./WatchlistButton"

function WatchlistCard({show, buttonAction}) {
    return (
        <div className="items-center bg-gray-800 border border-gray-700 rounded-md">
            <div className="p-5 text-sm">
                <h2 className="text-base font-bold text-white">{show.name}</h2>
                <ul className="lg:flex lg:space-x-4 mt-4 space-y-6 lg:space-y-0">
                    <WatchlistButton buttonType="Remove" buttonAction={buttonAction} />
                </ul>
            </div>
        </div>
    )
}

export default WatchlistCard