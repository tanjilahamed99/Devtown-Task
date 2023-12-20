import PropTypes from 'prop-types';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';

const DisplayMyCart = ({ products }) => {
    const { name, brand, price, photo, rating } = products
    // console.log(products)
    return (
        <div className="card w-[90%] bg-base-100 shadow-xl mx-auto">
            <figure><img className='w-[300px] h-[300px]' src={photo} alt="Shoes" /></figure>
            <div className="card-body">
                <div className='flex justify-between'>
                    <h2 className="card-title text-xl text-semibold">{name}</h2>
                    <Rating
                        className='text-yellow-500 text-xl'
                        placeholderRating={rating}
                        emptySymbol={<FaRegStar></FaRegStar>}
                        placeholderSymbol={<FaStar ></FaStar >}
                        fullSymbol={<FaStar ></FaStar >}
                    />
                </div>
                <p className='text-lg font-medium'> Brand: {brand}</p>
                <p className='text-xl my-2'>Price : <span className='font-bold'>${price}</span></p>
                {/* <div className="card-actions ">
                    <button onClick={() => handleBuyMobile(_id)} className="btn btn-outline">Buy Now</button>
                </div> */}
            </div>
        </div>
    );
};

DisplayMyCart.propTypes = {
    products: PropTypes.object
};

export default DisplayMyCart;