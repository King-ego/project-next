import ProductsGateway from "../../services/products"
export default async function Products() {
    const products = await ProductsGateway.listAllProducts() || []
    return(
        <div>
            {products && products?.map(product=> (
                <div key={product.id}>
                    <p>{product.amount}</p>
                    <p>{product.name}</p>
                    <p>{product.discount}</p>
                    <p>{product.price}</p>
                </div>)
            )}
        </div>
    )
}