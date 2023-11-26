"use client"
import {getCookie} from "cookies-next";

const Authorization = `Barer ${getCookie("token-api")?.toString() || ""}`

export default Authorization