import prisma from "@/libs/prisma"
import { simulateLoading } from "@/libs/utils";

export default async function Username() {
  await simulateLoading(5);
  const users = await prisma.user.findMany();
  return (
    <div>{users.map(user => <p key={user.id}>{user.name}</p>)}</div>
  )
}
