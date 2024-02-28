import { CameraOutlined, DesktopOutlined, MobileOutlined } from "@ant-design/icons";

const Icon = (type:string, title?:string) => {
  switch(type) {
    case 'Mobile': 
      return  <>
                <MobileOutlined /> {title}
              </>
    case 'PC':     
      return  <>
                <DesktopOutlined /> {title} 
              </>
    case 'Camera': 
      return  <>
                <CameraOutlined /> {title}  
              </>
    default:       
      return null;
 }
}

export default Icon;