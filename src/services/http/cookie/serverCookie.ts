import {cookies} from "next/headers";

const Authorization = `Barer ${cookies().get("token-api")?.value || ""}`


export default Authorization