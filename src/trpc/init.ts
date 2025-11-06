import { auth } from "@/lib/auth"
import {initTRPC, TRPCError} from "@trpc/server"
import { headers } from "next/headers"
import{cache} from "react"

export const createTRPCContext= cache(async()=>{
    //auth styling here
    return{
        userId:"user_123"
    }
})

const t= initTRPC.context<Awaited<ReturnType<typeof createTRPCContext>>>().create({

})

//ACTUAL ROUTER CALLER FACTORY AND BASE PROCEDURE
export const createTRPCRouter=t.router;
export const createCallerFactory=t.createCallerFactory;
export const baseProcedure=t.procedure;
export const protectedProcedure=baseProcedure.use(async ({ctx, next})=>{
    const session=await auth.api.getSession({
        headers:await headers()
    })  
    if(!session){
        throw new TRPCError({
            code:"UNAUTHORIZED",
            message:"Unauthorized User",
        })
    }

    return next({ctx:{...ctx,auth:session}});
})

