import Footer from "./Footer"
import Header from "./Header"

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">
                {children}
            </main>
            <Footer />
        </div>
    )
}
export default Layout;