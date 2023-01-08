import DiscountButton from "./DiscountButton"

function ShowCard({show}) {
    function getImageUrl(show) {
        return `/images/playbills/${show.location.replaceAll(".", "").split(" ").join("")}.jpg`
    }
    
    return (
        <div className="items-center bg-gray-800 border border-gray-700 rounded-md sm:flex">
            <img className="w-28" src={getImageUrl(show)} alt={show.name} />
            <div className="p-5">
                <h2 className="text-xl font-bold text-white">{show.name}</h2>
                <p>{show.location} Theater</p>
                <p>{show.address}</p>
                {show.closes && <p className="text-bbblue font-bold">Closes {show.closes.replaceAll("-", "/")}</p>}

                <ul className="flex space-x-4 mt-4">
                    {show.rush && <DiscountButton discountAmt={show.rush} link={show.rush_link} type="Rush" />}
                    {show.lottery && <DiscountButton discountAmt={show.lottery} link={show.lottery_link} type="Lottery" />}
                </ul>
            </div>
        </div>
    )
}

export default ShowCard