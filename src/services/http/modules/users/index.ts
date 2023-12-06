
import {AxiosResponse} from "axios";
import {Users, UserToken} from "@/model/Users";
import IUserGateway from "@/services/interface/users";
import IGetAllUsers from "@/services/interface/users/props/IGetAllUsers";
import Api from "@/services/http/api";
import ILoginUser from "@/services/interface/users/props/ILoginUser";

class UsersGatewayClass implements IUserGateway{

    public async createLogin({password, email}: ILoginUser): Promise<UserToken | void> {
        try {
            const userToken = await Api.post<UserToken>("/session", {
                email,
                password
            });
            return userToken.data;
        }catch (e) {
            console.log(e)
        }
    }

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