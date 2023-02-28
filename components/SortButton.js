function SortButton({sortType, buttonAction}) {
    return (
        <>
            <button className="border border-gray-500 rounded-md px-3 py-1 hover:border-gray-400" onClick={buttonAction}>{sortType}</button>
        </>
    )
}

export default SortButton