import { fetchData } from "../lib/utils";
import { Product } from "../types/DBTypes";



const useProducts = () => {
    const getProducts = async (): Promise<Product[]> => {
        const response = await fetchData<{ data: { id: number, attributes: any }[] }>(
            `http://localhost:1337/api/products`
        );
        return response.data.map(({ id, attributes }) => ({
            id,
            ...attributes 
        }));
    };
    return { getProducts }
};



export { useProducts }