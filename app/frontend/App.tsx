import '@fontsource/outfit/400.css';
import '@fontsource/outfit/300.css';
import '@fontsource/outfit/700.css';
import '@fontsource/outfit/600.css';
import { theme } from '../../theme';
import { ChakraBaseProvider } from '@chakra-ui/react';
import loadable from '@loadable/component'
import { StaticRouter } from "react-router-dom/server";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ToastContainer } from 'utils/toast';
const Home = loadable(() => import("pages/Home"))
const Profile = loadable(() => import("pages/Profile"))
const Login = loadable(() => import("pages/Login"))

const queryClient = new QueryClient()

const routers = [
    {
        path: "/",
        element: <Home />
    },
    {
        path: '/profile',
        element: <Profile />
    },
    {
        path: '/login',
        element: <Login />
    }
]

const Router = () => {
    if (window) {
        return <BrowserRouter>
            <Routes>
                {
                    routers.map((route) => <Route key={route.path} path={route.path} element={route.element} />)
                }
            </Routes>
        </BrowserRouter>
    }

    return <StaticRouter location={""}>
        <Routes>
            {
                routers.map((route) => <Route key={route.path} path={route.path} element={route.element} />)
            }
        </Routes>
    </StaticRouter>
}

export default function App() {
    return <ChakraBaseProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
            <Router />
        </QueryClientProvider>
        <ToastContainer />
    </ChakraBaseProvider>
}