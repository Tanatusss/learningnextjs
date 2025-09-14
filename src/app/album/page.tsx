import { fetchAlbum, fetchPhoto, fetchUser } from "@/libs/data"
import { Suspense } from "react"

export default async function AlbumPage() {

    // const albums = await fetchAlbum();  //1s
    // const photos = await fetchPhoto();  //3s
    // const users = await fetchUser();   //1s

    // const [albums, photos, users] = await Promise.all([
    //     fetchAlbum(),
    //     fetchPhoto(),
    //     fetchUser()
    // ])

    return (

        <div>
            <Suspense fallback={<p>Loading albums...</p>}>
                <AlbumList />
            </Suspense>
            <p>------</p>
            <Suspense fallback={<p>Loading photos...</p>}>
                <PhotoList />
            </Suspense>
            <p>------</p>
            <Suspense fallback={<p>Loading users...</p>}>
                <UserList />
            </Suspense>
        </div>
    )
}


async function AlbumList() {
    const albums = await fetchAlbum();
    return (
        <div>
            {(albums.slice(0, 2)).map((album: any) => (
                <p key={album.id}>{album.title}</p>
            ))}
        </div>
    );
}

async function PhotoList() {
    const photos = await fetchPhoto();
    return (
        <div>
            {(photos.slice(0, 2)).map((photo: any) => (
                <p key={photo.id}>{photo.title}</p>
            ))}
        </div>
    );
}

async function UserList() {
    const users = await fetchUser();
    return (
        <div>
            {(users.slice(0,2)).map((user: any) => (
                <p key={user.id}>{user.name}</p>
            ))}
        </div>
    );
}

