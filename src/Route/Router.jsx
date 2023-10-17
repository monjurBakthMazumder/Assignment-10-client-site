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

const Router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/add-products',
                element: <AddProduct/>
            },
            {
                path: '/cart',
                element: <Cart/>
            },
            {
                path: '/update/:id',
                element: <Update/>
            },
            {
                path: '/Product/:id',
                element: <Details/>
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