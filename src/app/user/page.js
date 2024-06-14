'use client'
import getUser from "../../../service/getuser";
import Link from "next/link";

export default async function Page(){
    const getuserlist = getUser()
    const users = await getuserlist;
    // console.log(users)
    return(
        <div>
            <title>User</title>
            <h1>User</h1>
            {
                users.map((user)=>(
                    <h2 key={user.id}>
                        <Link href={`/user/${user.id}`}>{user.name}</Link>
                    </h2>
                ))
            }
        </div>
    )

}