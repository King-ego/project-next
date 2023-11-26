import UsersGateway from "../services/http/users";
import {FormatDate} from "@/utils/date";
import Link from "next/link";
import Button from "@/componets/Button";
import {Users} from "@/model/Users";

import Authorization from "../utils/cookie/serverCookie"


export default async function Home() {
    const users = await UsersGateway().getAllUsers({Authorization}) || [];

    return (
        <div className={`
            bg-amber-50 flex flex-col gap-2 justify-center items-center
        `}>
            {users && users?.map((user: Users) => (
                <div key={user.id} className={`
                    bg-gray-500 w-full flex justify-around text-black flex-wrap gap-2
                `}>
                    <p>{user.name}</p>
                    <p>{user.email}</p>
                    <p>{FormatDate(user.created_at)}</p>
                    <p>{FormatDate(user.updated_at)}</p>
                    <Link href={`/brt/${user.id}`}>Vai</Link>
                </div>
            ))}
            <Button
                size="default"
                className="bg-cyan-400 rounded-2xl p-2"
            >Clique</Button>
        </div>
    )
}