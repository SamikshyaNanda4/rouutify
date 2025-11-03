"use client"

import { useTRPC } from "@/trpc/client"
import { useSuspenseQuery } from "@tanstack/react-query"

export const Client =()=>{
    const trpc=useTRPC()
    const {data:users}=useSuspenseQuery(trpc.getUsers.queryOptions());
    const userData=JSON.stringify(users)
    return(
        <div>
            <h1>Client Component:</h1>
            <br />
           {
            users.map(user=>{
                return(
                    <><h3>{user.name}</h3><h2>{user.email}</h2> <br /></>
                )
            })
           }
        </div>
    )
}