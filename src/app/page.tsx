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

//Leverages the speed of a server component by instantly starting to prefetch this->void queryClient.prefetchQuery(trpc.getUsers.queryOptions())
//Conver back to a normal protected server component

const Page =  () => {
  // const trpc=useTRPC()
  // const {data:users} = useQuery(trpc.getUsers.queryOptions())
  // const users=await caller.getUsers()
  // const queryClient=getQueryClient()
    // // void queryClient.prefetchQuery(trpc.getUsers.queryOptions())
    // const {data} =authClient.useSession()

  return (
    <div className="min-h-screen min-w-screen flex items-center justify-center">
      {/* <h1 className="text-blue-950">{JSON.stringify(users)}</h1> */}
      {/* <HydrationBoundary state={dehydrate(queryClient)}>
       <Suspense fallback={<p>...Loading</p>}>
           <Client/>
       </Suspense>
      </HydrationBoundary> */}
      Protected Server Component
    </div>
  )
}

export default Page