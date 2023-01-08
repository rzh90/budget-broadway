import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Nav from "./Nav"
import Home from "./Home"
import Rush from "./Rush"

function App() {
    return (
        <Router>
            <div className="App">
                <Nav />
                <main className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/rush" element={<Rush />} />
                    </Routes>
                </main>
            </div>
        </Router>
    )
}

export default App