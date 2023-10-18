import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const BrandCard = ({brandData}) => {
    const {brand, img} = brandData || {}
    return (
        <Link to={`/brand/${brand}`} className="card border">
            <figure className='h-40 mt-5'><img src={img} alt={`image og ${brand}`} className='h-full'/></figure>
            <div className="card-body">
                <button className="card-title mx-auto font-bold">{brand}</button>
            </div>
        </Link>
    );
};

BrandCard.propTypes = {
    brandData: PropTypes.object
};

export default BrandCard;