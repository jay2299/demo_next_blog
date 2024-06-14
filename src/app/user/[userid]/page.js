'use client'

import React, { useEffect, useState } from 'react';
import getUser from "../../../../service/getuser";
export default function Page(props) {
    const [user, setUser] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            const users = await getUser();
            const userId = props.params.userid;
            const userData = users[userId - 1];
            setUser(userData);
            console.log(userData)
        };

        fetchData();
    }, [props.params.userid]);

    if (!user) {
        return <h1>Londing Data....</h1>;
    }

    return (
        <div>
            <title>UserList</title>
            <h3>User Data</h3>
            <h4>ID: {user.id}</h4>
            <h4>NAME: {user.name}</h4>
            <h4>PHONE: {user.phone}</h4>
        </div>
    );
}

 async function generateStaticParams() {
    const users = await getUser();
    return users.map(user => ({
        userid: user.id.toString()
    }));
}
