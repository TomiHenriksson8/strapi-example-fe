import { useEffect, useState } from "react";
import { useProducts } from "../hooks/apiHooks";
import { Product } from "../types/DBTypes";

const ProductList = () => {
    const { getProducts } = useProducts();
    const [products, setProducts] = useState<Product[]>([]);

    const getAllProducts = async () => {
        try {
            const products = await getProducts(); // Already returns the structured product list
            setProducts(products);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    useEffect(() => {
        getAllProducts();
    }, []);

    return (
        <div className="flex flex-wrap justify-center gap-4 m-4">
            {products.map((product) => (
                <div key={product.id} className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md">
                    <img
                        className="h-48 w-full object-cover rounded-t-lg"
                        src="https://via.placeholder.com/150"
                        alt={product.product_name}
                    />
                    <div className="p-5">
                        <h2 className="text-lg font-bold tracking-tight text-red-500">{product.product_name}</h2>
                        <p className="mb-3 font-normal text-gray-700">{product.description}</p>
                        <p className="text-gray-900">${product.product_price}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ProductList;
