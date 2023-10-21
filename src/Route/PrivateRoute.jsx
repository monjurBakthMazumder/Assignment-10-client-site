import PropTypes from 'prop-types';
import useAuth from '../Hock/useAuth';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../Component/Loading/Loading';

const PrivateRoute = ({children}) => {
    const location = useLocation()
    const getLoc = () => {
        const loc= localStorage.getItem('location')
        if(loc){
            return loc
        }return ''
    }
    let loc = getLoc()
    loc = location.pathname
    localStorage.setItem('location', loc)
    const {user, loading} = useAuth()
    if(loading){
        return <Loading/>
    }
    if(!user){
       return <Navigate to={'/login'}/>
    }
    return children
};

PrivateRoute.propTypes = {
    children: PropTypes.node,
};

export default PrivateRoute;