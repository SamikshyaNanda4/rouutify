"use client"

import { Button } from "@/components/ui/button"
import { authClient } from "@/lib/auth-client"
import { Loader2 } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { toast, Toaster } from "sonner"

export function LogoutButton() {
  const router = useRouter()
  const [loading,setLoading]=useState<boolean>(false)

  const handleLogout = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push('/login')
        },
        onRequest:()=>{
          setLoading(true)
        },
        onError:(ctx)=>{
          setLoading(false)
          toast.error(ctx.error.message|| "some error occured while logging out")
        }
      },
    })
  }

  return (
    <Button
      className="cursor-pointer"
      onClick={handleLogout}
      disabled={loading}
    >
      {loading ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Logging out...
        </>
      ) : (
        "Logout"
      )}
    </Button>
  )
}
