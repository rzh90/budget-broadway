import Footer from "./Footer"
import Nav from "./Nav"

const Layout = ({ children }) => {
    return (
        <div>
            <Nav />
            <main className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout