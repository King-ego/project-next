import axios from "axios";
import {cookies} from "next/headers";
import {getCookie} from "cookies-next";

const Authorization = `Barer ${cookies().get("token-api")?.value || getCookie("token-api")?.toString() || ""}`

const Api = axios.create({
    baseURL: "http://localhost:3001/api/",
    headers: {
        Authorization
    }
})

export default Api;