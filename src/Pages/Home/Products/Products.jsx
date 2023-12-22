import { useEffect, useState } from "react";
import DisplayProducts from "../../../components/DisplayProducts/DisplayProducts";
import UseAxios from "../../../Hooks/useAxios/UseAxios";
import { useForm } from "react-hook-form";

const Products = () => {
    const [mobiles, setMobiles] = useState([])
    const axios = UseAxios()
    const { register, handleSubmit } = useForm()
    const [shortOrder, setShortOrder] = useState()
    const [shortFlied, setShortFlied] = useState()
    const [search, setSearch] = useState()



    useEffect(() => {
        axios.get(`/mobiles?shortFlied=${shortFlied}&shortOrder=${shortOrder}&search=${search}`)
            .then(res => setMobiles(res.data))
    }, [axios, shortFlied, shortOrder, search])


    const onSubmit = (data) => {
        setSearch(data.search)
    }

    return (
        <div className="my-20 container mx-auto">
            <div className="text-center">
                <h2 className="text-xm font-bold">--Mobile--</h2>
                <h2 className="text-3xl font-semibold">Latest Mobiles</h2>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="flex justify-center mt-10 mb-5">
                <input  {...register("search")} type="text" placeholder="Type here" className="input input-bordered md:w-[30%] " />
                <button className="btn btn-outline">Search</button>
            </form>
            <div className="dropdown p-3">
                <div tabIndex={0} role="button" className="btn m-1 btn-outline">Price Filter</div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li onClick={() => setShortFlied('price')}><a onClick={() => setShortOrder('asc')}>Lowest Price</a></li>
                    <li onClick={() => setShortFlied('price')}><a onClick={() => setShortOrder('desc')}>Hightest Price</a></li>
                </ul>
            </div>
            <div className="grid p-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-20 my-10">
                {
                    mobiles?.map(i => <DisplayProducts key={i._id} product={i}></DisplayProducts>)
                }
            </div>
        </div>
    );
};

export default Products;