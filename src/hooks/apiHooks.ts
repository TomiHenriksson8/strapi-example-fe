import { fetchData } from "../lib/utils";
import { Product } from "../types/DBTypes";



const useProducts = () => {
    const getProducts = async () => {
        return await fetchData<Product[]>(
            process.env.EXAMPLE_STRAPI_URL + '/products'
        )
    }
    return { getProducts }
};



export { useProducts }