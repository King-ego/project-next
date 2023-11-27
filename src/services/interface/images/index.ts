import GetImageAWS from "@/services/interface/images/props/getImageAWS";

export default interface IImageGateway {
    getImageAWS({}: GetImageAWS): Promise<BufferSource | void>
}