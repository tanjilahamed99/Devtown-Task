import { useQuery } from "@tanstack/react-query";

const useMobile = () => {


    const { data: mobiles } = useQuery({
        queryKey: ['mobile'],
        queryFn: async () => {

        }
    })



    return [mobiles]
};

export default useMobile;