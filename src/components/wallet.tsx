import prisma from "@/libs/prisma";
import { simulateLoading } from "@/libs/utils";

export default async function Wallet() {
  await simulateLoading(3);
  const users = await prisma.user.findMany();
  return (
    <div>{users.map(user => <p key={user.id}>{user.wallet.toFixed(2)}</p>)}</div>
  )
}