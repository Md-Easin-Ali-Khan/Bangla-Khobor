import Header from "@/components/shared/Header";
import NavBar from "@/components/shared/NavBar";

const MainLayout = ({children}) => {
    return (
        <>
            <Header />
            <NavBar />
            {children}
        </>
    );
};

export default MainLayout;