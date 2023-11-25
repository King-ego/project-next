import {Products} from "@/model/Products";

export default interface IProductsGateway {
    listAllProducts(): Promise<Products[] | void>
}