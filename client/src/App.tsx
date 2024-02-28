import Navbar from './components/Navbar/navbar';
import { ConfigProvider, theme } from 'antd';
import Router from './router/router';
import routes_definition from './router/definitions';
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

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
              borderRadius: 2,
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
