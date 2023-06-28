import { Navigate, Route, Routes } from 'react-router-dom';
import ShopPage from '../shop/pages/ShopPage';
import CheckoutPage from '../checkout/pages/CheckoutPage';
import PaymentPage from '../payment/PaymentPage';
import {LoginPage} from '../auth/page/LoginPage';
import UserPanelPage from '../user-panel/UserPanelPage';
import { useSelector } from 'react-redux';
import { current } from '@reduxjs/toolkit';
import { AuthRoutes } from '../auth/routes/AuthRoutes';



export const AppRouter = () => {

    const currentStatus = useSelector((state: any) => state.auth.status);
   
    let logged = false;
   
    if (currentStatus === 'authenticated') logged = true;


    return (logged)
        ?
        <Routes>

            <Route path='/*' element={<Navigate to='/shop' />} />

            <Route path="/shop" element={<ShopPage />} />

            <Route path="/checkout" element={<CheckoutPage />} />

            <Route path="/payment" element={<PaymentPage />} />

            <Route path="/userpanel" element={<UserPanelPage />} />

            <Route path="/auth/*" element={<AuthRoutes />} />

        </Routes>
        :
        <Routes>

            <Route path='/*' element={<Navigate to='/auth/login' />} />

            <Route path="/shop" element={<ShopPage />} />

            <Route path="/checkout" element={<CheckoutPage />} />

            <Route path="/auth/*" element={<AuthRoutes />} />

        </Routes>

}