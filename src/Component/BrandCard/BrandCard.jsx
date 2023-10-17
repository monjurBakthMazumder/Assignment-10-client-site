import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const BrandCard = ({brandData}) => {
    const {brand, img} = brandData || {}
    return (
        <div className="card border">
            <figure className='h-40 mt-5'><img src={img} alt={`image og ${brand}`} className='h-full'/></figure>
            <div className="card-body">
                <Link to={`/brand/${brand}`} className="card-title mx-auto font-bold">{brand}</Link>
            </div>
        </div>
    );
};

BrandCard.propTypes = {
    brandData: PropTypes.object
};

export default BrandCard;