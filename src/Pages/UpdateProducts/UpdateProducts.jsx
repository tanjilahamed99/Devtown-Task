import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UseAxios from "../../Hooks/useAxios/UseAxios";
import Swal from "sweetalert2";

const UpdateProducts = () => {
    const { id } = useParams()
    const axios = UseAxios()
    const [product, setProduct] = useState([])

    useEffect(() => {
        axios.get(`/products/${id}`)
            .then(res => setProduct(res.data))
    }, [axios, id])




    const handleUpdate = (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const photo = form.photo.value
        const brand = form.brand.value
        const type = form.type.value
        const price = form.price.value
        const rating = form.rating.value

        const updatedData = { name, photo, brand, type, price, rating }

        axios.patch(`/product/${id}`, updatedData)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        icon: "success",
                        title: "Updated complete",
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })

    }




    return (
        <div className="my-10">
            <div className="text-center mb-10">
                <h2 className="text-xm font-bold">--Update--</h2>
                <h2 className="text-3xl font-semibold">Update Product</h2>
            </div>
            <form onSubmit={handleUpdate} className="grid grid-cols-1 w-full md:w-1/2 mx-auto lg:w-[40%] items-center justify-center gap-10 md:grid-cols-2 ">
                <div className="mx-auto w-full">
                    <h2 className="text-sm font-bold mb-2">Products Name</h2>
                    <input name="name" defaultValue={product?.name} type="text" placeholder="Type here" className="input input-bordered w-full " />
                </div>
                <div className="mx-auto w-full">
                    <h2 className="text-sm font-bold mb-2">Products Image</h2>
                    <input name="photo" defaultValue={product.photo} type="text" placeholder="Type here" className="input input-bordered w-full " />
                </div>
                <div className="mx-auto w-full">
                    <h2 className="text-sm font-bold mb-2">Products Brand</h2>
                    <input name="brand" defaultValue={product.brand} type="text" placeholder="Type here" className="input input-bordered w-full " />
                </div>
                <div className="mx-auto w-full">
                    <h2 className="text-sm font-bold mb-2">Products Type</h2>
                    <input name="type" type="text" defaultValue={product.type} placeholder="Type here" className="input input-bordered w-full " />
                </div>
                <div className="mx-auto w-full">
                    <h2 className="text-sm font-bold mb-2">Products Price</h2>
                    <input name="price" defaultValue={product.price} type="number" placeholder="Type here" className="input input-bordered w-full " />
                </div>
                <div className="mx-auto w-full">
                    <h2 className="text-sm font-bold mb-2">Products Rating</h2>
                    <input name="rating" defaultValue={product.rating} type="number" placeholder="Type here" className="input input-bordered w-full " />
                </div>
                <button className="btn btn-outline col-span-2">Update</button>
            </form>
        </div>
    );
};

export default UpdateProducts;