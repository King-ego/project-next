import IProductsGateway from "@/services/interface/products";
import {Products} from "@/model/Products";
import Api from "@/services/api";

class ProductsGateway implements IProductsGateway {
    public async listAllProducts(): Promise<Products[] | void> {
        try {
            const productsData = await Api.get<Products[]>("/products")
            return productsData.data

        } catch (err) {
            console.log(err)
        }
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new ProductsGateway();