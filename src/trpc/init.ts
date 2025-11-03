import {initTRPC} from "@trpc/server"
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

