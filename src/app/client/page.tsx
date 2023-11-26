"use client"
import {useEffect, useState} from "react";
import UserGateway from "../../services/users"
import Authorization from "@/utils/cookie/clientCookie";
import {Users} from "@/model/Users";

export default function Page() {
    const [users, setUsers] = useState<Users[]>([])
    const b = async () => {
        const a = await UserGateway.getAllUsers({Authorization});
        if(a) setUsers(a);
        console.log({a});
    }
    useEffect(() => {
        b().then(()=> "ok")
    }, []);
    return <div onClick={b}>{
        users?.length && users.map((usr)=> (
            <p key={usr.id}>{usr.email}</p>
        ))
    }</div>
}