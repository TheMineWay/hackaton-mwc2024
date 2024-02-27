import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import styles from './account.module.css';

export default function Account() {

  const userData = {
    name: 'John Doe',
    email: 'john@example.com',
    age: 30,
    notification: true,
    address: '123 Main St',
    language: 'English',
    theme: 'Dark',
  };

  return (
  <>
    <div className={styles.account__container}>
      <div className={styles.account__container__col}>
        <h2>User Preferences</h2>
        <div className={styles.user__container}>
          <div className={styles.user__avatar__container}>
            <Avatar size="large" icon={<UserOutlined />} />
            </div>
          <div className={styles.username}>Username</div>
        </div>
        <p><strong>Email:</strong> {userData.email}</p>
        <p><strong>Age:</strong> {userData.age}</p>
        <p><strong>Notification:</strong> {userData.notification ? 'Enabled' : 'Disabled'}</p>
        <p><strong>Address:</strong> {userData.address}</p>
        <p><strong>Language:</strong> {userData.language}</p>
        <p><strong>Theme:</strong> {userData.theme}</p>
      </div>
      <div className={styles.account__container__col}>
        <h2>Number of devices connected: 3</h2>
      </div>
    </div>
  </>
  )
    
}