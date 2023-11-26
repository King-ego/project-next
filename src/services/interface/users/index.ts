import {Users} from "@/model/Users";
import IGetAllUsers from "@/services/interface/users/props/IGetAllUsers";


export default interface IUserGateway {
    getAllUsers({}:IGetAllUsers): Promise<Users[] | void>;
}
