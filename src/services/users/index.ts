import Api from "../api";
import {AxiosResponse} from "axios";
import {Users} from "@/model/Users";
import IUserGateway from "@/services/interface/users";

class UsersGateway implements IUserGateway{
    public async getAllUsers(): Promise<Users[] | void> {
        try {
            const users: AxiosResponse<Users[]> = await Api.get("users");
            return users.data;
        } catch (err) {
            console.log(err)
        }

    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new UsersGateway();