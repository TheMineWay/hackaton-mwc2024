import Navbar from './components/Navbar/navbar';
import { ConfigProvider, theme } from 'antd';
import Router from './router/router';
import routes_definition from './router/definitions';
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import styles from './App.module.css';

const { darkAlgorithm } = theme;

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    },
  },
})


function App() {

  return (
    <QueryClientProvider client={queryClient}>
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
            <Navbar />
            <Router routes={routes_definition} />
          </BrowserRouter>
      </ConfigProvider>
    </QueryClientProvider>
  )
}

export default App
