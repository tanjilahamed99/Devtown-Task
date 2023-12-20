import useMobile from "../../../Hooks/useMoblies/useMobile";
import DisplayProducts from "../../../components/DisplayProducts/DisplayProducts";

const Products = () => {

    const [mobiles] = useMobile()
    console.log(mobiles)

    return (
        <div className="my-20 container mx-auto">
            <div className="text-center">
                <h2 className="text-xm font-bold">--Mobile--</h2>
                <h2 className="text-3xl font-semibold">Latest Mobiles</h2>
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