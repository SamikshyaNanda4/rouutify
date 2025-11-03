// "use client"
import {  getQueryClient, trpc } from "@/trpc/server"
import {dehydrate, HydrationBoundary } from "@tanstack/react-query"
// import { useTRPC } from "@/trpc/client";
// import {useQuery } from "@tanstack/react-query";
import { Client } from "./client"
import { Suspense } from "react"

//Leverages the speed of a server component by instantly starting to prefetch this->void queryClient.prefetchQuery(trpc.getUsers.queryOptions())

const Page =  async () => {
  // const trpc=useTRPC()
  // const {data:users} = useQuery(trpc.getUsers.queryOptions())
  // const users=await caller.getUsers()
  const queryClient=getQueryClient()
  void queryClient.prefetchQuery(trpc.getUsers.queryOptions())

  return (
    <div className="min-h-screen min-w-screen flex items-center justify-center">
      {/* <h1 className="text-blue-950">{JSON.stringify(users)}</h1> */}
      <HydrationBoundary state={dehydrate(queryClient)}>
       <Suspense fallback={<p>...Loading</p>}>
           <Client/>
       </Suspense>
      </HydrationBoundary>
    </div>
  )
}

export default Page