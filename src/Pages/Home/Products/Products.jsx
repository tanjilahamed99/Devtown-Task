import { useEffect, useState } from "react";
import DisplayProducts from "../../../components/DisplayProducts/DisplayProducts";
import UseAxios from "../../../Hooks/useAxios/UseAxios";

const Products = () => {
    const [mobiles, setMobiles] = useState([])
    const axios = UseAxios()
    const [shortOrder, setShortOrder] = useState()
    const [shortFlied, setShortFlied] = useState()



    useEffect(() => {
        axios.get(`/mobiles?shortFlied=${shortFlied}&shortOrder=${shortOrder}`)
            .then(res => setMobiles(res.data))
    }, [axios, shortFlied, shortOrder])


    return (
        <div className="my-20 container mx-auto">
            <div className="text-center">
                <h2 className="text-xm font-bold">--Mobile--</h2>
                <h2 className="text-3xl font-semibold">Latest Mobiles</h2>
            </div>
            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn m-1 btn-outline">Price Filter</div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li onClick={() => setShortFlied('price')}><a onClick={() => setShortOrder('asc')}>Lowest Price</a></li>
                    <li onClick={() => setShortFlied('price')}><a onClick={() => setShortOrder('desc')}>Hightest Price</a></li>
                </ul>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-20 my-10">
                {
                    mobiles?.map(i => <DisplayProducts key={i._id} product={i}></DisplayProducts>)
                }
            </div>
        </div>
    );
};

export default Products;