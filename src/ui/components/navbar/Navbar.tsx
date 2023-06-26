import { useSelector } from 'react-redux'
import './navbar.css'

export const Navbar = () => {

  const status = useSelector((state:any) => state.auth.status);

  return (
    <div id="navbar">

        <h3>Status: {status}</h3>
      
    </div>
  )
}


