import Api from "../api";
import {AxiosResponse} from "axios";
import {Users} from "@/model/Users";
import IUserGateway from "@/services/interface/users";
import IGetAllUsers from "@/services/interface/users/props/IGetAllUsers";

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
            console.log((err as unknown as any)?.response.data)
        }

    }
}


export default function UsersGateway(){
    return new UsersGatewayClass()
};