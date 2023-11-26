import Api from "../api";
import {AxiosResponse} from "axios";
import {Users} from "@/model/Users";
import IUserGateway, {IGetAllUsers} from "@/services/interface/users";

class UsersGateway implements IUserGateway{
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

// eslint-disable-next-line import/no-anonymous-default-export
export default new UsersGateway();