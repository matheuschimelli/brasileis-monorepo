import NavBar from '../NavBar';
import Footer from '../Footer';

const DefaultLayout = ({ children }) => (
        <>
        <NavBar/>
        {children}
        <Footer/>
        </>
);

export default DefaultLayout;
