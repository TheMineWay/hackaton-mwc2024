import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import './navbar.css';

function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="logo__container">
          <img src="" alt="" className="logo" />
        </div>
        <div className="user__container">
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