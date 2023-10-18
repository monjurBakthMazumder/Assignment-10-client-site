import PropTypes from 'prop-types';
import useAuth from '../Hock/useAuth';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user} = useAuth()
    if(!user){
       return <Navigate to={'/login'}/>
    }
    return children
};

PrivateRoute.propTypes = {
    children: PropTypes.node,
};

export default PrivateRoute;