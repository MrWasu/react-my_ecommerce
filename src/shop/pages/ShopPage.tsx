import { Footer } from "../../ui/components/footer/footer";
import { Header } from "../../ui/components/header/header";
import { Navbar } from "../../ui/components/navbar/navbar";


import { SideBar } from "../../ui/components/sidebar/SideBar";
import './ShopPage.css'

const drawerWidth = 240;

const ShopPage = () => {
    return (
        <>
        <Header/>
        <Navbar/>
            <div style={{ display: 'flex' }}>
                <div>
                    <SideBar />
                </div>

                <div className="content">
                    <h1>Shop page</h1>
                </div>
            </div>
        <Footer/>
        </>
    );
};

export default ShopPage;
