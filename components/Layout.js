import Footer from "./Footer"
import Nav from "./Nav"

const Layout = ({ children }) => {
    return (
        <div>
            <Nav />
            <main className="pt-8 pb-6 px-4 mx-auto max-w-screen-xl lg:pt-16 lg:px-6">
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout