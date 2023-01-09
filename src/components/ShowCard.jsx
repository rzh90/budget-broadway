function ShowCard({shows}) {
    return (
        <div>
            {shows.map((show) => (
                <div key={show.id}>
                    <h2>{show.name}</h2>
                    <p>{show.location}</p>
                </div>
            ))}
        </div>
    )
}

export default ShowCard