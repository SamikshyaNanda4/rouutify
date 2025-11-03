// "use client"
// import {  getQueryClient, trpc } from "@/trpc/server"
// import {dehydrate, HydrationBoundary } from "@tanstack/react-query"
// // import { useTRPC } from "@/trpc/client";
// // import {useQuery } from "@tanstack/react-query";
// // import { Client } from "./client"
// import { Suspense } from "react"
// import { createAuthClient } from "better-auth/react"
// import { authClient } from "@/lib/auth-client"
// import { Button } from "@/components/ui/button"

import { requireAuth } from "@/lib/auth.utils"
import { LogoutButton } from "@/components/logout-button"

//Leverages the speed of a server component by instantly starting to prefetch this->void queryClient.prefetchQuery(trpc.getUsers.queryOptions())
//Conver back to a normal protected server component

const Page =  async() => {
  // const trpc=useTRPC()
  // const {data:users} = useQuery(trpc.getUsers.queryOptions())
  // const users=await caller.getUsers()
  // const queryClient=getQueryClient()
    // // void queryClient.prefetchQuery(trpc.getUsers.queryOptions())
    // const {data} =authClient.useSession()
    await requireAuth();

  return (
    <div className="min-h-screen min-w-screen flex flex-col gap-4 items-center justify-center">
      {/* <h1 className="text-blue-950">{JSON.stringify(users)}</h1> */}
      {/* <HydrationBoundary state={dehydrate(queryClient)}>
       <Suspense fallback={<p>...Loading</p>}>
           <Client/>
       </Suspense>
      </HydrationBoundary> */}
      <h1 className="text-2xl font-bold">Protected Server Component</h1>
      <LogoutButton />
    </div>
  )
}

export default Page