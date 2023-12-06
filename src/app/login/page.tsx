"use client"
import {setCookie, deleteCookie, getCookie} from "cookies-next";
import {FormEvent, useCallback, useEffect, useRef} from "react";
import UsersGateway from "@/services/http/modules/users";
import {Input} from "./styled";
import {deleteClientCookie, getClientCookie, setClientCookie} from "@/services/http/cookie/status/statusClientCookie";

export default function LoginPage() {
    const emailRef = useRef<HTMLInputElement | null>(null)
    const passwordRef = useRef<HTMLInputElement | null>(null)
    const rememberPasswordRef = useRef<HTMLInputElement | null>(null)

    const switchVisible = useCallback(() => {
        if (!passwordRef.current?.type) return;

        if (passwordRef.current.type === "password") {
            passwordRef.current.type = "text"
            return;
        }

        passwordRef.current.type = "password"

    }, [])
    useEffect(() => {
        const credencialText = getClientCookie({key: "credencial"})
        if (credencialText && emailRef.current && passwordRef.current && rememberPasswordRef.current) {
            const credencial = JSON.parse(credencialText);
            emailRef.current.value = credencial.email || ""
            passwordRef.current.value = credencial.password || ""
            rememberPasswordRef.current.checked = credencial.checked || false;
        }

    }, []);
    const submit = useCallback(async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const payload = {
            email: emailRef.current?.value || "",
            password: passwordRef.current?.value || ""
        }
        const login = await UsersGateway().createLogin(payload);

        if (!login) return

        deleteClientCookie({key: "token-api"})
        setClientCookie({key:"token-api", value: login.token});

        if(!rememberPasswordRef.current?.checked) {
            deleteClientCookie({key:"credencial"})
            return
        }

        deleteClientCookie({key:"credencial"})
        setClientCookie({key:"credencial", value: JSON.stringify({...payload, checked: rememberPasswordRef.current?.checked || false})})


    }, [])
    return (
        <div className={`
            w-full h-screen flex justify-center items-center
        `}>
            <div className={`
                w-96 h-96 bg-white rounded-2xl flex flex-col gap-2 
            `}>
                <p className={`
                    text-black font-bold text-3xl text-center
                `}>Login</p>
                <form onSubmit={submit} className={`
                    flex flex-col gap-2
                `}>
                    <div>
                        <input
                            ref={emailRef}
                            placeholder="email"
                            autoComplete="off"
                            className={Input()}
                        />
                    </div>
                    <div className="relative">
                        <input
                            ref={passwordRef}
                            placeholder="password"
                            type="password"
                            autoComplete="off"
                            className={Input()}
                        />
                        <p className={`
                            absolute top-1 text-black right-1 cursor-pointer
                        `} onClick={switchVisible}>p</p>
                    </div>

                    <div className={`
                        flex
                    `}>
                        <input ref={rememberPasswordRef} type="checkbox"/>
                        <span className="text-black">Lembrar senha</span>
                    </div>

                    <button type="submit" className={`bg-red-500 hover:bg-red-700`}>Enviar
                    </button>
                </form>
            </div>
        </div>
    )
}