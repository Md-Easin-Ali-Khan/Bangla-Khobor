import BreakingNews from "@/components/shared/BreakingNews";
import Header from "@/components/shared/Header";
import NavBar from "@/components/shared/NavBar";

const MainLayout = ({ children }) => {
    return (
        <>
            <Header />
            <BreakingNews />
            <NavBar />
            {children}
        </>
    );
};

export default MainLayout;