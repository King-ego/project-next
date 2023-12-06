import {getCookie, deleteCookie, setCookie} from "cookies-next";

export function getClientCookie({key}: { key: string }) {
    return getCookie(key, {
        sameSite: "none"
    })
}

export function deleteClientCookie({key}: { key: string }) {
    return deleteCookie(key, {
        sameSite: "none"
    })
}

export function setClientCookie({key, value}: { key: string, value: string }) {
    return setCookie(key, value, {
        sameSite: "none"
    });
}
