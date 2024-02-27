import { Form, Input, Button, Select, DatePicker, Avatar } from 'antd';
import { Option } from 'antd/es/mentions';
import styles from './account.module.css';
import { InboxOutlined, PlusCircleFilled, UserOutlined } from '@ant-design/icons';

export default function Account() {

  const onFinish = (values:{}) => {
    console.log('Received values:', values);
  }

  return (
  <>
  <div className={styles.account__container}>

    <div className={styles.container}>
      <h2>General Information</h2>
      <Form layout="vertical" onFinish={onFinish} >
        
        <div className={styles.form__row}>
          <div className={styles.account__container__col}>
            <Form.Item name="firstname" label="First Name">
              <Input placeholder="Enter your first name"/>
            </Form.Item>
            <Form.Item name="email" label="Email">
              <Input placeholder="name@company.com" />
            </Form.Item>
            <Form.Item name="birthday" label="Birthday" >
              <DatePicker style={{ width: '100%' }} />
            </Form.Item>
          </div>
          <div className={styles.account__container__col}>
            <Form.Item name="lastname" label="Last Name">
              <Input placeholder="Type your last name" />
            </Form.Item>
            <Form.Item name="gender" label="Gender">
              <Select placeholder="Select your gender">
                <Option value="male">Male</Option>
                <Option value="female">Female</Option>
                <Option value="other">Other</Option>
              </Select>
            </Form.Item>
            <Form.Item name="phone" label="Phone" >
              <Input placeholder="+12 345 678 910" />
            </Form.Item>
          </div>
        </div>
        <h3>Address</h3>
        <div>
        <Form.Item name="address" label="address">
            <Input placeholder="Enter your address"/>
          </Form.Item>
          <Form.Item name="addressnumber" label="Number">
            <Input placeholder="No." />
          </Form.Item>
          <Form.Item name="city" label="City">
            <Input placeholder="City" />
          </Form.Item>
          <Form.Item name="zip" label="Zip">
            <Input placeholder="Zip" />
          </Form.Item>
          <Button type="primary" htmlType="submit">
            Save
          </Button>
        </div>
      </Form>
    </div>

    <div className={styles.container}>
      <div className={styles.user__container}>
        <div className={styles.user__avatar__container}>
          <Avatar size={64} icon={<UserOutlined />} />
          </div>
        <div className={styles.username}>User Name</div>
        <div className={styles.description}>Software Engineer</div>
        <div className={styles.location}>Barcelona, Spain</div>
        <div className={styles.buttons}>
          <Button type="primary">
            <PlusCircleFilled />Connect+
          </Button>
          <Button type="primary" >
            <InboxOutlined />Send Message
          </Button>
        </div>
      </div>
    </div>
  </div>
</>
  )
    
}