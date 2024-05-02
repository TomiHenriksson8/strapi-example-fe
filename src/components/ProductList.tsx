import { Product } from "../types/DBTypes"

interface ProductArray {
    products: Product[];
}

const mockData: ProductArray = {
    products: [
        {
            id: 1,
            product_name: 'Product 1',
            description: 'Description 1',
            price: 100,
        },
        {
            id: 2,
            product_name: 'Product 2',
            description: 'Description 2',
            price: 200,
        },
        {
            id: 3,
            product_name: 'Product 3',
            description: 'Description 3',
            price: 300,
        },
    ],
}


const ProductList = () => {
  
  
  
    return (
        <div className="">
            {mockData.products.map((product) => (
                <div key={product.id}>
                    <h2 className="">{product.product_name}</h2>
                    <p>{product.description}</p>
                    <p>{product.price}</p>
                </div>
            ))}
        </div>
  )
}

export default ProductList