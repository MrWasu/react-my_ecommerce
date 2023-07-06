import { useDispatch, useSelector } from 'react-redux'

import './navbar.css'
import { onLogin, onLogout } from '../../../store/auth/authSlice';
import {BasicModal} from './modal/Modal';
import { LoginComponent } from '../../../auth/Components/LoginComponent';


export const Navbar = () => {

  const dispatch = useDispatch();

  const currentStatus = useSelector((state: any) => state.auth.status);

  const toggleAuthStatus = () => {


    //! Test, borrar
    if (currentStatus === 'authenticated') {
      dispatch(onLogout('Optional error message')); // Cambiar a 'not-authenticated'
    } else {
      dispatch(onLogin({ /* usuario */ })); // Cambiar a 'authenticated' y proporcionar los detalles del usuario
    }
  };


  return (
    <div id="navbar">

      <h3>Status: {currentStatus}</h3>

      <button onClick={toggleAuthStatus} >Cambiar Sesión</button>

      <BasicModal>
       <LoginComponent/>
      </BasicModal>

    </div>
  )
}

