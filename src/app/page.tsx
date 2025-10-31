import {Button} from "@/components/ui/button"
import prisma from "@/lib/db"

const Page = async () => {
  const users = await prisma.user.findMany();
  return (
    <div className="min-h-screen min-w-screen flex items-center justify-center">
      <Button variant="outline">
        Click Me
      </Button>
      <h1 className="text-blue-950">{JSON.stringify(users)}</h1>
    </div>
  )
}

export default Page