import PropTypes from 'prop-types';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import Swal from 'sweetalert2';
import UseAxios from '../../Hooks/useAxios/UseAxios';
import useMyCart from '../../Hooks/MyCart/useMyCart';

const DisplayMyCart = ({ products }) => {
    const { name, brand, price, photo, rating, _id } = products
    // console.log(products)
    const axios = UseAxios()
    const [, refetch] = useMyCart()

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axios.delete(`/myCart/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your products  has been deleted.",
                                icon: "success"
                            });
                            refetch()
                        }
                    })


            }
        })

    }

    return (
        <div className="card w-[90%] bg-base-100 shadow-xl mx-auto">
           <img className='w-[300px] h-[300px]' src={photo} alt="Shoes" />
            <div className="card-body">
                <div className='flex xl:flex-row flex-col gap-3 justify-between'>
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
                    <button onClick={() => handleDelete(_id)} className="btn btn-outline">Delete</button>
                </div>
            </div>
        </div>
    );
};

DisplayMyCart.propTypes = {
    products: PropTypes.object
};

export default DisplayMyCart;