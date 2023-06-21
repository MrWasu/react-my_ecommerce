import { Navigate, Route, Routes } from 'react-router-dom';
import ShopPage from '../shop/pages/ShopPage';
import CheckoutPage from '../checkout/pages/CheckoutPage';
import PaymentPage from '../payment/PaymentPage';
import LoginPage from '../auth/page/LoginPage';
import UserPanelPage from '../user-panel/UserPanelPage';



export const AppRouter = () => {


    return (
        <Routes>

            <Route path='/*' element={<Navigate to='/shop' />} />

            <Route path="/shop" element={<ShopPage />} />

            <Route path="/checkout" element={<CheckoutPage />} />

            <Route path="/payment" element={<PaymentPage />} />

            <Route path="/userpanel" element={<UserPanelPage />} />

            <Route path="/auth/login" element={<LoginPage />} />
            
        </Routes>
    )
}