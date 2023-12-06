import {Users, UserToken} from "@/model/Users";
import IGetAllUsers from "@/services/interface/users/props/IGetAllUsers";
import ILoginUser from "@/services/interface/users/props/ILoginUser";


export default interface IUserGateway {
    getAllUsers({}:IGetAllUsers): Promise<Users[] | void>;
    createLogin({}: ILoginUser): Promise<UserToken | void>;
}
