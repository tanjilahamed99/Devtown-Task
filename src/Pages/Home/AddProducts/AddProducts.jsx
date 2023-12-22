import Swal from "sweetalert2";
import UseAxios from "../../../Hooks/useAxios/UseAxios";

const AddProducts = () => {
    const axios = UseAxios()

    const handleNewData = (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const photo = form.photo.value
        const brand = form.brand.value
        const type = form.type.value
        const price = form.price.value
        const rating = form.rating.value

        const newProductsData = { name, photo, brand, type, price, rating }

        axios.post(`/product`, newProductsData)
            .then(res => {
                if (res.data.acknowledged) {
                    Swal.fire({
                        icon: "success",
                        title: "Successful Added new item",
                        showConfirmButton: false,
                        timer: 1500
                    })
                    form.reset()
                }
            })

    }


    return (
        <div className="my-10">
            <div className="text-center mb-10">
                <h2 className="text-xm font-bold">--Add--</h2>
                <h2 className="text-3xl font-semibold">Add Product</h2>
            </div>
            <form onSubmit={handleNewData} className="grid grid-cols-1 w-full md:w-[70%] mx-auto lg:w-[40%] items-center justify-center gap-10 md:grid-cols-2 ">
                <div className="mx-auto md:w-full col-span-2 md:col-span-1 w-[90%]">
                    <h2 className="text-sm font-bold mb-2">Products Name</h2>
                    <input required name="name" type="text" placeholder="Type here" className="input input-bordered w-full " />
                </div>
                <div className="mx-auto md:w-full col-span-2 md:col-span-1 w-[90%]">
                    <h2 className="text-sm font-bold mb-2">Products Image</h2>
                    <input required name="photo" type="text" placeholder="Type here" className="input input-bordered w-full " />
                </div>
                <div className="mx-auto md:w-full col-span-2 md:col-span-1 w-[90%]">
                    <h2 className="text-sm font-bold mb-2">Products Brand</h2>
                    <input required name="brand" type="text" placeholder="Type here" className="input input-bordered w-full " />
                </div>
                <div className="mx-auto md:w-full col-span-2 md:col-span-1 w-[90%]">
                    <h2 className="text-sm font-bold mb-2">Products Type</h2>
                    <input required name="type" type="text" placeholder="Type here" className="input input-bordered w-full " />
                </div>
                <div className="mx-auto md:w-full col-span-2 md:col-span-1 w-[90%]">
                    <h2 className="text-sm font-bold mb-2">Products Price</h2>
                    <input required name="price" type="number" placeholder="Type here" className="input input-bordered w-full " />
                </div>
                <div className="mx-auto md:w-full col-span-2 md:col-span-1 w-[90%]">
                    <h2 className="text-sm font-bold mb-2">Products Rating</h2>
                    <input required name="rating" type="number" placeholder="Type here" className="input input-bordered w-full " />
                </div>
                <button className="btn btn-outline col-span-2 w-[90%] md:w-full mx-auto">Add</button>
            </form>
        </div>
    );
};

export default AddProducts;