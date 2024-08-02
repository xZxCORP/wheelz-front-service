import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <div className='h-96 flex justify-center align-center'>{children}</div>
            <Footer />
        </>
    );
}

export default Layout
