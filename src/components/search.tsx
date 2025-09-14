'use client'
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { useDebouncedCallback } from "use-debounce";


export default function Search() {
    const router = useRouter();
    const searchParams = useSearchParams(); //searchTerm=john
    const pathname = usePathname();
    console.log(pathname)
    searchParams.get('searchTerm')
    console.log(searchParams.get('searchTerm') )

    // useEffect(() => {
    //     const timerId = setTimeout(() => {}, 3000)
    //     return () => clearTimeout(timerId);
    // }, []) // debounce

    // const params = new URLSearchParams();
    // params.set('age', '90'); // age=90
    // params.set('gender', 'male');// age=90&gender=male
    // // console.log('params',params)
    // // console.log(params.toString());
    // const newParams = new URLSearchParams(params.toString())
    // console.log(newParams.toString())
    // newParams.delete('searchTerm')
    // console.log(newParams.toString())

    // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {}

    const handleChange: React.ChangeEventHandler<HTMLInputElement> =
    useDebouncedCallback(e => {
        // console.log(e.target.value);
        const params = new URLSearchParams(searchParams);
        const searchTerm = e.target.value;
        if (searchTerm) {
            params.set('searchTerm', searchTerm);
        } else {
            params.delete('searchTerm');
        }
        router.push(`${pathname}?${params.toString()}`)
    }, 1000)
        // debounce 3s
  return (
        <input
            type="text"
            placeholder="Enter something to search..."
            className="border border-gray-200 p-4 mb-8 w-80"
            onChange={handleChange}
            defaultValue={searchParams.get('searchTerm') ?? ''}
        />
    )
}