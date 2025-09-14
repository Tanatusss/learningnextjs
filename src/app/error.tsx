'use client';


export default function Error({error}: {error: Error}) {
  return (
    <div>500 !!! Error: {error.message}</div>
  )
}