import { SideBar } from "../../ui/components/sidebar/SideBar";
import './ShopPage.css'

const drawerWidth = 240;

const ShopPage = () => {
    return (
        <div style={{display: 'flex'}}>
            <div>
                <SideBar />
            </div>

            <div className="content">
                <h1>Shop page</h1>
            </div>
        </div>
    );
};

export default ShopPage;
