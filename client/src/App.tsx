import Navbar from './components/Navbar/navbar';
import { ConfigProvider, theme } from 'antd';
const { darkAlgorithm } = theme;
import Router from './router/router';
import routes_definition from './router/definitions';
import { BrowserRouter } from "react-router-dom";
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

        <BrowserRouter>
                <Router routes={routes_definition} />
        </BrowserRouter>

     </ConfigProvider>
    </div>
    </>
  )
}

export default App
