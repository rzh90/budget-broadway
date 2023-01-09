import "./App.css"
import ShowCard from "./components/ShowCard"

function App() {
    const shows = [
        {id: 1, name: "KPOP", location: "Circle in the Square"},
        {id: 2, name: "Harry Potter", location: "Lyric"},
        {id: 3, name: "Wicked", location: "Gershwin"}
    ]

    return (
        <div>
            <h1>Budget Broadway</h1>
            <ShowCard shows={shows} />
        </div>
    )
}

export default App