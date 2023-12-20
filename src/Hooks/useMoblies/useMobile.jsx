import { useQuery } from "@tanstack/react-query";
import UseAxios from "../useAxios/UseAxios";

const useMobile = () => {

    const axios = UseAxios()

    const { data: mobiles = [] } = useQuery({
        queryKey: ['mobile'],
        queryFn: async () => {
            const res = await axios.get('/mobiles')
            return res.data
        }
    })



    return [mobiles]
};

export default useMobile;