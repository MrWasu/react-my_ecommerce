import { useDispatch, useSelector } from 'react-redux'
import './navbar.css'
import { onLogin, onLogout } from '../../../store/auth/authSlice';
import BasicModal from './modal/Modal';

export const Navbar = () => {

  const dispatch = useDispatch();

  const currentStatus = useSelector((state: any) => state.auth.status);

  const toggleAuthStatus = () => {
    // Obtener el estado actual de autenticación

    // Cambiar el estado según el estado actual
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

      <BasicModal></BasicModal>

    </div>
  )

}

