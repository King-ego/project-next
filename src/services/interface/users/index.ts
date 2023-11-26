import {Users} from "@/model/Users";

export interface IGetAllUsers {
    Authorization: string
}
export default interface IUserGateway {
    getAllUsers({}:IGetAllUsers): Promise<Users[] | void>;
}
