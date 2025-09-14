'use client'
import z from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerUser } from "@/libs/actions";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
const registerFormSchema = z.object({
    name: z.string().min(3).trim().min(3,'Name must be at least 3 characters long'),
    point: z.string().regex(/^[0-9]{1,}$/,'Point must be a number')
})

export type FormInput = z.infer<typeof registerFormSchema>

export default function RegisterForm() {
    const {register, handleSubmit, formState: {errors}} = useForm<FormInput>({
        resolver: zodResolver(registerFormSchema),
        defaultValues: {name: '', point: '0'},

    });
    // const router = useRouter();
    const [isPending, starttransition] = useTransition();

    const onSubmit: SubmitHandler<FormInput> = async data => {
      starttransition(async()=>{
         const result = await registerUser(data)
      if(!result.success){
        // throw new Error('Request failed')
        return;
      }
    //   router.push('/')
      //console.log(data)
      })
    }
    if(isPending) {
        return <h1 className="flex justify-center text-5xl">Loading...</h1>
    }
  return (
    <form onSubmit={handleSubmit(onSubmit)} >
      <div>
        <label htmlFor="">Name: </label>
        <input
          type="text"
          placeholder="Enter username"
          className="px-3 py-1.5 border"
          {...register('name')}
        />
        {errors.name && (
            <p className="text-red-500">{errors.name.message}</p>
        )}
      </div>
      <div>
        <label htmlFor="">Point: </label>
        <input
          type="text"
          placeholder="Enter point"
          className="px-3 py-1.5 border"
          {...register('point')}
        />
        {errors.point && (
            <p className="text-red-500">{errors.point.message}</p>
        )}
      </div>
      <button className="px-4 py-2 bg-blue-500">Save</button>
    </form>
  );
}