import Api from "../api";
import {AxiosResponse} from "axios";
import Users from "@/model/Users";

export default class UsersGateway {
    static async getAllUsers(): Promise<Users[] | any> {
        try {
            const users: AxiosResponse<Users[]> = await Api.get("users");
            return users.data;
        } catch (err) {
            console.log(err)
        }

    }
}