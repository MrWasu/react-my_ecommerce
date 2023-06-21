import React from 'react'
import { SideBar } from '../../ui/components/sidebar/SideBar'

const LoginPage: React.FC = () => {
  return (
    <div style={{display: 'flex'}}>
      <div>
        <SideBar />
      </div>
      
      <div>
        <h1>Login page</h1>
      </div>
    </div>
  )
}

export default LoginPage
