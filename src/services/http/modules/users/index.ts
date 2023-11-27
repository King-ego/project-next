
import {AxiosResponse} from "axios";
import {Users} from "@/model/Users";
import IUserGateway from "@/services/interface/users";
import IGetAllUsers from "@/services/interface/users/props/IGetAllUsers";
import Api from "@/services/http/api";

class UsersGatewayClass implements IUserGateway{
    public async getAllUsers({Authorization}: IGetAllUsers): Promise<Users[] | void> {
        try {
            const users: AxiosResponse<Users[]> = await Api.get("users", {
                headers: {
                    Authorization
                }
            });
            return users.data;
        } catch (err) {
            console.log(err)
        }

    }
}


export default function UsersGateway(){
    return new UsersGatewayClass()
};