import Navbar from './components/navbar';
import Main from './components/main';
import { ConfigProvider, theme } from 'antd';
const { darkAlgorithm, compactAlgorithm } = theme;
import './App.css'

function App() {

  return (
    <>


    <div className="app">
      <Navbar />
      <ConfigProvider
        theme={{
          algorithm: darkAlgorithm,
          token: {
            colorPrimary: '#000',
            borderRadius: 2,
            colorBgContainer: '#000',
            
          },
        }}
      >

      <Main />

     </ConfigProvider>
    </div>
    </>
  )
}

export default App
