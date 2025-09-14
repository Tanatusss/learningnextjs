import z from "zod";

// type Post = {
//     userId: number,
//     id: number,
//     title: string,
//     body: string
// }

const postSchema = z.object({
    userId: z.number().int().positive(),
    id: z.number().int().positive(),
    title: z.string(),
    body: z.string() 
})

const postArraySchema = z.array(postSchema)

type Post = z.infer<typeof postSchema>;

export default async function PostPage() {
  const result = await fetch('https://jsonplaceholder.typicode.com/posts').then(
    r => r.json() 
);
const {data, success} = postArraySchema.safeParse(result);
if(!success){
    throw new Error('Post structure is invalid')
}

  return (
    <div>
        {data.map((el: Post) => (
            <p key={el.id}>{el.title}</p>))}
    </div>
  )
}
