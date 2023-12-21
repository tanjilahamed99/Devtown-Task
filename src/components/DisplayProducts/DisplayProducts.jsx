import PropTypes from 'prop-types';
import Rating from 'react-rating';
import { FaRegStar, FaStar } from "react-icons/fa";
import UseAxios from '../../Hooks/useAxios/UseAxios';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const DisplayProducts = ({ product }) => {
    const { name, brand, price, photo, rating, _id } = product
    const axios = UseAxios()

    const handleBuyMobile = (id) => {

        const buyMobileData = { name, brand, price, photo, rating, id }

        axios.post('/mobile', buyMobileData)
            .then(res => {
                if (res.data.acknowledged) {
                    Swal.fire({
                        title: "Good job!",
                        text: "You Buy this product",
                        icon: "success"
                    });
                }
            })

    }


    return (
        <div className="card w-96 bg-base-100 shadow-xl mx-auto rounded-br-[80px]">
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
                <div className="card-actions ">
                    <button onClick={() => handleBuyMobile(_id)} className="btn btn-outline">Buy Now</button>
                    <Link to={`/updateProduct/${_id}`}>
                        <button className="btn btn-outline">Update</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

DisplayProducts.propTypes = {
    product: PropTypes.object
};

export default DisplayProducts;