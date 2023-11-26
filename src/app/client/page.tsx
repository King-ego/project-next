"use client"
import {useEffect, useState} from "react";
import UserGateway from "../../services/http/modules/users"
import Authorization from "@/services/http/cookie/clientCookie";
import {Users} from "@/model/Users";

export default function Page() {
    const [users, setUsers] = useState<Users[]>([])
    const b = async () => {
        const a = await UserGateway().getAllUsers({Authorization});
        if(a) setUsers(a);
        console.log({a});
    }
    useEffect(() => {
        b().then(()=> "ok")
    }, []);
    if(!users?.length) {
       return <>Carregando</>
    }
    return <div onClick={b}>{
        users.map((usr)=> (
            <p key={usr.id}>{usr.email}</p>
        ))
    }</div>
}