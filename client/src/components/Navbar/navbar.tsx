import { Avatar } from 'antd';
import Logo from './navbarLogo.png';
import { UserOutlined, InboxOutlined, BellOutlined } from '@ant-design/icons';
import './navbar.css';

function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="logo_content">
          <div className="logo__container">
            <img src={Logo} alt="Logo" className="logo" />
          </div>
        </div>
        <div className="user__container">
        <BellOutlined />
        <InboxOutlined />
          <div className="user__avatar__container">
            <Avatar size="large" icon={<UserOutlined />} />
          </div>
          <div className="user-name">Username</div>
        </div>  
      </div>
    </>
  )
}

export default Navbar