import IImageGateway from "@/services/interface/images";
import Api from "@/services/http/api";
import GetImageAWS from "@/services/interface/images/props/getImageAWS";

class ImageGatewayClass implements IImageGateway {
    public async getImageAWS({filename, Authorization}: GetImageAWS): Promise<BufferSource | void> {
        try {
            const image = await Api.get<BufferSource>("upload/imagesOnly", {
                headers: {
                    Authorization
                },
                params: {
                    filename,
                },
                responseType: "arraybuffer"
            })

            return image.data
        }catch (err) {
            console.log(err);
        }
    }
}

export default function ImageGateway(){
    return new ImageGatewayClass();
}