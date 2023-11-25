import {Users} from "@/model/Users";
export default interface IUserGateway {
    getAllUsers(): Promise<Users[] | void>;
}
