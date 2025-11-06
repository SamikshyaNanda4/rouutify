import {headers} from "next/headers"
import { redirect } from "next/navigation"
import { auth } from "./auth"


export const requireAuth=async()=>{
    const session = await auth.api.getSession({
        headers:await headers(),
    })

    console.log('requireAuth - session:', session)
    console.log('requireAuth - session.user:', session?.user)
    console.log('requireAuth - redirecting:', !session?.user)

    if(!session?.user){
        redirect('/login')
    }

    return session;
}


export const requireUnAuth=async()=>{
    const session = await auth.api.getSession({
        headers:await headers(),
    })

    if(session?.user){
        redirect('/')
    }

    return session;
}