import { useQuery } from "@tanstack/react-query";
import UseAxios from "../useAxios/UseAxios";

const useMyCart = () => {

    const axios = UseAxios()

    const { data: myCart = [], refetch } = useQuery({
        queryKey: ['myCart'],
        queryFn: async () => {
            const res = await axios.get('/myCart')
            return res.data
        }
    })

    return [myCart, refetch]
};

export default useMyCart;