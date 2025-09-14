'use client'
import { clickFunction, createUser, serverFunction } from "@/libs/actions";
import { simulateLoading } from "@/libs/utils";
import { useActionState } from "react";

// async function createUser(prevState: {username: string}, formData:FormData) {
//     await simulateLoading(5);
//     return {username: formData.get('username') as string || prevState.username}
// }

export type FormState = {
    data: {username: string, age: string},
    error?: {username?: string, age?: string}
}

const initialState: FormState= {
    data: {username: '',age: ''},
}

export default function CreateUserPage() {

const [state, action, pending] = useActionState(createUser, initialState)

console.log(state)
  return (
    // <form action="/create-user" method="POST">
           <form action= {action}>
        <div>
            <label htmlFor="">Name: </label>
            <input name="username" type="text" placeholder="Enter username" className="px-3 py-1.5 border" />
            {state.error?.username && (
                <p className="text-red-500">{state.error?.username}</p>
            )}
        </div>
        <div>
            <label htmlFor="">Age: </label>
            <input name="age" type="text" placeholder="Enter age" className="px-3 py-1.5 border" />
            {state.error?.age && (
                <p className="text-red-500">{state.error?.age}</p>
            )}
        </div>
        <button  
        // type="button" 
        className="px-4 py-2 bg-blue-500" 
        // onClick={clickFunction}
        >Create User</button>
    </form>
  )
}