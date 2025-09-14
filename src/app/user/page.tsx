import Search from "@/components/search"
import DeleteButton from "@/components/user0list"
import Username from "@/components/username"
import Wallet from "@/components/wallet"
import { deleteUser } from "@/libs/actions"
import prisma from "@/libs/prisma"
import { randomUUID } from "crypto"
import { Suspense } from "react"


export default async function UserPage({searchParams}:{searchParams: Promise<Record<string, string | undefined>>}) {
  const {searchTerm} = await searchParams;
  console.log(searchTerm)
  const users = await prisma.user.findMany({
    where: {
      name: {
        contains: searchTerm,
        mode: "insensitive"
      }}
  });
  

  return (
    <div className="p-16">
        <Search />
        {users.map(user => (
          <div key={user.id} className="flex gap-8">
            <p key={user.id}>{user.name}</p>
            <DeleteButton id={user.id}/>
          </div>
        
      ))}
      <div className="flex w-full justify-between  text-red-500 bg-amber-300">

        {/* <Suspense fallback={<p>Loading...</p>} key={randomUUID()}>
          <Username />
        </Suspense> */}
        {/* <Suspense fallback={<p>Loading...</p>} key={randomUUID()}>
          <Wallet />
        </Suspense> */}
      </div>
    </div>

  )
}
