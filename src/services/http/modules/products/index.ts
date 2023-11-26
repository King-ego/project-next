import IProductsGateway from "@/services/interface/products";
import {Products} from "@/model/Products";
import Api from "@/services/http/api";

class ProductsGatewayClass implements IProductsGateway {
    public async listAllProducts(): Promise<Products[] | void> {
        try {
            const productsData = await Api.get<Products[]>("/products")
            return productsData.data

        } catch (err) {
            console.log(err)
        }
    }
}


export default function ProductsGateway(){
    return new ProductsGatewayClass();
};