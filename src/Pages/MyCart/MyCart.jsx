import useMyCart from "../../Hooks/MyCart/useMyCart";
import DisplayMyCart from "../../components/DisplayMyCart/DisplayMyCart";

const MyCart = () => {

    const [myCart] = useMyCart()

    return (
        <div className="grid my-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 justify-center mx-auto">

            {
                myCart?.map(i => <DisplayMyCart key={i._id} products={i}></DisplayMyCart>)
            }

        </div>
    );
};

export default MyCart;