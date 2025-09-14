'use server'

import { FormState } from "@/app/user/create/page"
import { FormInput } from "@/components/register-form"
import prisma from "./prisma"
import z, { success } from "zod"
import { simulateLoading } from "./utils"
import { redirect } from "next/navigation"
import { revalidatePath } from "next/cache"

export async function serverFunction(formData: FormData) {
    console.log(formData)
}

export async function clickFunction() {
    console.log('click')
}


export async function  createUser(
    prevState:FormState , 
    formData:FormData
): Promise<FormState> {
    const username = (formData.get('username')?? '')as string
    const age = (formData.get('age')?? '')as string
    if(!username) {
        return {data: {username,age}, error: {username: 'Username is required'}}
    }
    return {data: {username,age}
}
    
}

const registerFormSchema = z.object({
    name: z.string().min(3).trim().min(3,'Name must be at least 3 characters long'),
    point: z.coerce.number().int().positive()
})


export async function  registerUser(input: FormInput ) {
    await simulateLoading(5);
    const {success, data, error} = registerFormSchema.safeParse(input)
    if (!success){
    // throw new Error('Invalid input')
        return {success: false, message: 'Invalid input'}
    }
    await prisma.user.create({
        data
    })
    revalidatePath('/user')
    redirect('/user')
    return {success: true}
}

export async function  deleteUser(id:string) {
    await simulateLoading(5);
    await prisma.user.delete({
        where: {id}
    })
    revalidatePath('/user'); //ตอนdevเห็นลบ เเต่ตอนprodไม่เห็น
    
}
    
