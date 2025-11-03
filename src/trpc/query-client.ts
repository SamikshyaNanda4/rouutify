
//A Tanstack Query configuration that works well with tRPC in NextJS Application
import {defaultShouldDehydrateQuery,QueryClient} from "@tanstack/react-query"
// import superjson from "superjson"

export function makeQueryClient(){
    return new QueryClient({
        defaultOptions:{
            queries:{
                staleTime:30*1000,
            },
            dehydrate:{
                shouldDehydrateQuery:(query)=>defaultShouldDehydrateQuery(query) ||
                query.state.status==='pending',
            },
            hydrate:{
                //deserialize data
                //superjson.deserialize 
            }
        }
    })
}

