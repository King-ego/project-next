import ProductsGateway from "@/services/http/modules/products";
import {Price} from "@/app/styled";
import Currency from "@/utils/currency";
import ImageFromApi from "@/componets/ImageFromApi";
import Image from "next/image";

export default async function Products() {
    const products = await ProductsGateway().listAllProducts() || [];
    return (
        <div className={`
            flex items-center justify-center gap-10 flex-wrap
        `}>
            {products && products?.map(product => (
                <div key={product.id} className={`
                    flex items-center justify-center bg-gray-300 flex-col text-black rounded-2xl overflow-hidden w-80
                `}>
                    <div className={`
                        w-full h-52 bg-black relative overflow-hidden
                    `}>
                        {product?.images?.length ? (
                            <ImageFromApi fileName={product.images[0].filename}/>
                        ): <Image src="/images/image-not.png" fill alt="image não encontrada"/>}
                    </div>
                    <p>{product.amount}</p>
                    <p>{product.name}</p>
                    <p>{product.description}</p>
                    <div className={`flex gap-2`}>
                        <p className={Price({line: product.discount ? "through" : "default"})}>{Currency(product.price)}</p>
                        <p>{Currency(product.price - product.price * (product.discount / 100))}</p>
                    </div>
                </div>)
            )}
        </div>
    )
}