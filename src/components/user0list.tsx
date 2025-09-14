'use client';

import { deleteUser } from "@/libs/actions";

export default function DeleteButton({id}: {id: string}) {
    const handleClick = async () => {
    await deleteUser(id);
  }
  return (
    <button onClick={handleClick} className="text-red-500">Delete</button>
  )
}