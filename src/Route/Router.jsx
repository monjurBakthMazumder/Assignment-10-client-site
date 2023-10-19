import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home';
import AddProduct from '../Pages/AddProduct/AddProduct';
import Cart from '../Pages/Cart/Cart';
import Update from '../Pages/Update/Update';
import Details from '../Pages/Details/Details';
import Login from '../Pages/Authentication/Login/Login';
import Register from '../Pages/Authentication/Register/Register';
import BrandDetails from '../Pages/BrandDetails/BrandDetails';
import PrivateRoute from './PrivateRoute';

const Router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: '/',
                element: <Home/>,
                loader: ()=> fetch('https://server-site-chi.vercel.app/brand')
            },
            {
                path: '/add-product',
                element: <PrivateRoute><AddProduct/></PrivateRoute>
            },
            {
                path: '/cart',
                element: <PrivateRoute><Cart/></PrivateRoute>,
                loader: ()=> fetch('https://server-site-chi.vercel.app/orders')
            },
            {
                path: '/update/:id',
                element: <PrivateRoute><Update/></PrivateRoute>,
                loader: ({params})=> fetch(`https://server-site-chi.vercel.app/product/${params.id}`)
            },
            {
                path:'/brand/:brand',
                element: <BrandDetails/>,
                loader: ({params})=> fetch(`https://server-site-chi.vercel.app/products/${params.brand}`)
            },
            {
                path: '/product/:id',
                element: <PrivateRoute><Details/></PrivateRoute>,
                loader: ({params})=> fetch(`https://server-site-chi.vercel.app/product/${params.id}`)
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/register',
                element: <Register/>
            }
        ]
    }
])

export default Router;