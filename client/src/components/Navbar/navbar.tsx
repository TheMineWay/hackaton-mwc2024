import { Avatar } from 'antd';
import { UserOutlined, InboxOutlined, BellOutlined, MoonFilled } from '@ant-design/icons';
import './navbar.css';

function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="logo__container">
          <MoonFilled />
          <span>Moon</span>
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