function WatchlistButton({buttonType, buttonAction}) {
    return (
        <>
            <li>
                <button className="px-3 py-2 text-xs font-bold text-center text-white bg-gray-700 rounded-md hover:bg-gray-600 ring-1 ring-gray-600 hover:ring-gray-500" onClick={buttonAction}>{buttonType}</button>
            </li>
        </>
    )
}
export default WatchlistButton