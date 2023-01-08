function ShowCard({show}) {
    return (
        <div>
            <h2>{show.name}</h2>
            <p>{show.location}</p>
        </div>
    )
}

export default ShowCard